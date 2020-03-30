import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
      font-size: 3.5em;
      color: #000;
  }

  h4 {
      margin-top: 50px;
      font-size: 1.5em;
      color: #000;
  }

  @media ${({ theme }) => (theme.mediaQueries.below300)} {
    h2 {
      font-size: 3em;
    }

    h4 {
      font-size: 1em;
    }
  }
`;

export const Body = styled.div`
  background: ${({ theme }) => (theme.colors.white)};
  padding: 25px;
  height: auto;
  width: auto;
  border-radius: 15px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, .25);
`;
