import React, { Component } from 'react'

class Form extends Component {
    state = {
        selectedOption: undefined,
    }

    handleChange = (selectedOption) => {
        this.setState({ 
            selectedOption: selectedOption.target.value,
        });
        console.log(`Option selected:`, selectedOption.target.value);
    }

  render() {
    var shortid = require('shortid');
    const { selectedOption } = this.state;
    return (
        <div className="form-group">
        <label form="selection"></label>
        <select 
                value={selectedOption}
                onChange={this.handleChange}
                placeholder="Select User">
                {this.props.names.map(name => (
                    <option key={shortid.generate()} value={name}>
                        {name}
                    </option>
                ))};
        </select>
        </div>
    )
  }
}

export default Form;
