import React,{ component, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component
{
    constructor(props)
    {
        super(props);

        this.state={
            search_term: "",
            country_code: "in"
        };
    }

    onInputChange(event)
    {
        this.setState({
            search_term: event.target.value
        });
    }

    onOptionChange(event)
    {
        console.log(event.target.value);
        this.setState({
            country_code: event.target.value
        })
    }

    onFormSubmit(event)
    {
        event.preventDefault();//prevents the page from reloading when a user submits

        this.props.fetchWeather(this.state.search_term,this.state.country_code);
        this.setState({ search_term: '' });
    }

    render()
    {
        return (
            <div>

                <form onSubmit={ (event) => this.onFormSubmit(event) }>
                <div className="form-group">
                    <label>Enter City</label>
                    <input 
                    className="form-control"
                    value={this.state.search_term}
                    onChange={ (event) => this.onInputChange(event) }/>
                </div>

                <div className="form-group">
                    <label>Enter Country </label>
                    <select className="form-control" onChange = { (event) => this.onOptionChange(event) }>
                    <option value="in">INDIA</option>
                    <option value="us">US</option>
                    </select>
                </div>

                <div className="text-center">
                    <button type="submit" 
                    className="btn btn-info">Submit</button>
                </div>
                </form>

            </div>
        )
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({ fetchWeather: fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);