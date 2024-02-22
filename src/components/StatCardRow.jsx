import {
  Image,
  Flex,
  Button,
  HStack,
  Card,
  chakra,
  Heading,
  CardHeader,
  CardBody,
  VStack,
  Text,
} from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';

const StatCard = ({ title, subtitle }) => {
  return (
    <Card justify="center" alignItems="center" m={2} w="full">
      <VStack pt={4} pb={4}>
        <Heading fontSize={{ base: '3xl', md: '4xl' }} pb={1}>
          {title}
        </Heading>
        <CardBody fontSize={{ base: 'xl', md: '2xl' }} pt={0} pb={0}>
          {subtitle}
        </CardBody>
      </VStack>
    </Card>
  );
};
function StatCardRow({ StatCardData }) {
  const direction = useBreakpointValue({ base: 'column', md: 'row' });
  return (
    <Flex justify="center" pt={10} pb={{ base: 10, md: 10 }}>
      <Flex w="64%" direction={direction}>
        {StatCardData.map((card, index, arr) => {
          return <StatCard title={card.title} subtitle={card.subtitle} />;
        })}
      </Flex>
    </Flex>
  );
}
export default StatCardRow;
