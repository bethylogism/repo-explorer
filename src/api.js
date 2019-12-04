const axios = require('axios');

export const fetchRepos = (level ='users', user = 'laceswingybethler', page = 1) => {
  return axios({
    method: 'get',
    url: `https://api.github.com/${level}/${user}/repos?page=${page}&per_page=8`,
    headers: {'Accept': 'application/vnd.github.v3+json'},
  })
}