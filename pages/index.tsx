import { Alert, AlertIcon, Heading } from '@chakra-ui/react';
import React from 'react';

const Home: React.FC = () => {
  const onboardings = [];

  return (
    <div>
      <Heading margin="25px">Onboardings List</Heading>
      {onboardings.length ? (
        <div>This should be a table</div>
      ) : (
        <>
          <Alert status="warning">
            <AlertIcon />
            No onboardings found
          </Alert>
        </>
      )}
    </div>
  );
};

export default Home;
