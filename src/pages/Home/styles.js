import styled from "styled-components";

export const Container = styled.section`
  min-width: 100vw;
  min-height: 100vh;
  background: radial-gradient(50% 50% at 50% 50%,
          rgba(0, 0, 0, 0.25) 0%,
          rgba(67, 67, 67, 0.45) 100%),
      url(${({ bg }) => (bg)});
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  @media ${({ theme }) => (theme.mediaQueries.below1024)} {
    background-position: center;
  }

  @media ${({ theme }) => (theme.mediaQueries.below375)} {
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 9em;
  line-height: 216px;
  color: ${({ theme }) => (theme.colors.white)};
  margin: 0 6.5rem 0 0;

  @media ${({ theme }) => (theme.mediaQueries.below768)} {
    margin-top: 7.5rem;
    font-size: 3.5em;
    line-height: 100px;
  }

  @media ${({ theme }) => (theme.mediaQueries.below375)} {
    margin: 10rem 4rem 0 0;
    font-size: 3em;
  }

  @media ${({ theme }) => (theme.mediaQueries.below320)} {
    font-size: 2.5em;
  }
`;

export const Subtitle = styled.p`
  font-size: 4.5em;
  margin: 0 1rem 0 0;
  line-height: 100px;
  color: rgba(243, 244, 247, 0.75);

  @media ${({ theme }) => (theme.mediaQueries.below768)} {
    font-size: 2em;
    margin: 0 2rem 0 0;
    line-height: 40px;
  }

  @media ${({ theme }) => (theme.mediaQueries.below375)} {
    margin: 0 0rem 0 0;
    font-size: 1.75em;
  }

  @media ${({ theme }) => (theme.mediaQueries.below320)} {
    font-size: 1.5em;
  }
`;

export const ButtonContainer = styled.div`
  margin: 6rem 15rem 0 0;

  @media ${({ theme }) => (theme.mediaQueries.below768)} {
    margin: 5rem 7.5rem 0 0;
  }

  @media ${({ theme }) => (theme.mediaQueries.below375)} {
    margin: 6rem 5rem 0 0;
  }
`;

export const Button = styled.button`
  background: #f64f59;
  border: none;
  border-radius: 11px;
  font-size: 3em;
  line-height: 72px;
  padding: 40px;

  a {
    text-decoration: none;
    color: ${({ theme }) => (theme.colors.white)};
  }

  @media ${({ theme }) => (theme.mediaQueries.below768)} {
    font-size: 1.5em;
    padding: .25rem 2rem;
  }
`;

export const Counters = styled.section`
  width: 100vw;
  height: 100%;
  background: linear-gradient(123.01deg, rgba(0, 0, 0, .87) 29.87%, rgba(67, 67, 67, 0.90) 133.38%);
`;
