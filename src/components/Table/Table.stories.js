import Table from "./index";
import Button from "../Button";

export default {
  component: Table,
  title: "Table",
};

const Template = args => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  cols: ["Name", "Email", "Phone"],
  rows: [
    {
      name: "Charlinho da Silva",
      email: "batata.estudar@ig.com",
      phone: "5551985858585",
    },
    { name: "Son Goku", email: "kamehame.ha@ig.com", phone: "5551985868584" },
    {
      name: "Leanne Predovic",
      email: "leanne37@hotmail.com",
      phone: "5554935861284",
    },
    {
      name: "Fabiano Franco",
      email: "fabiano76@yahoo.com",
      phone: "5560906994471",
    },
  ],
};

export const WithActions = Template.bind({});
WithActions.args = {
  ...Default.args,
  actions: [
    <Button style="warning" text="Edit" action={() => alert(1)} />,
    <Button style="danger" text="Remove" action={() => alert(1)} />,
  ],
};
