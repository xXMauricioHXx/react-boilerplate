import React from "react";
import PropTypes from "prop-types";

const renderRows = (rows, selectedRows, actions) => {
  return rows?.map((row, rowIndex) => {
    return (
      <tr
        key={`tr${rowIndex}`}
        className={`${rowIndex % 2 === 1 ? "bg-gray-100" : ""}`}
      >
        {selectedRows?.length
          ? selectedRows.map((selectedRow, index) => {
              return (
                <td key={`td${index}`} className="px-4 py-4">
                  {row[selectedRow] instanceof Object
                    ? JSON.stringify(row[selectedRow])
                    : row[selectedRow]}
                </td>
              );
            })
          : Object.values(row).map((content, index) => (
              <td key={`td${index}`} className="px-4 py-4">
                {content instanceof Object ? JSON.stringify(content) : content}
              </td>
            ))}

        {actions?.map((button, index) => {
          return <td key={`td-actions${index}`}>{button}</td>;
        })}
      </tr>
    );
  });
};

const Table = ({ cols, rows, selectedRows, actions }) => (
  <div className="w-full">
    <div className="overflow-x-scroll border-b border-gray-200 rounded shadow sm:overflow-hidden">
      <table className="min-w-full text-xs bg-white table-auto sm:text-sm">
        <thead className="font-semibold text-left uppercase border-b-2 border-black">
          <tr>
            {cols?.map((thead, index) => {
              return (
                <th key={`th${index}`} className="px-4 py-4">
                  {thead}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="text-gray-600">
          {renderRows(rows, selectedRows, actions)}
        </tbody>
      </table>
    </div>
  </div>
);

Table.propTypes = {
  cols: PropTypes.array,
  rows: PropTypes.array,
  selectedRows: PropTypes.array,
  actions: PropTypes.array,
};

export default Table;
