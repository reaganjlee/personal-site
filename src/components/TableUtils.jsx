import {
  Image,
  Flex,
  Button,
  HStack,
  chakra,
  Heading,
  VStack,
  Box,
  Text,
} from '@chakra-ui/react';

export function TableEntry({ title, subtitle }) {
  return (
    <Flex direction="column" justifyContent="flex-start" h="100%">
      <Heading fontSize={{ base: '.75rem', md: 'lg' }}>{title}</Heading>
      <Text
        fontSize={{ base: '.6rem', md: 'sm' }}
        color="gray.400"
        fontWeight="normal"
        whiteSpace="pre-line"
        pt="3%"
      >
        {subtitle}
      </Text>
    </Flex>
  );
}

export function StrikedItem({ content }) {
  // Theres a bug with the ChakraUI removing alignment
  // if you use strikethrough, requiring this
  return (
    <Box textAlign="center">
      <Text as="s">{content}</Text>
    </Box>
  );
}
