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
  return (
    <Page>
      {/* <NavBar /> */}
      <Flex alignItems="flex-start" direction="column" pt={10}>
        {/* <Heading fontSize="6xl" p={5} pl={0}>
          {' '}
          Reagan Lee{' '}
        </Heading> */}
        <TextAnim />
        <UnorderedList alignItems="left" justify="left" textAlign="left">
          {' '}
          <ListItem>Hello! This is my personal site </ListItem>
          <ListItem>Ive been a part of Poker@Berkeley, and AIS@B </ListItem>
          <ListItem>
            Have done research in mechanistic interpretabiltiy, and more
            recently, adversarial robustness.{' '}
          </ListItem>
          <ListItem>
            Ran SPAR, the Supervised Program for Alignment Research, as the lead
            organizer.{' '}
          </ListItem>
        </UnorderedList>
      </Flex>
    </Page>
  );
};
export default Home;
