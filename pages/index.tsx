import { Alert, AlertIcon, Heading } from '@chakra-ui/react';
import React from 'react';

import Filters from '../components/Filters';
import OnboardingsService from '../services/OnboardingHttpService';

const Home: React.FC = () => {
  const onboardings = [];

  return (
    <div>
      <Heading margin="25px">Onboardings List</Heading>
      <Filters />
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
