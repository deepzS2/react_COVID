import styled from "styled-components";

export const InputField = styled.div`
  width: 60%;
  margin: 100px auto;
  height: 75px;
  background: #333;
  border-radius: 6px;

  @media ${({ theme }) => (theme.mediaQueries.below425)} {
    width: 70%;
    height: 75px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: 0;
  padding-left: 10px;
  font-size: 38px;
  color: #fff;

  @media ${({ theme }) => (theme.mediaQueries.below425)} {
    font-size: 22.5px;
    color: #fff;
  }
`;
