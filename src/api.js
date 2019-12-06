const axios = require('axios');

export const fetchRepos = (level ='users', user = 'laceswingybethler', page = 1, perPage = 8) => {
  return axios({
    method: 'get',
    url: `https://api.github.com/${level}/${user}/repos?page=${page}&per_page=${perPage}`,
    headers: {'Accept': 'application/vnd.github.v3+json'},
  })
}