import styled from "styled-components";

const Container = styled.div`
  .number {
    &.casos {
      font-size: 9em;
      line-height: 216px;
      color: rgba(243, 244, 247, 0.75);
    }

    &.mortes {
      font-size: 6em;
      line-height: 144px;
      color: rgba(243, 244, 247, 0.8);
    }
  }

  @media ${({ theme }) => (theme.mediaQueries.below768)} {
    .number {
      &.casos {
          font-size: 3em;
          line-height: 150px;
      }

      &.mortes {
          font-size: 2em;
          line-height: 64px;
      }
    }
  }

  @media ${({ theme }) => (theme.mediaQueries.below320)} {
    .number {
      &.casos {
          font-size: 2.25em;
          line-height: 85px;
      }

      &.mortes {
          font-size: 1.5em;
          line-height: 44px;
      }
    }
  }
`;

export default Container;
