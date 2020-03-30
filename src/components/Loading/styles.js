import styled from "styled-components";

export const Container = styled.div`
  background: rgba(0, 0, 0, .95);
  width: 100vw;
  height: 100vh;
  position: relative;

  @media ${({ theme }) => (theme.mediaQueries.below425)} {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const Loader = styled.div`
  margin: auto;
  width: 50%;
  max-width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20em;
  color: ${({ theme }) => (theme.colors.lightPurple)};

  @media ${({ theme }) => (theme.mediaQueries.below425)} {
    margin: 0 100% 0 0;
    position: relative;
    font-size: 10em;
  }
`;
