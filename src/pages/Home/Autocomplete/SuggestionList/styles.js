import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid #999;
  overflow-y: auto;
  background: ${(props) => (props.active ? `#f85a40` : `#333`)};
  height: auto;
  max-height: 220px;

  div:not(:last-of-type) {
    border-bottom: 1px solid #999;
  }

  @media ${({ theme }) => (theme.mediaQueries.below425)} {
    max-height: 180px;
  }
`;

export const Suggestion = styled.div`
  padding: ${(props) => (props.empty ? `.5rem` : `15px`)};
  color: ${(props) => (props.empty ? `#999` : `#fff`)};
  background: #333;
  border-top: 1px solid #666;
  cursor: pointer;

  &:hover {
    background-color: #1e4dd4;
  }

  @media ${({ theme }) => (theme.mediaQueries.below425)} {
    font-size: 20px;
  }
`;
