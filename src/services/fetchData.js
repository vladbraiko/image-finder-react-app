import axios from 'axios';

export default (searchQuery, currentPage) => {
  const apiKey = '16192319-9ae9d95026dacaeb88e2fcf6c';

  return axios.get(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${currentPage}&per_page=12&key=${apiKey}`,
  );
};
