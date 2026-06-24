import { useEffect } from "react";
import { useOptions } from "@/hooks/options/useOptions";
import { PaymentMethod } from "@/types/api/options";
import { RadioGroup } from "@/components/RadioGroup/RadioGroup";

export function Payment({
  payment,
  updatePayment,
}: {
  payment: PaymentMethod | null;
  updatePayment: (data: PaymentMethod) => void;
}) {
  const { data } = useOptions();

  const paymentOptions = data?.paymentMethods ?? [];

  useEffect(() => {
    if (!payment && paymentOptions.length > 0) {
      updatePayment(paymentOptions[0]);
    }
  }, [payment, paymentOptions, updatePayment]);

  return (
    <RadioGroup
      title="Payment"
      options={paymentOptions}
      method={payment}
      onClick={updatePayment}
    />
  );
}
