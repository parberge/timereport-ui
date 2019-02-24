import React, { Component } from "react";
import TableBody from './components/TableBody'
import Form from './components/Form';
import DatePicker from './components/DatePicker';

const user_id = 'U2FGC795G';

class App extends Component {
    state = {
        data: [],
        names: [],
        error: undefined
    }
    
    componentDidMount() {
        this.fetchData();
    }

    fetchData = async (e) => {
       // e.preventDefault();
        const getUserId = await fetch(`https://ywdi37qne9.execute-api.eu-north-1.amazonaws.com/api/user/${user_id}`);
        const getUserNames = await fetch(`https://ywdi37qne9.execute-api.eu-north-1.amazonaws.com/api/user/names`);
        const data = await getUserId.json();
        const names = await getUserNames.json();

        if (data && names) {
            this.setState({
                data: data,
                names: names,
                error: '',
            });
        } else {
            this.setState({
                data: undefined,
                names: undefined,
                error: 'Nothing Found in Database',
            })
        }
    }
    render() {
        return (
            <div className="App">
                <div className="jumbotron">
                    <br></br>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                    <form>
                        <div className='form-row'>

                            <Form names={this.state.names}/>
                            <DatePicker />
                        </div> 
                    </form>
                </div>      
                    <TableBody data={this.state.data}/>
            </div>
        );
    }
}

export default App;