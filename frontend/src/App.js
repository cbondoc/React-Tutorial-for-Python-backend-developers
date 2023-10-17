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
      <div>
        <h1>Data Generated From Django</h1>
        <hr />
        <table>
          <thead>
            <tr>
              <th>Employee</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {this.state.details.map((output, id) => (
              <tr key={id}>
                <td>{output.employee}</td>
                <td>{output.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
