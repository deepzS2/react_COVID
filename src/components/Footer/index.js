import React from "react";

// Assets
import githubImg from '../../assets/github.png';
import facebookImg from '../../assets/facebook.png';
import linkedinImg from '../../assets/linkedin.png';

import { Container, SocialMedia, Link } from "./styles";

// .env
require(`dotenv/config`);

export default function Footer() {
  return (
    <Container>
      <SocialMedia>
        <li>
          <Link
            href={process.env.REACT_APP_LINKEDIN_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            margin="medium"
            img={linkedinImg}
          >
            Linkedin
          </Link>
        </li>
        <li>
          <Link
            href={process.env.REACT_APP_GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            margin="large"
            img={githubImg}
          >
            Github
          </Link>
        </li>
        <li>
          <Link
            href={process.env.REACT_APP_FB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            img={facebookImg}
          >
            Facebook
          </Link>
        </li>
      </SocialMedia>
    </Container>
  );
}
