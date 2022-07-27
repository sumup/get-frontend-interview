import { Box, Flex, Heading, Select, Spacer } from '@chakra-ui/react';
import React from 'react';

const Filters: React.FC = () => {
  const onChangeAcquirer = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };
  const onChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };
  return (
    <Box borderWidth="1px" borderRadius="lg" padding="10px">
      <Heading as="h2" size="md">
        Filters
      </Heading>
      <Flex>
        <Box w="200px">
          <label>Acquirer</label>
          <Select onChange={onChangeAcquirer}>
            <option value="">All</option>
            <option value="West">West</option>
            <option value="North">North</option>
            <option value="East">East</option>
            <option value="South">South</option>
          </Select>
        </Box>
        <Spacer />
        <Box w="200px">
          <label>Status</label>
          <Select onChange={onChangeStatus}>
            <option value="">All</option>
            <option value="success">Success</option>
            <option value="failed">Failed</option>
          </Select>
        </Box>
      </Flex>
    </Box>
  );
};

export default Filters;
