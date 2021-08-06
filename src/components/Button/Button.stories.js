import Button from "./index";

export default {
  component: Button,
  title: "Button",
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Default",
};

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args.button,
  text: "Primary",
  variant: "primary",
  action: () => alert("Primary"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args.button,
  text: "Secondary",
  variant: "secondary",
  action: () => alert("Secondary"),
};

export const Success = Template.bind({});
Success.args = {
  ...Default.args.button,
  text: "Success",
  variant: "success",
  action: () => alert("Success"),
};

export const Danger = Template.bind({});
Danger.args = {
  ...Default.args.button,
  text: "Danger",
  variant: "danger",
  action: () => alert("Danger"),
};

export const Warning = Template.bind({});
Warning.args = {
  ...Default.args.button,
  text: "Warning",
  variant: "warning",
  action: () => alert("Warning"),
};

export const Info = Template.bind({});
Info.args = {
  ...Default.args.button,
  text: "Info",
  variant: "info",
  action: () => alert("Info"),
};

const AllButtonsTemplate = ({ items }) =>
  items.map(item => <Button {...item} />);

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
