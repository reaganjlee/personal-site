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
      <Flex justifyContent="center">
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
              &copy; AirBears at Berkeley. All rights reserved.
            </ListItem>
            <ListItem>
              <Link href="https://www.ocf.berkeley.edu" isExternal>
                <Image
                  src="https://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin-dark.svg"
                  alt="Hosted by the OCF"
                  style={{ border: 0 }}
                />
              </Link>
            </ListItem>
            <ListItem textAlign="center">
              {' '}
              We are a student group acting independently of the University of
              California. We take full responsibility for our organization and
              this web site.
            </ListItem>
            <ListItem>
              {' '}
              Made with ❤️ by{' '}
              <Link href="https://www.linkedin.com/in/reaganjlee/">
                Reagan Lee
              </Link>
            </ListItem>
          </List>
        </VStack>
      </Flex>
    </chakra.footer>
  );
};
export default Footer;
