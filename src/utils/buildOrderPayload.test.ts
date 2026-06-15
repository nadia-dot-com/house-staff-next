import { describe, expect, it } from "vitest";
import { buildOrderPayload, BuildOrderPayloadArgs } from "./buildOrderPayload";

const createData = (overrides = {}): BuildOrderPayloadArgs => ({
  items: [
    {
      id: "1",
      name: "Test product",
      img: "test",
      price: 100,
      discount: 0,
      categoryName: "test",
      quantity: 5,
    },
  ],
  shippingAddress: {
    fullName: "Test Name",
    address: "test",
    postalCode: "test",
    city: "test",
    country: "test",
    phone: "test",
    email: "test",
    notes: null,
  },
  delivery: {
    id: "1",
    name: "test delivery",
    price: 0,
  },
  payment: {
    id: "1",
    name: "test payment",
  },
  total: 500,
  ...overrides,
});

describe("buildOrderPayload", () => {
  it("should build order payload with correct mapping", () => {
    const data = createData();
    const result = buildOrderPayload(data);

    expect(result).toEqual({
      delivery: {
        method: data.delivery.id,
      },
      payment: {
        method: data.payment.id,
      },
      totalPrice: data.total,
      shippingDetails: {
        address: {
          country: data.shippingAddress.country,
          city: data.shippingAddress.city,
          postalCode: data.shippingAddress.postalCode,
          street: data.shippingAddress.address,
        },

        email: data.shippingAddress.email,
        phone: data.shippingAddress.phone,
        notes: data.shippingAddress.notes || null,
      },
      items: [{ product: { id: "1" }, quantity: 5 }],
    });
  });

  it("should throw an error if shipping data is incomplete", () => {
    const incompleteData = {
      shippingAddress: { country: "Poland" },
    } as any;

    expect(() => buildOrderPayload(incompleteData)).toThrow(
      "Cannot build order payload: shipping data is incomplete",
    );
  });

  it("should correctly include notes when provided", () => {
    const data = createData({
      shippingAddress: {
        ...createData().shippingAddress,
        notes: "Leave at the front door",
      },
    });

    const result = buildOrderPayload(data);
    expect(result.shippingDetails.notes).toBe("Leave at the front door");
  });

  it("should ensure notes are null if not provided", () => {
    const data = createData({
      shippingAddress: {
        ...createData().shippingAddress,
        notes: undefined,
      } as any,
    });

    const result = buildOrderPayload(data);
    expect(result.shippingDetails.notes).toBeNull();
  });
});