import { NewProductLabel } from "./NewProductLabel";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NewProductLabel> = {
  component: NewProductLabel,
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

type Story = StoryObj<typeof NewProductLabel>;

export const Default: Story = {};
