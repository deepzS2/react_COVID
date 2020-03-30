import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 89vh;
  background: linear-gradient(119.06deg,
      #3a6186 10.51%,
      rgba(137, 37, 62, 1) 100%);

  display: grid;
  grid-gap: 10rem;
  grid-template-columns: 1fr 1fr;

  @media ${({ theme }) => (theme.mediaQueries.below768)} {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
  }
`;

export const Me = styled.div`
  padding-left: 3rem;

  h1 {
    margin: 0;
    font-size: 9em;
    color: ${({ theme }) => (theme.colors.white)};
    line-height: 216px;
  }

  h3 {
    margin: 0;
    color: rgba(243, 244, 247, 0.75);
    font-size: 4.5em;
    line-height: 108px;
  }

  @media ${({ theme }) => (theme.mediaQueries.below1440)} {
    h1 {
      font-size: 5em !important;
      color: $white !important;
      line-height: 125px !important;
    }

    h3 {
      font-size: 2em !important;
      line-height: 50px !important;
    }
  }

  @media ${({ theme }) => (theme.mediaQueries.below768)} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 4em !important;
      color: $white !important;
      text-align: center !important;
      line-height: 125px !important;
    }

    h3 {
      font-size: 1.5em !important;
      line-height: 50px !important;
      text-align: center !important;
    }
  }

  @media ${({ theme }) => (theme.mediaQueries.below320)} {
    h1 {
      margin: 0 20% 0 0 !important;
    }

    h3 {
      margin: 0 20% 0 0 !important;
      text-align: center !important;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  p {
    color: rgba(243, 244, 247, 0.95);
    font-size: 3em;
    line-height: 72px;
  }

  @media ${({ theme }) => (theme.mediaQueries.below1440)} {
    p {
      font-size: 2em;
      line-height: 45px;
    }
  }

  @media ${({ theme }) => (theme.mediaQueries.below768)} {
    p {
      text-align: center;
      font-size: 1.5em;
      line-height: 45px;
    }
  }

  @media ${({ theme }) => (theme.mediaQueries.below320)} {
    p {
      text-align: center;
      font-size: 1.25em;
      line-height: 45px;
    }
  }
`;
