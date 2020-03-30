import styled from "styled-components";

export const Section1 = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: linear-gradient(116.47deg, rgba(0, 0, 0, 0.75) 0%, rgba(67, 67, 67, 1) 100%);

  .left {
      padding: 25px;

      h1 {
          margin: 0;
          color: ${({ theme }) => (theme.colors.lightRed)};
          font-size: 9em;
          line-height: 216px;
      }

      h3 {
          margin: 0;
          font-size: 4em;
          color: rgba(243, 244, 247, 0.75);
          line-height: 96px;
      }
  }

  .right {
      padding: 60px 50px 0 0;

      p {
          margin: 0;
          text-align: right;
          color: rgba(243, 244, 247, 0.75);
          font-size: 3em;
          line-height: 85px;
      }
  }

  @media ${({ theme }) => (theme.mediaQueries.below1440)} {
    .left {
      h1 {
          font-size: 4em;
      }

      h3 {
          font-size: 2.5em;
          line-height: 70px;
      }
    }

    .right {
      p {
          font-size: 2.5em;
          line-height: 70px;
      }
    }
  }

  @media ${({ theme }) => (theme.mediaQueries.below768)} {
    .left {
      h1 {
          margin-top: 40px;
          font-size: 3em;
          line-height: 70px;
      }

      h3 {
          font-size: 1.5em;
          line-height: 50px;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;

      p {
          margin-bottom: 75px;
          text-align: center;
          font-size: 1.3em;
          line-height: 30px;
      }
    }
  }

  @media ${({ theme }) => (theme.mediaQueries.below425)} {
    .left {
      h1 {
          margin-top: 10px;
          font-size: 2em;
          line-height: 70px;
      }

      h3 {
          font-size: 1.25em;
          line-height: 35px;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;

      p {
          margin-bottom: 100px;
          text-align: center;
          font-size: 1em;
          line-height: 28px;
      }
    }
  }

  @media ${({ theme }) => (theme.mediaQueries.below320)} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .left {
      h1 {
          text-align: center;
          margin-top: 10px;
          font-size: 2em;
          line-height: 70px;
      }

      h3 {
          text-align: center;
          font-size: 1.25em;
          line-height: 35px;
      }
    }

    .right {
      padding-left: 50px;

      p {
          margin-bottom: 100px;
          text-align: center;
          font-size: 1em;
          line-height: 28px;
      }
    }
  }

  @media ${({ theme }) => (theme.mediaQueries.below300)} {
    .left {
      h1 {
          font-size: 1.5em;
          line-height: 50px;
      }

      h3 {
          text-align: center;
          font-size: .89em;
          line-height: 28px;
      }
    }

    .right {
      padding-left: 50px;

      p {
          margin-bottom: 100px;
          text-align: center;
          font-size: 1em;
          line-height: 28px;
      }
    }
  }
`;

export const Section2 = styled.section`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(119.36deg, rgba(0, 0, 0, 1) 0%, rgba(67, 67, 67, .9) 100%);

  @media ${({ theme }) => (theme.mediaQueries.below320)} {
    height: auto;
  }
`;

export const Section3 = styled.section`
  background: linear-gradient(119.36deg, rgba(0, 0, 0, 1) 0%, rgba(67, 67, 67, .75) 100%);
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 110vh;
  width: 100vw;

  .left img {
      width: 100%;
      height: 100%;
  }

  .right {
      padding-right: 25px;

      h1 {
          font-size: 9em;
          line-height: 216px;
          text-align: center;
          color: #6C63FF;
          margin-top: 50px;
      }

      p {
          margin: 0;
          font-size: 3em;
          line-height: 72px;
          text-align: center;
          color: rgba(243, 244, 247, 0.75);
      }
  }

  @media ${({ theme }) => (theme.mediaQueries.below1440)} {
    .right {
      h1 {
          margin-top: 125px;
          font-size: 5em;
          line-height: 50px;
      }

      p {
          font-size: 2em;
      }
    }
  }

  @media ${({ theme }) => (theme.mediaQueries.below768)} {
    .right {
      h1 {
          margin-top: 60%;
          font-size: 3em;
          line-height: 50px;
      }

      p {
          font-size: 1.5em;
          line-height: 45px;
      }
    }
  }

  @media ${({ theme }) => (theme.mediaQueries.below425)} {
    display: flex;
    flex-direction: column;
    justify-content: space;
    padding: 50px 0;
    align-items: center;

    .right {
      h1 {
          font-size: 2em;
          line-height: 50px;
      }

      p {
          font-size: 1.25em;
          line-height: 40px;
      }
    }
  }

  @media ${({ theme }) => (theme.mediaQueries.below320)} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px 0;
    align-items: center;

    .right {
      h1 {
          text-align: center;
          font-size: 2em;
          line-height: 50px;
      }

      p {
          text-align: center;
          font-size: 1.25em;
          line-height: 40px;
      }
    }
  }

  @media ${({ theme }) => (theme.mediaQueries.below300)} {
    .left img {
      width: 90%;
      height: 90%;
    }
  }
