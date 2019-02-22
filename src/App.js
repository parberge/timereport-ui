import React, { Component } from "react";
import DateRangePicker from 'react-bootstrap-daterangepicker';
import shortid from 'shortid';

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
    handleDateChange = (e, p, moment) => {
        var startDate = moment(p.startDate).format("L");
        const _startDate = moment(startDate).format('YYYY-MM-DD');
        var endDate = moment(p.endDate).format("L");
        const _endDate = moment(endDate).format('YYYY-MM-DD');

        console.log('it works, startDate: ' + _startDate + ' endDate: ' + _endDate)
    }
    render() {
        var { isLoaded, items} = this.state;
        var shortid = require('shortid');
        var moment = require('moment');
        const marginStyle = { marginTop: '1rem' };



    if (!isLoaded) {
        return <div>...Loading...</div>;

    }
    else {
        return (
            <div className="App">
            <div className="jumbotron">
            <br></br>
            </div>
            <div className="col-sm-6 col-lg-1">
            <br></br>
            </div>
            <div className="col-sm-6 col-lg-6">
                <DateRangePicker onApply={(e, p) => this.handleDateChange(e, p, moment)}>
                    <button type="button" className="btn btn-secondary">
                        <span className="oi oi-calendar"></span> &nbsp;&nbsp;Select Date
                </button>
                </DateRangePicker>
            </div>
        <div className="col-sm-12 col-lg-12">
    <br></br>
          <table className="table table-hover">
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
    <tr key={shortid.generate()}>
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
         </div>
        );
    }
    }
}


export default App;