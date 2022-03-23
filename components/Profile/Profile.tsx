import styled from "styled-components";

import type { User } from "@/utils/types";
import Avatar from "../Avatar";
import Card from "../Card";
import { DisplaySmall, TextMedium, TextNormal } from "../Typography";
import { PlaceholderText } from "../Placeholder";

interface ProfileProps {
  user: User;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <Wrapper>
      <Header>
        <HeaderBg />
        <AvatarContainer>
          <Avatar imageUrl={user.picture} size="large" />
        </AvatarContainer>
        <DisplaySmall as="h2">{user.nickname}</DisplaySmall>
        <TextNormal as="p">{user.email}</TextNormal>
      </Header>
      <Section>
        <TextMedium as="h2">Words Learned</TextMedium>
        <PlaceholderText>You haven&#39;t started.</PlaceholderText>
        <Card title="Set 1" number="100" percentage="100%" />
        <Card title="Set 2" number="100" percentage="100%" />
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  --paddingX: 1.5rem;
  background-color: var(--clr-gray-25);
  width: 100%;
  height: 100vh;
`;

const Header = styled.header`
  padding: 78px var(--paddingX) 0 var(--paddingX);
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;

  > *:not(:first-child) {
    z-index: 1;
  }
`;

const AvatarContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const HeaderBg = styled.div`
  background-image: var(--gradient-placeholder);
  width: 100%;
  height: 120px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;
`;

const Section = styled.section`
  padding-left: var(--paddingX);
  padding-right: var(--paddingX);

  > *:first-of-type {
    margin-bottom: 1.5rem;
  }
`;

export default Profile;
