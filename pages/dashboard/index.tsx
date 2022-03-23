import type { NextPage } from "next";
import { useEffect } from "react";
import styled from "styled-components";
import router from "next/router";

import { useFetchUser } from "@/hooks/use-fetch-user";
import { AppLayout } from "@/components/Layout";
import { AppHeader } from "@/components/Header";
import { TextLarge } from "@/components/Typography";
import Profile from "@/components/Profile";
import { AppFooter } from "@/components/Footer";
import { PlaceholderPage } from "@/components/Placeholder";
import { ToLearn, ToReview } from "@/components/Words";

const Dashboard: NextPage = () => {
  const { user, isLoading } = useFetchUser();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  if (isLoading) {
    return (
      <PlaceholderPage>
        <p>Loading</p>
      </PlaceholderPage>
    );
  }

  return (
    <AppLayout title="Dashboard" user={user}>
      <Wrapper>
        <Main>
          <AppHeader
            title="Dashboard"
            subTitle={`Welcome back, ${user.nickname}!`}
          />

          <Section>
            <SectionHeader>
              <TextLarge as="h2">Words To Review</TextLarge>
            </SectionHeader>

            <ToReview />
          </Section>

          <Section>
            <SectionHeader>
              <TextLarge as="h2">Words To Learn</TextLarge>
            </SectionHeader>

            <ToLearn />
          </Section>
          <AppFooter />
        </Main>
        <Profile user={user} />
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

export default Dashboard;
