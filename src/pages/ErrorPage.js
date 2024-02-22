import { useRouteError } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container,
  Flex,
  HStack,
  Button,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react';
import Page from '../components/Page';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Page>
      <Flex
        height="30rem"
        alignItems="center"
        justify="center"
        flexDirection="column"
      >
        <Text fontSize="5xl">Oops!</Text>
        <Text>Sorry, an unexpected error has occurred.</Text>
        <Text>
          <Text>{error.statusText || error.message}</Text>
        </Text>
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
      </Flex>
    </Page>
  );
}
