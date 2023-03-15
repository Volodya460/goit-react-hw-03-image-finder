import React from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import axios from 'axios';

// import { ToastContainer } from 'react-toastify';
import { SearchBar } from './Searchbar/Searchbar';

export class App extends React.Component {
  state = {
    inputValue: '',
  };
  page = 1;
  handleFormSubmit = inputValue => {
    this.setState({ inputValue });
  };

  loadMore = () => {
    this.page += 1;
    console.log(this.page);
    const BASE_URL = 'https://pixabay.com/api/';

    const searchParams = new URLSearchParams({
      key: `33272220-12aa76911a3763f30e85ef70a`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
    });

    return axios
      .get(
        `${BASE_URL}?${searchParams}&q=${this.state.inputValue}&page=${this.page}`
      )
      .then(response => {
        this.setState({
          dataFetch: response.data.hits,
        });
        console.log(response.data.hits);
      });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {/* <ToastContainer /> */}
        <ImageGallery inputValue={this.state.inputValue} />
        <Button onClick={this.loadMore} />
      </div>
    );
  }
}
