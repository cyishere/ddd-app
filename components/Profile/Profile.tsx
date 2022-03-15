import { debbie } from "@/utils/users";
import styled from "styled-components";
import Avatar from "../Avatar";
import Card from "../Card";
import { DisplaySmall, TextMedium, TextNormal } from "../Typography";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  return (
    <Wrapper>
      <Header>
        <AvatarContainer>
          <Avatar name={debbie.name} imageUrl={debbie.imageUrl} size="large" />
        </AvatarContainer>
        <DisplaySmall as="h2">Debbie Ocean</DisplaySmall>
        <TextNormal as="p">debbie@oceans.com</TextNormal>
        <HeaderBg />
      </Header>
      <Section>
        <TextMedium as="h2">Words Learned</TextMedium>
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

  > * {
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
