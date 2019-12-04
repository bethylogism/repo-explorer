import React from 'react';
import { Repo, RepoTitleContainer, ReposTextBold } from '../theme';

export default function ReposList(props){
const { repos } = props;

  return (
    repos.map(repo => (
      <a style={{textDecoration: 'none'}} href={repo.url} key={repo.id}>
        <Repo>
          <RepoTitleContainer>
            <ReposTextBold href={repo.url}>{repo.name}</ReposTextBold>
          </RepoTitleContainer>
        </Repo>
      </a>
    ))
  )
}
