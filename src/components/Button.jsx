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
import { useNavigate } from 'react-router-dom';

export const BlackButton = ({ text, to, href }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (href) {
      window.location.href = href; // This will navigate to an external link
    }
  };

  return (
    <Button
      variant="solid"
      bg="black"
      color="white"
      _hover={{ bg: 'gray.600' }}
      size="md"
      fontSize="md"
      p={5}
      onClick={() => handleClick()}
    >
      {text}
    </Button>
  );
};

export const ColoredButton = ({ text, to, href }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (href) {
      window.location.href = href; // This will navigate to an external link
    }
  };
  const lineColor = '#93827F';
  // AED7F5
  return (
    <Button
      variant="outline"
      bg="#f5f6f7"
      borderColor={lineColor}
      color={lineColor}
      _hover={{ bg: '#ebedf0' }}
      _active={{
        bg: '#dddfe2',
        transform: 'scale(0.98)',
        borderColor: '#bec3c9',
      }}
      onClick={() => handleClick()}
    >
      {text}
    </Button>
  );
};
