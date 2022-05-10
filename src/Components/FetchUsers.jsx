import axios from "axios";

const Fetch = async (query) => {
  if (!query) {
    return Promise.reject("wrong");
  }
  return axios.get(`https://api.github.com/search/users?page=3&per_page=100`, {
    params: {
      q: query,
    },
  });
};

export { Fetch };
