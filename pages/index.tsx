import type { NextPage } from "next";
import styled from "styled-components";
import { PlayCircle } from "react-feather";

import Layout from "@/components/Layout";
import { Button, ButtonLink } from "@/components/Button";
import {
  DisplaySmSemiBold,
  DisplayXlSemiBold,
  TextLgMedium,
  TextLgNormal,
  TextXlMedium,
} from "@/components/Typography";
import { CheckIcon, DotIcon } from "@/components/Decorations";
import { useState } from "react";
import Modal from "@/components/Modal";

const Home: NextPage = () => {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <Layout title="Home">
      <Cta>
        <Greeting>A neat tool helps you learn German nouns.</Greeting>
        <Description>
          DDD is not just a flashcard.
          <br />
          We use color to present different type nouns, and provide SRS system
          to help you to remember them.
        </Description>
        <ActionGroup>
          <Button onClick={open}>
            <PlayCircle size={18} />
            <span>Video Demo</span>
          </Button>
          <ButtonLink variant="primary" href="/api/login">
            Give a Try
          </ButtonLink>
        </ActionGroup>
      </Cta>

      <Features>
        <FeaturesContainer>
          <FeatureColumn>
            <DotIcon />
            <FeatureTitle>Visually Help with Colors</FeatureTitle>
            <FeatureExplain>
              Three colors present three genders of German nouns.
            </FeatureExplain>
            <FeatureDetails>
              <FeatureDetailsItem>
                <CheckIcon />
                <Blue>Blue</Blue> is <Em>feminine</Em>
              </FeatureDetailsItem>
              <FeatureDetailsItem>
                <CheckIcon />
                <Red>Red</Red> is <Em>masculine</Em>
              </FeatureDetailsItem>
              <FeatureDetailsItem>
                <CheckIcon />
                <Green>Green</Green> is <Em>neuter</Em>
              </FeatureDetailsItem>
            </FeatureDetails>
          </FeatureColumn>
          <FeatureColumn>
            <DotIcon />
            <FeatureTitle>Spaced Repetition System</FeatureTitle>
            <FeatureExplain>
              Our SRS algorithm adjusts time between reviews for each individual
              word, calculated by your last session.
            </FeatureExplain>
            <FeatureExplain>
              You don’t need to choose “remembered” or not manually, and save
              the energy to learn more nouns.
            </FeatureExplain>
          </FeatureColumn>
        </FeaturesContainer>
      </Features>
      <Modal showDialog={showDialog} close={close} />
    </Layout>
  );
};

const Cta = styled.section`
  --spacingY: 3rem;
  --spacingX: 2rem;
  text-align: center;
  padding: calc(var(--spacingY) * 2) var(--spacingX);

  & > *:not(:last-child) {
    margin-bottom: var(--spacingY);
  }
`;

const Greeting = styled.h2`
  ${DisplayXlSemiBold}
  color: var(--clr-gray-900);
`;

const Description = styled.p`
  ${TextXlMedium}
  color: var(--clr-gray-500);
  max-width: 36ch;
  margin: 0 auto;
`;

const ActionGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: calc(var(--spacingX) / 2);
`;

const Features = styled.section`
  padding: calc(var(--spacingY) * 2) var(--spacingX);
  padding-bottom: calc(var(--spacingY) * 3);
`;

const FeaturesContainer = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: calc(var(--spacingX) * 2);
`;

const FeatureColumn = styled.article`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FeatureTitle = styled.h2`
  ${DisplaySmSemiBold}
  color: var(--clr-gray-900);
  margin-bottom: 1rem;
`;

const FeatureExplain = styled.p`
  ${TextLgMedium}
  color: var(--clr-gray-500);
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 2rem;
  }
`;

const FeatureDetails = styled.ul`
  text-align: left;
`;

const FeatureDetailsItem = styled.li`
  ${TextLgNormal}
  color: var(--clr-gray-500);
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Red = styled.strong`
  font-weight: 500;
  color: var(--clr-red-500);
`;

const Blue = styled.strong`
  font-weight: 500;
  color: var(--clr-blue-700);
`;

const Green = styled.strong`
  font-weight: 500;
  color: var(--clr-green-700);
`;

const Em = styled.em`
  font-family: var(--ff-special);
  font-style: italic;
`;

export default Home;
