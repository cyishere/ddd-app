import type { NextPage } from "next";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import router from "next/router";

import { QUERIES } from "@/styles/constants";
import UserContext from "@/hooks/user-context";
import SetsContext from "@/hooks/sets-context";
import { useGetSetsQuery } from "@/graphql/generated/graphql";

import { AppLayout } from "@/components/Layout";
import { AppHeader } from "@/components/Header";
import { TextLarge } from "@/components/Typography";
import Profile from "@/components/Profile";
import { AppFooter } from "@/components/Footer";
import { PlaceholderPage } from "@/components/Placeholder";
import { ToLearn, ToReview } from "@/components/Words";

const Dashboard: NextPage = () => {
  const { user, userIsLoading: isLoading } = useContext(UserContext);
  const { data, loading, error } = useGetSetsQuery();

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
      <SetsContext.Provider value={{ data, loading, error }}>
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

              <ToReview userId={user.sub} />
            </Section>

            <Section>
              <SectionHeader>
                <TextLarge as="h2">Words To Learn</TextLarge>
              </SectionHeader>

              <ToLearn userId={user.sub} />
            </Section>
            <FooterWrapper>
              <AppFooter />
            </FooterWrapper>
          </Main>
          <Profile user={user} />
        </Wrapper>
      </SetsContext.Provider>
    </AppLayout>
  );
};

const Wrapper = styled.div`
  --spacing: 2rem;
  display: grid;
  grid-template-columns: 1fr 300px;

  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: 1fr;
  }
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

const FooterWrapper = styled.div`
  margin-top: auto;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

export default Dashboard;
