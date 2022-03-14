import styled from "styled-components";
import Emoji from "../Emoji";
import { TextNormal } from "../Typography";

const Footer: React.FC = () => {
  const createdAt = new Date("2022").getFullYear();
  const today = new Date();
  const thisYear = today.getFullYear();

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
