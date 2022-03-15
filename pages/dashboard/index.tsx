import type { NextPage } from "next";
import styled from "styled-components";

import { AppLayout } from "@/components/Layout";
import { AppHeader } from "@/components/Header";
import { TextLarge } from "@/components/Typography";
import Profile from "@/components/Profile";
import Card from "@/components/Card";
import { AppFooter } from "@/components/Footer";

const Dashboard: NextPage = () => {
  return (
    <AppLayout title="Dashboard">
      <Wrapper>
        <Main>
          <AppHeader title="Dashboard" subTitle="Welcome back, Debbie Ocean!" />
          <Section>
            <SectionHeader>
              <TextLarge as="h2">Words Learning</TextLarge>
            </SectionHeader>
            <CardsWrapper>
              <Card color="green" title="Set 4" number="90" percentage="10%" />
            </CardsWrapper>
          </Section>
          <Section>
            <SectionHeader>
              <TextLarge as="h2">Words To Learn</TextLarge>
            </SectionHeader>
            <CardsWrapper>
              <Card color="yellow" title="Set 5" number="27" percentage="73%" />
            </CardsWrapper>
          </Section>
          <AppFooter />
        </Main>
        <Profile />
      </Wrapper>
    </AppLayout>
  );
};

const Wrapper = styled.div`
  --spacing: 2rem;
  display: grid;
  grid-template-columns: 1fr 390px;
`;

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const Section = styled.section`
  padding-left: var(--spacing);
  padding-right: var(--spacing);
  margin-bottom: calc(var(--spacing) * 2);
`;

const SectionHeader = styled.header`
  color: var(--clr-gray-900);
  margin-bottom: var(--spacing);
`;

const CardsWrapper = styled.div``;

export default Dashboard;
