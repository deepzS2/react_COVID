import styled from "styled-components";

export const Container = styled.div`
  overflow-x: auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const TableContainer = styled.table`
  width: 75%;
  table-layout: fixed;
  border-collapse: collapse;

  @media ${({ theme }) => (theme.mediaQueries.below768)} {
    width: 100%;
  }
`;

export const Caption = styled.caption`
  font-size: 3em;
  margin: .5em 0 .75em;
  color: ${({ theme }) => (theme.colors.white)};

  @media ${({ theme }) => (theme.mediaQueries.below425)} {
    font-size: 2em;
  }
`;

export const TableHeader = styled.thead`
  tr {
    padding: .35em;
  }

  th {
    border-bottom: 1px solid $white;
    padding: .625em;
    text-align: center;
    background: rgba(0, 0, 0, 0.75);
  }

  button {
    border: 0;
    border-radius: none;
    background: none;
    color: ${({ theme }) => (theme.colors.white)};
    font-size: 2em;
    line-height: 1em;
    letter-spacing: .1em;
    text-transform: uppercase;
    padding: 0.5em;
    margin-bottom: 1px;

    &.ascending::after {
        content: '👇';
        display: inline-block;
        margin-left: 1em;
    }

    &.descending::after {
        content: '☝️';
        display: inline-block;
        margin-left: 1em;
    }
  }

  @media ${({ theme }) => (theme.mediaQueries.below768)} {
    button {
      font-size: 1.5em;
      line-height: .75em;
      letter-spacing: .05em;
      padding: 0.5em;

      &.ascending::after {
          margin-left: .25em;
      }

      &.descending::after {
          margin-left: .25em;
      }
    }
  }

  @media ${({ theme }) => (theme.mediaQueries.below425)} {
    button {
      font-size: .75em;
      line-height: .25em;
      padding: 0.5em;
      margin-right: 2rem;
      position: relative;

      &.ascending::after {
          position: absolute;
          left: 100%;
      }

      &.descending::after {
          position: absolute;
          left: 100%;
      }
    }
  }
`;

export const TableBody = styled.tbody`
  td {
    border: 1px solid rgba(0, 0, 0, 0.25);
    padding: .625em;

    &:nth-child(2) a {
        cursor: pointer;
        text-decoration: none;
        color: #000;
        font-weight: 600;
    }

    &:nth-child(2) a:hover {
        color: $lightBlue;
    }

    text-align: center;
  }

  tr {
    background: rgba(255, 255, 255, 0.25);
    padding: .35em;
    color: #000;
  }

  @media ${({ theme }) => (theme.mediaQueries.below425)} {
    tr {
      td {
        font-size: .79em;
      }
    }
  }
`;
