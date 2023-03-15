import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import axios from 'axios';
import Loader from 'components/Loader/Loader';

export default class ImageGallery extends React.Component {
  state = {
    dataFetch: null,

    status: 'idel',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.inputValue !== this.props.inputValue) {
      this.setState({ status: 'pending' });

      const BASE_URL = 'https://pixabay.com/api/';

      const searchParams = new URLSearchParams({
        key: `33272220-12aa76911a3763f30e85ef70a`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 12,
      });
      setTimeout(() => {
        return axios
          .get(`${BASE_URL}?${searchParams}&q=${this.props.inputValue}`)
          .then(response => {
            if (response.data.totalHits === 0) {
              console.log(response.data.totalHits);
              alert(`We dont find ${this.props.inputValue}`);
            }

            this.setState({
              dataFetch: response.data.hits,
              status: 'resolved',
            });
          })
          .catch(error => {
            this.setState({ status: 'rejected' });
            console.log(error.message);
          });
      }, 2000);
    }
  }
  render() {
    const { dataFetch, status } = this.state;

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'resolved') {
      return dataFetch.map(el => {
        return <ImageGalleryItem arrr={el} key={el.id} />;
      });
    }
  }
}

// return (
//   <ul>
//     {loading && <div>Loading...</div>}
//     {dataFetch &&
//       dataFetch.map(el => {
//         return <ImageGalleryItem arrr={el} key={el.id} />;
//       })}
//   </ul>

// );
