import React from "react";
import "../App.css";
import Select from "react-select";

const options = [
  { value: "Dr", label: "Dr" },
  { value: "Mg", label: "Mg" },
  { value: "Dr/Mg", label: "Dr/Mg" }
];

class CustomRow extends React.Component {
  state = {
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <tbody>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td className="td">
            <Select />
          </td>
          <td className="td">
            <Select />
          </td>
          <td className="td">
            <Select />
          </td>
          <td className="td">
            <Select />
          </td>
          <td className="td">
            <Select />
          </td>
          <td>
            <input className="input-cant" />
          </td>
          <td className="td">
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={options}
            />
          </td>
          <td>
            <input className="input-num" />
          </td>
          <td>
            <input className="input-s" />
          </td>
          <td>
            <strong>
              <label />
            </strong>
          </td>
        </tr>
      </tbody>
    );
  }
}
export default CustomRow;
