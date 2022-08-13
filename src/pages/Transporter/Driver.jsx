import { Box, Flex } from '@chakra-ui/react';
import CreateDriver from '../../components/organisms/Driver/Create';
import TableDriver from '../../components/organisms/Driver/TableDriver';

function DriverPage() {
  return (
    <Box p="15" m="10" backgroundColor="facebook.200" height="80vh">
      <h1>Drivers List</h1>
      <Flex>
        <CreateDriver />
      </Flex>
      <TableDriver />
    </Box>
  );
}

export default DriverPage;
