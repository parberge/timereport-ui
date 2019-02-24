import React, { Component } from 'react'

class Form extends Component {
    state = {
        selectedOption: undefined,
        fetchData: undefined,
    }
    handleChange = (selectedOption) => {
        this.setState({ 
            selectedOption: selectedOption.target.value,
            fetchData: this.props.fetchData,
        });
        console.log(`Option selected:`, selectedOption.target.value);
    }

  render() {
    const { selectedOption } = this.state;
    return (
        <div className="form-group">
        <label form="selection"></label>
        <select 
                value={selectedOption}
                onChange={this.handleChange}
                placeholder="Select User">
            <option value='kami'>kami</option>
            <option value='pär'>pär</option>
            <option value='tommy'>tommy</option>
            <option value='stefan'>stefan</option>
            <option value='anders'>anders</option>
        </select>
        </div>
    )
  }
}

export default Form;
