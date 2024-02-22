import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Image,
  theme,
  Container,
  Heading,
  ListItem,
  OrderedList,
  Flex,
  HStack,
  Button,
  UnorderedList,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react';
import SectionContent from '../components/SectionContent';

const FullPackageInfo = () => {
  return (
    <VStack
      alignItems="left"
      rounded="lg"
      textAlign="left"
      w="80%"
      align="center"
    >
      <SectionContent title="What do I need?" subtitle="" />
      {/* <Heading fontSize={{ base: '2xl', md: 'md' }}>What do I need?</Heading> */}
      <Box w="full">
        <Text>The full package includes:</Text>
      </Box>
      <UnorderedList pl={2.5}>
        <ListItem>First Jump Course</ListItem>
        <ListItem>7 AFF Jumps</ListItem>
        <ListItem>5 Coach Jumps</ListItem>
        <ListItem>12 Solo Jumps</ListItem>
        <ListItem>Packing Class w/ Test</ListItem>
        <ListItem>USPA A License Graduation Check Dive</ListItem>
        <ListItem>All gear rentals & pack jobs</ListItem>
      </UnorderedList>
      <SectionContent
        title=""
        subtitle="AirBears offers a discount to members, contact us for more
                  information!"
        textAlign="left"
        subtitle_maxW="100%"
      />
    </VStack>
  );
};
export default FullPackageInfo;
