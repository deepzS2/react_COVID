import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(116.86deg, rgba(20, 30, 48, 0.75) 0%, rgba(36, 59, 85, 0.75) 100%);
`;

export const Flag = styled.img`
  margin-top: 150px;

  @media ${({ theme }) => (theme.mediaQueries.below300)} {
    width: 75%;
    height: 75%;
  }
`;

export const CountryName = styled.h1`
  font-size: 9em;
  color: ${({ theme }) => (theme.colors.salmon)};

  @media ${({ theme }) => (theme.mediaQueries.below375)} {
    font-size: 5em;
  }

  @media ${({ theme }) => (theme.mediaQueries.below300)} {
    font-size: 3.75em;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  height: 100%;
  grid-gap: 125px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);

  @media ${({ theme }) => (theme.mediaQueries.below1440)} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media ${({ theme }) => (theme.mediaQueries.below1024)} {
    grid-gap: 80px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }

  @media ${({ theme }) => (theme.mediaQueries.below425)} {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
`;
