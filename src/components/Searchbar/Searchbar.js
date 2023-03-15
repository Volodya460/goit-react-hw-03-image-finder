import React from 'react';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonSpan,
  SearchFormInput,
  SearchHeader,
} from './Searchbar.styled';

export class SearchBar extends React.Component {
  state = {
    inputValue: '',
  };

  handleValueChange = event => {
    this.setState({ inputValue: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    this.props.resetValue();
    event.preventDefault();
    if (this.state.inputValue.trim() === '') {
      alert('Write something ');
      return;
    }
    this.props.onSubmit(this.state.inputValue);
  };

  render() {
    return (
      <SearchHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonSpan>Search</SearchFormButtonSpan>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleValueChange}
          />
        </SearchForm>
      </SearchHeader>
    );
  }
}
