import React from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';
import Loader from 'react-loader-spinner';
import fetchData from './services/fetchData';
import styles from './App.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends React.Component {
  state = {
    searchQuery: '',
    responsePage: 1,
    images: [],
    largeImage: '',
    isLoading: false,
  };

  componentDidUpdate(prevProprs, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }

    if (prevState.images.length !== this.state.images.length) {
      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
      });
    }
  }

  fetchImages = () => {
    const { responsePage, searchQuery } = this.state;

    this.setState({ isLoading: true });

    fetchData(searchQuery, responsePage)
      .then(res => {
        this.setState(prevState => ({
          images: [...prevState.images, ...res.data.hits],
          responsePage: prevState.responsePage + 1,
        }));
      })
      .catch(error => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleChangeQuery = ({ query }) => {
    this.setState({ searchQuery: query, responsePage: 1, images: [] });
  };

  openImageinModal = e => {
    e.preventDefault();

    this.setState({
      largeImage: e.currentTarget.href,
    });
  };

  closeModal = () => {
    this.setState({ largeImage: '' });
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.closeModal();
    }
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.closeModal();
    }
  };

  render() {
    const { images, isLoading, largeImage } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleChangeQuery} />
        <ImageGallery images={images} click={this.openImageinModal} />
        {largeImage && (
          <Modal
            onBackdropClick={this.handleBackdropClick}
            onKeyDown={this.handleKeyDown}
          >
            <img src={largeImage} alt={largeImage} />
          </Modal>
        )}
        {isLoading && (
          <Loader
            type="ThreeDots"
            color="#3618df"
            height={80}
            width={80}
            className={styles.loader}
          />
        )}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.fetchImages} />
        )}
      </div>
    );
  }
}

export default App;
