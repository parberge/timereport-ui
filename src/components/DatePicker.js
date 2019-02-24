import React, { Component } from 'react'
import DateRangePicker from 'react-bootstrap-daterangepicker';

class DatePicker extends Component {

    handleDateChange = (e, p, moment) => {
        var startDate = moment(p.startDate).format("L");
        const _startDate = moment(startDate).format('YYYY-MM-DD');
        var endDate = moment(p.endDate).format("L");
        const _endDate = moment(endDate).format('YYYY-MM-DD');

        console.log('it works, startDate: ' + _startDate + ' endDate: ' + _endDate)
    }

  render() {
    var moment = require('moment');

    return (
      <div className="col-sm-6 col-md-6 col-lg-6">
      <DateRangePicker onApply={(e, p) => this.handleDateChange(e, p, moment)}>
                    <button type="button" className="btn btn-default btn-sm">
                        <span className="oi oi-calendar"></span> &nbsp;&nbsp;Select Date
                </button>
                </DateRangePicker>
      </div>
    )
  }
}

export default DatePicker;
