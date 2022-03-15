import type { NextPage } from "next";
import styled from "styled-components";

import { AppLayout } from "@/components/Layout";
import { TextLarge } from "@/components/Typography";

const Dashboard: NextPage = () => {
  return (
    <AppLayout title="Dashboard">
      <Wrapper>
        <Section>
          <SectionHeader>
            <TextLarge as="h2">Words Learning</TextLarge>
          </SectionHeader>
        </Section>
      </Wrapper>
    </AppLayout>
  );
};

const Wrapper = styled.main``;

const Section = styled.section``;

const SectionHeader = styled.header`
  color: var(--clr-gray-900);
`;

export default Dashboard;
