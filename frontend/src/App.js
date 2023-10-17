import axios from "axios";
import React from "react";
class App extends React.Component {
  state = { details: [] };

  componentDidMount() {
    let data;
    axios
      .get("http://localhost:8000")
      .then((res) => {
        data = res.data;
        this.setState({
          details: data,
        });
      })
      .catch((err) => {
        "Error";
      });
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Data Generated From Django</h1>
        <hr />
        <table
          style={{
            margin: "0 auto",
            textAlign: "left",
            borderCollapse: "collapse",
            width: "80%", // You can adjust the width as needed
            border: "1px solid #000", // Border around the table
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid #000" }}>Employee</th>
              <th style={{ border: "1px solid #000" }}>Department</th>
            </tr>
          </thead>
          <tbody>
            {this.state.details.map((output, id) => (
              <tr key={id}>
                <td style={{ border: "1px solid #000" }}>{output.employee}</td>
                <td style={{ border: "1px solid #000" }}>
                  {output.department}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
