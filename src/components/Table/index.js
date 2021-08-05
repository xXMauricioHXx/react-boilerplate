import React from "react";
import PropTypes from "prop-types";

const Table = ({ cols, rows, actions }) => (
  <div class="w-full">
    <div class="shadow overflow-x-scroll sm:overflow-hidden rounded border-b border-gray-200">
      <table className="min-w-full text-xs bg-white table-auto sm:text-sm">
        <thead className="font-semibold text-left uppercase border-b-2 border-black">
          <tr>
            {cols.map((thead, index) => {
              return (
                <th key={index} className="px-4 py-4">
                  {thead}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="text-gray-600">
          {rows.map((row, index) => {
            return (
              <tr
                key={index}
                className={`${index % 2 === 1 ? "bg-gray-100" : ""}`}
              >
                {Object.values(row).map(content => (
                  <td className="px-4 py-4">{content}</td>
                ))}

                {actions?.map((button, index) => {
                  return <td key={index}>{button}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
);

Table.propTypes = {
  cols: PropTypes.array,
  rows: PropTypes.array,
  actions: PropTypes.array,
};

export default Table;
