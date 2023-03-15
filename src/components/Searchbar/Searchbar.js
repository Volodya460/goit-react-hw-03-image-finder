import React from 'react';
// import { toast } from 'react-toastify';
export class SearchBar extends React.Component {
  state = {
    inputValue: '',
  };

  handleValueChange = event => {
    this.setState({ inputValue: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.inputValue.trim() === '') {
      alert('Write something ');
      return;
    }
    this.props.onSubmit(this.state.inputValue);
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleValueChange}
          />
        </form>
      </header>
    );
  }
}
