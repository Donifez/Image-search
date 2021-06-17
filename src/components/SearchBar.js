import React from 'react';
import '../App.css';
class SearchBar extends React.Component {
  state = {terms: ''};

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment" id="cry">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label> Image search</label>
            <input
              type="text"
              value={this.state.term || ''}
              onChange={(e) => this.setState({term: e.target.value})}
              placeholder="Search for any image"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
