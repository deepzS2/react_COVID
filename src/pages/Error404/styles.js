import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(119.06deg, #3A6186 10.51%, rgba(137, 37, 62, 0.25) 100%);

  @media ${({ theme }) => (theme.mediaQueries.below425)} {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const ErrorImg = styled.img`
  width: 40%;
  height: auto;
  margin-left: 5%;

  @media ${({ theme }) => (theme.mediaQueries.below425)} {
    width: 85%;
    margin-left: 0;
  }
`;

export const TextDiv = styled.div`
  width: 40%;
  height: auto;
  margin-right: 5%;

  @media ${({ theme }) => (theme.mediaQueries.below425)} {
    width: 85%;
    margin-right: 0;
  }
`;

export const Text = styled.h1`
  font-size: 6em;
  line-height: 216px;
  color: ${({ theme }) => (theme.colors.white)};
  text-align: center;

  @media ${({ theme }) => (theme.mediaQueries.below1440)} {
    font-size: 4.5em;
    line-height: 100px;
  }

  @media ${({ theme }) => (theme.mediaQueries.below1024)} {
    font-size: 3em;
    line-height: 50px;
  }

  @media ${({ theme }) => (theme.mediaQueries.below768)} {
    font-size: 2.25em;
    line-height: 50px;
  }
`;
