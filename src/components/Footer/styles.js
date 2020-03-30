import styled from "styled-components";

export const Container = styled.section`
  min-height: 11vh;
  min-width: 100vw;
  background: #292931;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;

  @media ${({ theme }) => (theme.mediaQueries.below425)} {
    height: 7vh;
  }
`;

export const SocialMedia = styled.ul`
  text-decoration: none;
  list-style: none;
  display: flex;
  width: 55rem;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;

  @media ${({ theme }) => (theme.mediaQueries.below425)} {
    justify-content: space-between;
  }

  @media ${({ theme }) => (theme.mediaQueries.below300)} {
    flex-direction: column;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => (theme.colors.white)};
  font-size: 2.25em;
  font-style: normal;
  font-weight: normal;
  line-height: 54px;
  position: relative;

  &:hover {
    color: ${({ theme }) => (theme.colors.lightRed)};
  }

  &:before {
    content: '';
    background-image: url('${({ img }) => (img)}');
    background-size: 45px;
    left: ${({ margin }) => {
      if (margin === `large`) {
        return `-43%`;
      } if (margin === `medium`) {
        return `-35%`;
      }

      return `-30%`;
    }};
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    width: 45px;
    height: 45px;
  }

  @media ${({ theme }) => (theme.mediaQueries.below1024)} {
    font-size: 1.25em;
    line-height: .5em;
    margin: 3.5rem;

    &:before {
      background-size: 2rem;
      background-repeat: no-repeat;
      width: 2rem;
      height: 2rem;
      left: ${({ margin }) => {
      if (margin === `large`) {
        return `-55%`;
      } if (margin === `medium`) {
        return `-50%`;
      }

      return `-37%`;
    }};
    }
  }

  @media ${({ theme }) => (theme.mediaQueries.below425)} {
    font-size: .75em;
    margin: 1.25rem;
    width: 100%;

    &:before {
      background-size: 1.25rem;
      width: 1.25rem;
      height: 1.25rem;
      left: ${({ margin }) => {
      if (margin === `large`) {
        return `-57%`;
      } if (margin === `medium`) {
        return `-50%`;
      }

      return `-40%`;
    }};
    }
  }
`;
