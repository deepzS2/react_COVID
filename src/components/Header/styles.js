import styled from "styled-components";

export const Container = styled.header`
  background-color: #282c34;
  min-height: 10vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;

  @media ${({ theme }) => (theme.mediaQueries.below768)} {
    height: 7.5vh;
  }
`;

export const Logo = styled.div`
  height: 8.75rem;
  margin-left: 3.62rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(125deg, rgba(246, 79, 89, .25), rgba(243, 244, 247, .5156), rgba(82, 86, 94, .25));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  a {
    text-decoration: none;
    color: ${({ theme }) => (theme.colors.white)};
    white-space: nowrap;
    font-size: 4em;
    line-height: 96px;
  }

  @media ${({ theme }) => (theme.mediaQueries.below768)} {
    margin-left: 1.5rem;
    height: 100%;

    a {
      white-space: nowrap;
      font-size: 2.5em;
      line-height: 96px;
    }
  }

  @media ${({ theme }) => (theme.mediaQueries.below425)} {
    margin-left: .5rem;

    a {
      white-space: nowrap;
      font-size: 1.3em;
      line-height: 96px;
    }
  }
`;

export const NavLinks = styled.ul`
  width: 55rem;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media ${({ theme }) => (theme.mediaQueries.below768)} {
    width: 25rem;
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-right: .5rem;
  }

  @media ${({ theme }) => (theme.mediaQueries.below425)} {
    width: 15rem;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-right: .5rem;
  }
`;

export const NavItem = styled.li`
  a {
    color: ${({ theme, active }) => {
      if (active) {
        return theme.colors.lightRed;
      }

      return theme.colors.white;
    }};
    line-height: 72px;
    text-decoration: none;
    font-size: 3em;
    transition: all 650ms ease;

    &:hover {
      color: ${({ theme }) => (theme.colors.lightRed)};
    }
  }

  @media ${({ theme }) => (theme.mediaQueries.below768)} {
    a {
      font-size: 1.5em;
    }
  }

  @media ${({ theme }) => (theme.mediaQueries.below425)} {
    a {
      font-size: .95em;
    }
  }

  @media ${({ theme }) => (theme.mediaQueries.below300)} {
    a {
      font-size: .7em;
    }
  }
`;
