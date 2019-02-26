import React, { Component } from 'react'

class Form extends Component {


  render() {
    var shortid = require('shortid');
    return (
        <div className="form-group">
        <label form="selection"></label>
        <select 
                value={this.props.selectedOption}
                onChange={this.props.handleSelectChange}>
                <option selected disabled hidden>Select a Username</option>
                {Object.entries(this.props.names).map(name => (
                    <option key={shortid.generate()} value={name}>
                        {name[0]}
                    </option>
                ))};
        </select>
        </div>
    )
  }
}

export default Form;
