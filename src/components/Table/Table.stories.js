import React from "react";
import { MemoryRouter } from "react-router-dom";
import Table from "./index";

export default {
  component: Table,
  title: "Table",
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
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
    {
      name: "Son Goku",
      email: "kamehame.ha@ig.com",
      phone: "5551985868584",
    },
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

export const WithButtons = Template.bind({});
WithButtons.args = {
  cols: ["Name", "Email", "Phone"],
  rows: [
    {
      id: 1,
      name: "Charlinho da Silva",
      email: "batata.estudar@ig.com",
      phone: "5551985858585",
    },
    {
      id: 2,
      name: "Son Goku",
      email: "kamehame.ha@ig.com",
      phone: "5551985868584",
    },
    {
      id: 3,
      name: "Leanne Predovic",
      email: "leanne37@hotmail.com",
      phone: "5554935861284",
    },
    {
      id: 4,
      name: "Fabiano Franco",
      email: "fabiano76@yahoo.com",
      phone: "5560906994471",
    },
  ],
  selectedRows: ["name", "email", "phone"],
  displayButtons: true,
};
