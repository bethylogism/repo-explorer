import styled from 'styled-components';

export const primary = 'rgb(40,43,51)'; // background
export const secondary = 'rgb(56,55,54)'; // some other shade of grey
export const hover = 'rgb(66,66,64)'; // hover grey
export const accent = 'rgb(248,197,0)'; // yellow
export const textColor = 'rgb(201,203,210)'; // light grey
export const lighterTextColor = 'rgb(226,226,226)'; // whitish grey
export const borderColor = 'rgba(255, 255, 255, 0.24)'; // grey
export const tint = 'rgba(0, 0, 0, 0.19)';
export const contrast =  'rgba(20,23,21,0.70)' // an eye-catching shade
export const hoverContrast =  'rgba(20,23,21,0.90)'




export const ReposTextBold = styled.p`
  text-align: center;
  justify-content: center;
  font-family: Helvetica, sans-serif;
  font-size: 16;
  color: ${lighterTextColor};
  margin: 3px 20px;
  font-weight: 900;
`;

export const HomeBackground = styled.div`
  background-color: ${primary};
  min-height: 100vh;
  min-width: 100vw;
  padding: 100px 0;
`;

export const MainContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

 export const BtnContainer = styled.div`
  /* height: 64px; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* padding: 10px; */
  `;

 export const Btn = styled.div`
  cursor: pointer;
  border-radius: 52px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  padding: 15px 48px;
  background: transparent;
  color: ${accent};
  border: 2px solid ${borderColor};
    ${props => props.selected && `
      background: ${accent};
      color: ${primary};
      border: none;
    `}
  `;
 export const SearchBtn = styled(Btn)`
  background-color: ${contrast};
  color: white;
  border: none;
  :hover {
      background-color: ${hoverContrast};
      };
  `;

export const NextBtn = styled(Btn)`
  padding: 20px;
  border: none;
  flex: 1;
`;

export const SearchBar = styled.input`
  border: 2px solid ${accent};
  width: 50%;
  border-radius: 4px;
  background-color: transparent;
  color: white;
  font-size: 16pt;
  color: ${lighterTextColor};
  margin: 32px 70px;
  padding: 5px 8px;
  font-family: Helvetica, sans-serif;
  :focus {
    border: 3px solid ${lighterTextColor};
  }
`;

export const ReposContainer = styled.section`
  max-width: 80vw;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
`;

export const Repo = styled.article`
    background-color: ${secondary};
    min-width: 312px;
    text-align: center;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    margin: 16px;
    padding: 0 16px 0 16px;
    cursor: pointer;
    :hover {
      background-color: ${hover};
      };
`;

export const RepoTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 32px;
  overflow: hidden;
  `;

