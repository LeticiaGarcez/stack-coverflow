const request = 'http://localhost:9000/search?'

const StackApi = {
  get: (keySearch, callback) => {
    fetch(request + keySearch)
      .then(response => {
        if (!response.ok)
          throw new Error('API error: Failed to fetch');

        return response.json()
      })
      .then((json) => {
          callback(json);
      })
      .catch(err => err);
  }

};

export default StackApi
