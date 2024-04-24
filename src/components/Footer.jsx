import {
  Image,
  Flex,
  Button,
  HStack,
  chakra,
  Link,
  Icon,
  Text,
  VStack,
  List,
  ListItem,
  Box,
} from '@chakra-ui/react';
// import { Link } from 'react-scroll';
import React from 'react';
import { FaInstagram, FaSlack } from 'react-icons/fa';

const ICON_SIZE = 12;

const Footer = () => {
  return (
    <chakra.footer id="footer">
      <Flex justifyContent="center" w='full'>
        <VStack
          alignItems="center"
          justify="center"
          paddingBottom={5}
          w="90%"
          // align="90%"
        >
          <HStack>
            <Link
              href="https://www.instagram.com/calairbears"
              isExternal
              color="#000000"
            >
              <Icon
                as={FaInstagram}
                className="icon brands"
                boxSize={ICON_SIZE}
              />
              <span className="label"></span>
            </Link>
            <Link
              href="https://join.slack.com/t/calairbears/shared_invite/zt-14s84r9zb-yHVRGE0W1nfSoFRzptyecA"
              color="#000000"
            >
              <Icon as={FaSlack} boxSize={ICON_SIZE} />
              <span></span>
            </Link>
          </HStack>
          <List
            display="flex"
            flexDirection="column"
            className="disclaimer"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <ListItem>
              &copy; Reagan Lee 2024
            </ListItem>
            
          </List>
        </VStack>
      </Flex>
    </chakra.footer>
  );
};
export default Footer;
