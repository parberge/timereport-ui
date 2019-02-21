import React, { Component } from "react";
import { UV_UDP_REUSEADDR } from "constants";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        this.getDataFromApi();
    }

    getDataFromApi = () => {
        fetch("https://ywdi37qne9.execute-api.eu-north-1.amazonaws.com/api/user/U2FGC795G")
        .then(response => response.json())
        .then(data => {
            this.setState({ 
                items: data,
                isLoaded:true,
         })
    });
    }

    render() {
        var { isLoaded, items} = this.state;

    if (!isLoaded) {
        return <div>...Loading...</div>;

    }
    else {
        return (
            <div className="App">

          <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">UserName</th>
      <th scope="col">Id</th>
      <th scope="col">Reason</th>
      <th scope="col">Hours</th>
      <th scope="col">Date</th>

    </tr>
  </thead>
  <tbody>
      {items.map(item => (
    <tr>
      <th scope="row"></th>
      <td>{item.user_name}</td>
      <td>{item.user_id}</td>
      <td>{item.reason}</td>
      <td>{item.hours}</td>
      <td>{item.event_date}</td>
    </tr>
      ))};
  </tbody>
</table>  
            </div>
        );
    }
    }
}

export default App;