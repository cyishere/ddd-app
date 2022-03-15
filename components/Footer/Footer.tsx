import styled from "styled-components";
import Emoji from "../Emoji";
import { TextNormal } from "../Typography";
import { createdAt, thisYear } from "./footer-helpers";

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <TextNormal as="p">
        &copy;{" "}
        {createdAt === thisYear ? thisYear : `${createdAt} - ${thisYear}`} DDD
        App. Made with <Emoji name="coffee">☕</Emoji> by{" "}
        <a href="https://cyishere.dev">CY</a>.
      </TextNormal>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  text-align: center;
  background-color: var(--clr-gray-25);
  padding: 2.25rem;
`;

export default Footer;
