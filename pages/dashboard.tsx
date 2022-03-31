import type { NextPage } from "next";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import router from "next/router";

import UserContext from "@/hooks/user-context";
import { AppLayout } from "@/components/Layout";
import { AppHeader } from "@/components/Header";
import { TextLarge } from "@/components/Typography";
import Profile from "@/components/Profile";
import { AppFooter } from "@/components/Footer";
import { PlaceholderPage } from "@/components/Placeholder";
import { ToLearn, ToReview } from "@/components/Words";
import { useGetSetsQuery } from "@/graphql/generated/graphql";

const Dashboard: NextPage = () => {
  const { user, userIsLoading: isLoading } = useContext(UserContext);
  const setsQueryResponse = useGetSetsQuery();

  useEffect(() => {
    if (!user && !isLoading) {
      router.push("/");
    }
  }, [user, isLoading]);

  if (isLoading || !user) {
    return (
      <PlaceholderPage>
        <p>Loading</p>
      </PlaceholderPage>
    );
  }

  return (
    <AppLayout title="Dashboard">
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

            <ToReview setsQueryResponse={setsQueryResponse} userId={user.sub} />
          </Section>

          <Section>
            <SectionHeader>
              <TextLarge as="h2">Words To Learn</TextLarge>
            </SectionHeader>

            <ToLearn setsQueryResponse={setsQueryResponse} userId={user.sub} />
          </Section>
          <AppFooter />
        </Main>
        <Profile user={user} setsQueryResponse={setsQueryResponse} />
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
