import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Container,
  Flex,
  HStack,
  Button,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const cursorVariants = {
  blinking: {
    opacity: [1, 1, 0, 0],
    transition: {
      duration: 1,
      repeat: 3,
      repeatDelay: 0,
      ease: 'linear',
      times: [0, 0.5, 0.5, 1],
    },
  },
};

export default function CursorBlinker({ visible }) {
  return (
    visible && (
      <Box
        as={motion.div}
        variants={cursorVariants}
        animate="blinking"
        display="inline-block"
        height="4.5rem"
        width="1px"
        backgroundColor="gray.900"
      />
    )
  );
}