`;

export const ImgBg = styled.div`
  width: 100vw;
  height: 40vh;
  background: linear-gradient(90.29deg, rgba(58, 97, 134, 0.5) 1.32%, rgba(137, 37, 62, 0.5) 99.93%),
      url(${({ bg }) => bg});

  background-position: center;

  @media ${({ theme }) => (theme.mediaQueries.below425)} {
    background-size: 700px;
  }

  @media ${({ theme }) => (theme.mediaQueries.below300)} {
    background-size: 600px;
  }
`;

export const Contents = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h2 {
          margin-top: 25px;
          text-align: center;
          color: ${({ theme }) => (theme.colors.lightYellow)};
          font-size: 4em;
          line-height: 96px;
      }

      .methods {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 0 25px;
      }

      .methods p,
      .lastMethod {
          margin-top: 10px;
          color: rgba(243, 244, 247, 0.9);
          font-size: 2.25em;
          line-height: 54px;
          text-align: center;
      }
  }

  .right {
      padding: 0 30px;

      h1 {
          margin: 0;
          color: ${({ theme }) => (theme.colors.lightGreen)};
          font-size: 9em;
          line-height: 216px;
      }

      h3 {
          margin: 0;
          font-size: 3em;
          line-height: 72px;
          text-align: right;
          color: rgba(243, 244, 247, 0.75);
      }
  }

  @media ${({ theme }) => (theme.mediaQueries.below1440)} {
    .left {
      padding: 30px 5px 5px 5px;
      justify-content: flex-start;

      h2 {
          margin-top: 0;
          font-size: 2.75em;
          line-height: 75px;
      }

      .methods p,
      .lastMethod {
          font-size: 1.75em;
          line-height: 35px;
      }
    }

    .right {
      h1 {
          text-align: center;
          font-size: 4em;
          line-height: 60px;
          margin-top: 50px;
      }

      h3 {
          text-align: center;
          font-size: 1.75em;
          line-height: 60px;
          margin: 0;
      }
    }
  }

  @media ${({ theme }) => (theme.mediaQueries.below768)} {
    .left {
      padding: 30px;

      h2 {
          margin-top: 30px;
          font-size: 1.5em;
          line-height: 75px;
      }

      .methods p,
      .lastMethod {
          font-size: 1em;
          line-height: 20px;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h1 {
          text-align: center;
          font-size: 2em;
          line-height: 60px;
          margin-top: 50px;
      }

      h3 {
          text-align: center;
          font-size: 1.25em;
          line-height: 40px;
          margin: 0;
      }
    }
  }

  @media ${({ theme }) => (theme.mediaQueries.below425)} {
    .left {
      padding: 10px;

      h2 {
          margin-top: 30px;
          font-size: 1.5em;
          line-height: 40px;
      }

      .methods {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
      }

      .methods p,
      .lastMethod {
          font-size: 1em;
          line-height: 20px;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h1 {
          text-align: center;
          font-size: 1.5em;
          line-height: 60px;
          margin-top: 50px;
      }

      h3 {
          text-align: center;
          font-size: 1.25em;
          line-height: 30px;
          margin: 0;
      }
    }
  }

  @media ${({ theme }) => (theme.mediaQueries.below320)} {
    display: flex;
    flex-direction: column;

    .left {
      padding: 10px;

      h2 {
          margin-top: 30px;
          font-size: 2em;
          line-height: 50px;
      }

      .methods {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
      }

      .methods p,
      .lastMethod {
          font-size: 1.25em;
          line-height: 25px;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h1 {
          text-align: center;
          font-size: 1.5em;
          line-height: 60px;
          margin-top: 50px;
      }

      h3 {
          text-align: center;
          font-size: 1.25em;
          line-height: 30px;
          margin: 0;
      }
    }
  }
`;
