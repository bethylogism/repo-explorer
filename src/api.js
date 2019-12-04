const axios = require('axios');

export const fetchRepos = async (level ='users', user = 'laceswingybethler') => {
  return axios({
    method: 'get',
    url: `https://api.github.com/${level}/${user}/repos`,
  })
}