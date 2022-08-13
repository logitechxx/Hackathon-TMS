import { Box, Flex, Heading } from '@chakra-ui/react';
import CreateDriver from '../../components/organisms/Driver/Create';
import TableDriver from '../../components/organisms/Driver/TableDriver';

function DriverPage() {
  return (
    <Box p="15" m="10" backgroundColor="facebook.200" height="80vh">
      <Flex justifyContent={'space-between'}>
        <Heading as={'h3'}>Driver</Heading>
        <CreateDriver />
      </Flex>
      <TableDriver />
    </Box>
  );
}

export default DriverPage;
