import React, { Component } from 'react'

export default class SearchBar extends Component {
    state={term:""}

    onClickChange=(e)=>{
        this.setState({term:e.target.value})
        
    }
    onFormSubmit=(e)=>{
        e.preventDefault();
        this.props.onTermSubmit(this.state.term)
        
    }
    
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form"onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search youtube videos</label>
                        <input type="text"
                        value={this.state.term}
                        onChange={this.onClickChange}
                        
                        />
                    </div>

                </form>
                
            </div>
        )
    }
}
