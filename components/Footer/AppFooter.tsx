import styled from "styled-components";

import { createdAt, thisYear } from "./footer-helpers";
import { TextSmall } from "../Typography";

const AppFooter: React.FC = () => {
  return (
    <Wrapper>
      <TextSmall>
        &copy;{" "}
        {createdAt === thisYear ? thisYear : `${createdAt} - ${thisYear}`} DDD
        App.
      </TextSmall>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  text-align: right;
  color: var(--clr-gray-500);
  border-top: 1px solid var(--clr-gray-200);
  padding-top: var(--spacing);
  padding-bottom: var(--spacing);
  margin: auto var(--spacing) 0 var(--spacing);
`;

export default AppFooter;
