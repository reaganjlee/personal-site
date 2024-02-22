import React from 'react';
import {
  Flex,
  Box,
  Image,
  VStack,
  Button,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom'; // Assuming you're using react-router for navigation
import SectionContent from '../components/SectionContent';
import { BlackButton, ColoredButton } from '../components/Button';

export const ImageFeatureSection = ({
  imgSrc,
  altText,
  title,
  subtitle,
  buttonText,
  buttonLink,
  direction = { base: 'column', md: 'row' },
}) => {
  return (
    <Flex
      direction={direction}
      w="100%"
      pb={{ base: 10, md: '0%' }}
      // maxW="1440px"
    >
      <Flex
        maxW={{ base: '100%', md: '50%' }}
        maxH="30rem"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={imgSrc}
          alt={altText}
          boxSize="full"
          borderRadius="20%"
          maxW="80%"
        />
      </Flex>
      <Box
        alignItems="center"
        display="flex"
        justifyContent="center"
        maxW={{ base: '100%', md: '50%' }}
        pt={{ base: '5%', md: '0%' }}
      >
        <VStack>
          <SectionContent title={title} subtitle={subtitle} />
          {buttonText && buttonLink && (
            <BlackButton text={buttonText} to={buttonLink} />
          )}
        </VStack>
      </Box>
    </Flex>
  );
};

export const FeatureSection = ({
  tableComponent,
  title,
  subtitle,
  buttonText,
  buttonLink,
  direction = { base: 'column', md: 'row' },
}) => {
  return (
    <Flex direction={direction} w="full" pb={{ base: 10, md: '0%' }}>
      <Flex
        w={{ base: '100%', md: '50%' }}
        justifyContent="center"
        alignItems="center"
      >
        {tableComponent}
      </Flex>
      <Box
        alignItems="center"
        display="flex"
        justifyContent="center"
        w={{ base: '100%', md: '50%' }}
        pt={{ base: '5%', md: '0%' }}
      >
        <VStack w="full">
          <SectionContent title={title} subtitle={subtitle} />
          {buttonText && buttonLink && (
            <BlackButton text={buttonText} to={buttonLink} />
          )}
        </VStack>
      </Box>
    </Flex>
  );
};
