import React from "react";
import PropTypes from "prop-types";
import Anchor from "../../components/Anchor";

const renderRows = (rows, selectedRows, displayButtons) => {
  return rows?.map((row, rowIndex) => {
    return (
      <tr
        key={`tr${rowIndex}`}
        className={`${rowIndex % 2 === 1 ? "bg-gray-50" : ""}`}
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

        {displayButtons ? (
          <>
            <td>
              <Anchor variant="warning" text="edit" route={`/${row?.id}`} />
            </td>
            <td>
              <Anchor variant="danger" text="remove" route={`/`} />
            </td>
          </>
        ) : null}
      </tr>
    );
  });
};

const Table = ({ cols, rows, selectedRows, displayButtons = false }) => (
  <div className="w-full">
    <div className="overflow-x-scroll border-b border-gray-200 rounded shadow sm:overflow-hidden">
      <table className="min-w-full text-sm divide-y divide-gray-200 table-auto">
        <thead className="font-semibold tracking-wider text-left text-gray-500 uppercase bg-gray-100">
          <tr>
            {cols?.map((thead, index) => {
              return (
                <th key={`th${index}`} className="px-4 py-4">
                  {thead}
                </th>
              );
            })}

            {displayButtons ? (
              <>
                <th colspan="2" key={`th-buttons`} className="px-4 py-4"></th>
              </>
            ) : null}
          </tr>
        </thead>
        <tbody className="text-gray-600 divide-y divide-gray-200">
          {renderRows(rows, selectedRows, displayButtons)}
        </tbody>
      </table>
    </div>
  </div>
);

Table.propTypes = {
  cols: PropTypes.array,
  rows: PropTypes.array,
  selectedRows: PropTypes.array,
  displayButtons: PropTypes.bool,
};

export default Table;
