import { Component } from 'react';
import SearchInputField from '../components/search_input_field';
import SearchButton from '../components/search_button';

class TopControls extends Component {
  render() {
    return (
      <div>
        <h3>Top controls</h3>
        <SearchInputField />
        <SearchButton />
      </div>
    );
  }
}

export default TopControls;
