const request = 'http://localhost:9000/testAPI'

const StackApi = {
    get: (keySearch) => {
        fetch(request + keySearch)
          .then(response => {
            if (!response.ok)
              throw new Error('API error: Failed to fetch');

            return response.json()
          })
          .catch(err => err);
    }

};

export default StackApi
