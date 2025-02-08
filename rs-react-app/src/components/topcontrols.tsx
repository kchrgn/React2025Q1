import { Component } from 'react';
import SearchInputField from './search_input_field';
import SearchButton from './search_button';
import ErrorButton from './error_button';

class TopControls extends Component {
  render() {
    return (
      <div>
        <h3>Top controls</h3>
        <SearchInputField />
        <SearchButton />
        <ErrorButton />
      </div>
    );
  }
}

export default TopControls;
