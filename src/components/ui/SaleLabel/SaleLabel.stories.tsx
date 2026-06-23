import { SaleLabel } from "./SaleLabel";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SaleLabel> = {
  component: SaleLabel,
  decorators: [
    (Story) => (
      <div
        style={{
          position: "relative",
          width: 240,
          height: 320,
          border: "1px solid #eee",
          padding: 8,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            top: "15px",
            left: "15px",
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SaleLabel>;

export const Default: Story = {};
