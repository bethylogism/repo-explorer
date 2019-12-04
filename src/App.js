import React, { useState } from 'react';
import ReposList from './components/ReposList';
import ErrorMessage from './components/ErrorMessage';

import { HomeBackground, SearchBar, ReposContainer, SearchBtn, Btn, BtnContainer, MainContainer } from './theme';

import { fetchRepos } from './api';

const App = () => {
  const [user, setUser] = useState('laceswingybethler')
  const [level, setLevel] = useState('users')
  const [repos, setRepos] = useState(null)
  const [error, setError] = useState(null)

  const handleInput = (e) => setUser(e.target.value);

  const success = ({ data }) => {
    setError(null);
    const newRepos = data.map(datum => {
      return {
        id: datum.id,
        url: datum.html_url,
        name: datum.name
      }
    })
    setRepos(newRepos);
  }

  const failure = ({ message }) => setError(message);

  const handleSubmit = async () => {
    console.log('user: ', user);
    fetchRepos(level, user).then(success).catch(failure);
  }

  return (
    <HomeBackground>
      <MainContainer>
        <p>
          enter git username below.
        </p>
        <BtnContainer>
          <Btn selected={level === 'users'} onClick={() => setLevel('users')}>users</Btn>
          <Btn selected={level === 'orgs'} onClick={() => setLevel('orgs')}>orgs</Btn>

        </BtnContainer>
        <SearchBar type="text" value={user} onChange={handleInput} />
          <SearchBtn onClick={handleSubmit}>Get repos</SearchBtn>
      <ReposContainer>
        {repos && <ReposList repos={repos} />}
        {error && <ErrorMessage message={error} />}
      </ReposContainer>
      </MainContainer>
    </HomeBackground>
  );
}

export default App;