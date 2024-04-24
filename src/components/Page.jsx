import {
  Image,
  Flex,
  Button,
  HStack,
  chakra,
  VStack,
  Box,
  Text,
} from '@chakra-ui/react';
import NavBar from './NavBar';
import Footer from './Footer';

const Page = props => {
  return (
    <>
      {/* <NavBar /> */}
      <Box direction="column" align="center" >
        <Box w="70%" maxW="1440px" minH="100vh">
          {props.children}
        </Box>
      </Box>
      {/* <Footer /> */}
    </>
  );
};
export default Page;
