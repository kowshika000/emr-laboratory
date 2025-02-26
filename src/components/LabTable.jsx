import React, { useState } from "react";
import { Table, Checkbox, Input } from "antd";
import "./Components.css";

const LabTable = ({
  columns,
  rows,
  onOptionsShow,
  onPatientNameClick,
  onTypeOption,
  checkBox = false,
  onOptionClick,
  isInput = false,
  onHideShow,
  onBoldShow,
}) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectAll = (checked) => {
    setSelectedRows(checked ? rows.map((_, i) => i) : []);
  };

  const handleRowSelect = (index) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(index)
        ? prevSelectedRows.filter((i) => i !== index)
        : [...prevSelectedRows, index]
    );
  };

  const processColumnsWithChildren = (cols, isSecondTable = false) => {
    if (!Array.isArray(cols)) return [];

    return cols.map((col) => {
      const column = {
        title: isSecondTable
          ? col.titleName2 || col.headerName
          : col.titleName || col.headerName, 
        children: col.children
          ? processColumnsWithChildren(col.children, isSecondTable) 
          : undefined,
        dataIndex: col.field,
        align: "center",
      };

      return column;
    });
  };

  const processColumnsSimple = (cols) => {
    if (!Array.isArray(cols)) return [];

    return cols.map((col) => {
      return {
        title: col.titleName || col.headerName,
        dataIndex: col.field,
        render: (text, record) => {
          if (col.field === "options" && onOptionsShow) {
            return onOptionsShow(record);
          }
          if (col.field === "patientName" && onPatientNameClick) {
            return onPatientNameClick(record);
          }
          if (col.field === "typeOption" && onTypeOption) {
            return onTypeOption(record);
          }
          if (col.field === "option" && onOptionClick) {
            return onOptionClick(record);
          }
          if (col.field === "hide" && onHideShow) {
            return onHideShow(record);
          }
          if (col.field === "bold" && onBoldShow) {
            return onBoldShow(record);
          }
          return text;
        },
        align: "center",
      };
    });
  };

  const modifiedColumns = [
    ...(checkBox
      ? [
          {
            title: (
              <Checkbox
                indeterminate={
                  selectedRows.length > 0 && selectedRows.length < rows.length
                }
                checked={selectedRows.length === rows.length && rows.length > 0}
                onChange={(e) => handleSelectAll(e.target.checked)}
              />
            ),
            dataIndex: "checkbox",
            render: (_, __, index) => (
              <Checkbox
                checked={selectedRows.includes(index)}
                onChange={() => handleRowSelect(index)}
              />
            ),
            align: "center",
            width: 50,
          },
        ]
      : []),
    ...columns
      .map((col) =>
        col.children
          ? processColumnsWithChildren([col])
          : processColumnsSimple([col])
      )
      .flat(),
    ...(isInput
      ? [
          {
            title: "Container",
            dataIndex: "container",
            render: () => <Input />,
            align: "center",
          },
          {
            title: "Sample Collect Time",
            dataIndex: "sampleCollectTime",
            render: () => <Input />,
            align: "center",
          },
        ]
      : []),
  ];

  return (
    <div className="table-container">
      <Table
        rowKey={(record, index) => index}
        columns={modifiedColumns}
        dataSource={rows.map((row, index) => ({ key: index, ...row }))}
        pagination={false}
        style={{ borderRadius: "4px" }}
        bordered
      />
    </div>
  );
};

export default LabTable;
