import Anchor from "./index";
import { MemoryRouter } from "react-router-dom";

export default {
  component: Anchor,
  title: "Anchor",
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = args => <Anchor {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Default",
};

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args.button,
  text: "Primary",
  variant: "primary",
  route: "/",
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args.button,
  text: "Secondary",
  variant: "secondary",
  route: "/",
};

export const Success = Template.bind({});
Success.args = {
  ...Default.args.button,
  text: "Success",
  variant: "success",
  route: "/",
};

export const Danger = Template.bind({});
Danger.args = {
  ...Default.args.button,
  text: "Danger",
  variant: "danger",
  route: "/",
};

export const Warning = Template.bind({});
Warning.args = {
  ...Default.args.button,
  text: "Warning",
  variant: "warning",
  route: "/",
};

export const Info = Template.bind({});
Info.args = {
  ...Default.args.button,
  text: "Info",
  variant: "info",
  route: "/",
};

const AllButtonsTemplate = ({ items }) =>
  items.map(item => <Anchor {...item} />);

export const All = AllButtonsTemplate.bind({});
All.args = {
  items: [
    Default.args,
    Primary.args,
    Secondary.args,
    Success.args,
    Danger.args,
    Warning.args,
    Info.args,
  ],
};
