import styled from "styled-components";

import Emoji from "../Emoji";
import { TextMdNormal } from "../Typography";
import { createdAt, thisYear } from "./footer-helpers";

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <TextLeft>
          &copy;{" "}
          {createdAt === thisYear ? thisYear : `${createdAt} - ${thisYear}`} DDD
          App.
        </TextLeft>
        <TextRight>
          Made with <Emoji name="coffee">☕</Emoji> by{" "}
          <a href="https://cyishere.dev">CY</a>.
        </TextRight>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: var(--clr-gray-25);
  padding: 2.25rem;
  margin-top: auto;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextLeft = styled.p`
  ${TextMdNormal}
  color: var(--clr-gray-500);
  text-align: left;
`;

const TextRight = styled.p`
  ${TextMdNormal}
  color: var(--clr-gray-500);
  text-align: right;
`;

export default Footer;
