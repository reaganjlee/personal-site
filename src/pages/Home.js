import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading,
  Container,
  Flex,
  UnorderedList,
  ListItem,
  HStack,
  Image,
  Button,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SectionContent from '../components/SectionContent';
import { ImageFeatureSection } from '../components/FeatureSection';
import StatCardRow from '../components/StatCardRow';
import { BlackButton, ColoredButton } from '../components/Button';
import Page from '../components/Page';
import CursorBlinker from '../components/typing-text/CursorBlinker';
import TextAnim from '../components/typing-text/TextAnim';

const Home = () => {
  const achievementsData = [
    [
      "Shipped ‘breaking’-type feature in pytest.warns in Pytest 8.0, Python’s most popular testing library"
    ],
    [
      "Optimized runtime performance on filtered text strategy by 66% for Hypothesis, a property-based testing library used by ~5% of all Python users"
    ],
    [
      'Cofounded Poker@Berkeley, one of the largest organizations at UC Berkeley',
    ],
    [
      'Been a lead organizer at Berkeley AI Safety Initiative, specifically growing the research program (SPAR) by 2.5x, and spinning this out as an independent organization.',
    ],
  ];
  const achievements = achievementsData.map((lst, i) => {
    return (
      <>
        <ListItem key={i}>{lst[0]}</ListItem>
        {lst.length > 1 && (
          <UnorderedList>
            {lst.slice(1).map(item => {
              return <ListItem key={item}>{item}</ListItem>;
            })}
          </UnorderedList>
        )}
      </>
    );
  });

  return (
    <Page>
      {/* <NavBar /> */}
      {/* <VStack justify="space-between" flexDirection="column" minH="100vh" > */}
      <Flex alignItems="flex-start" direction="column" textAlign='left'pt={10}>
        {/* <Heading fontSize="6xl" p={5} pl={0}>
          {' '}
          Reagan Lee{' '}
        </Heading> */}
        <TextAnim />
        {/* <Text fontSize='md' pt={1}>Hello! My name is Reagan.</Text> */}
        <Text fontSize="md" py={3}>
          I'm a recent graduate from UC Berkeley, studying Data Science and Economics. Currently, I am doing research
          at BAIR, focusing on evaluations for synthetic data generation.
        </Text>
        <Text fontSize="md" py={2}>
          Here are a few things I've done:{' '}
        </Text>
        <UnorderedList
          alignItems="left"
          justify="left"
          textAlign="left"
          w="70%"
        >
          {achievements}
        </UnorderedList>
        <Text py={2} pt={4}>My github can be found <Link
              href="https://www.instagram.com/calairbears"
              isExternal
              color='blue.500'
            >here.</Link> To get in contact, feel free to email me at reaganjlee [at] berkeley.edu.</Text>
      </Flex>
      {/* <Footer />
      </VStack > */}
    </Page>
    
  );
};
export default Home;
