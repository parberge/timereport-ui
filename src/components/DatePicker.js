import React, { Component } from 'react'
import DateRangePicker from 'react-bootstrap-daterangepicker';

class DatePicker extends Component {
  render() {

    return (
      <div className="col-sm-6 col-md-6 col-lg-6">
      <DateRangePicker onApply={this.props.handleDateChange}>
                    <button type="button" className="btn btn-default btn-sm">
                        <span className="oi oi-calendar"></span> &nbsp;&nbsp;Select Date
                </button>
                </DateRangePicker>
      </div>
    )
  }
}

export default DatePicker;
