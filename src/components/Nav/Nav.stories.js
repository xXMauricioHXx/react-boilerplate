import Button from "./index";

export default {
  component: Button,
  title: "Nav",
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Default",
};

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args.button,
  text: "Primary",
  style: "primary",
  action: () => alert("Primary"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args.button,
  text: "Secondary",
  style: "secondary",
  action: () => alert("Secondary"),
};

export const Success = Template.bind({});
Success.args = {
  ...Default.args.button,
  text: "Success",
  style: "success",
  action: () => alert("Success"),
};

export const Danger = Template.bind({});
Danger.args = {
  ...Default.args.button,
  text: "Danger",
  style: "danger",
  action: () => alert("Danger"),
};

export const Warning = Template.bind({});
Warning.args = {
  ...Default.args.button,
  text: "Warning",
  style: "warning",
  action: () => alert("Warning"),
};

export const Info = Template.bind({});
Info.args = {
  ...Default.args.button,
  text: "Info",
  style: "info",
  action: () => alert("Info"),
};

const AllButtonsTemplate = ({ items }) =>
  items.map((item) => <Button {...item} />);

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
