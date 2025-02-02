import { Component, SyntheticEvent } from 'react';

class SearchInputField extends Component {
  state = { value: '' };

  handleSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
    localStorage.setItem('searchFieldValue', e.target.value);
  };

  componentDidMount(): void {
    const lsValue = localStorage.getItem('searchFieldValue');
    if (lsValue) {
      this.setState({ value: localStorage.getItem('searchFieldValue') });
    } else {
      localStorage.setItem('searchFieldValue', '');
    }
  }
  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleSearchValueChange}
        ></input>
      </>
    );
  }
}

interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
  target: EventTarget & T;
}

export default SearchInputField;
