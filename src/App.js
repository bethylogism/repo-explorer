import React, { useState } from 'react';
import ReposList from './components/ReposList';
import ErrorMessage from './components/ErrorMessage';
import { fetchRepos } from './api';

import {
  HomeBackground,
  SearchBar,
  ReposContainer,
  SearchBtn,
  Btn,
  BtnContainer,
  MainContainer,
  NextBtn,
} from './theme';


const App = () => {
  const [user, setUser] = useState('laceswingybethler');
  const [level, setLevel] = useState('users');
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

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
    setPage(1);
    fetchRepos(level, user, page).then(success).catch(failure);
  }



  const nextPage = () => {
    fetchRepos(level, user, page + 1).then(success).catch(failure);
    setPage(prevPage => prevPage + 1);
  }

  // useEffect(() => {
  //   console.log(page)
  //   if (page > 1) {
  //     fetchRepos(level, user, page).then(success).catch(failure);
  //   }
  // }, [page])


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
          <SearchBtn onClick={handleSubmit}>get repos</SearchBtn>
        <ReposContainer>
          {(repos && !error) && (
            <>
            <ReposList repos={repos} />
            <NextBtn onClick={nextPage}>{'Next >'}</NextBtn>
            {/* <NextBtn onClick={nextPage}>{'< Back'}</NextBtn> */}
            </>
          )}
          {error && <ErrorMessage message={error} />}
        </ReposContainer>
      </MainContainer>
    </HomeBackground>
  );
}

export default App;
