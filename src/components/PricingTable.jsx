import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Card,
  CardBody,
  Image,
  theme,
  Container,
  ListItem,
  OrderedList,
  Flex,
  HStack,
  Button,
  SimpleGrid,
  GridItem,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { TableEntry, StrikedItem } from '../components/TableUtils';

const PricingTable = () => {
  return (
    <GridItem
      colSpan={1}
      fontSize={{ base: 5, md: 20 }}
      textAlign="center"
      spacing={0}
      pl={{ base: 0, md: 8 }}
    >
      <Box position="relative">
        <Card>
          <CardBody>
            <TableContainer maxW="100%">
              <Table
                size={{ base: 'sm', md: 'sm', xl: 'md' }}
                alignItems="center"

                // __css={{ 'table-layout': 'fixed', width: 'full' }}
              >
                <Thead>
                  <Tr>
                    <Th></Th>
                    <Th
                      textAlign="center"
                      //   p={2.5}
                    >
                      <Text
                        fontSize={{
                          base: '.75rem',
                          md: 'md',
                        }}
                      >
                        With AirBears
                      </Text>
                    </Th>
                    <Th textAlign="center">
                      <Text fontSize={{ base: '.75rem', md: 'md' }}>
                        Regular
                      </Text>
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <TableEntry title="Tandem*" subtitle="See below" />
                    </Td>
                    <Td isNumeric>
                      <Text textAlign="center">$220</Text>
                    </Td>
                    <Td isNumeric>
                      <StrikedItem content="$255" />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <TableEntry
                        title="Video Package"
                        subtitle="Capture every moment"
                      />
                    </Td>
                    <Td isNumeric>
                      <Text textAlign="center">$115</Text>
                    </Td>
                    <Td isNumeric>
                      <StrikedItem content="$130" />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <TableEntry
                        title="Food/Transportation"
                        subtitle="Food on-site"
                      />
                    </Td>
                    <Td isNumeric>
                      <Text textAlign="center">$0</Text>
                    </Td>
                    <Td isNumeric>
                      <StrikedItem content="$30" />
                    </Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Td colSpan={3}>
                      <Text
                        fontSize={{ base: '.5rem', md: 'sm' }}
                        color="gray.400"
                        fontWeight="normal"
                      >
                        {' '}
                        {/* <TableCaption bg="red" w="100%"> */}
                        *This pays for the instructor, pilot, the plane, and the
                        parachute itself
                        {/* </TableCaption> */}
                      </Text>{' '}
                    </Td>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </CardBody>
        </Card>
      </Box>
    </GridItem>
  );
};

export default PricingTable;
