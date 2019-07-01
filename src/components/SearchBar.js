import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    const { term } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(term);
  };

  render() {
    const { term } = this.state;

    return (
      <div className="ui segment search-bar">
        <form onSubmit={this.onFormSubmit} action="" className="ui form">
          <div className="field">
            <label htmlFor="search-input">
              Video Search
              <input
                type="text"
                id="search-input"
                value={term}
                onChange={this.onInputChange}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onFormSubmit: PropTypes.func,
};
