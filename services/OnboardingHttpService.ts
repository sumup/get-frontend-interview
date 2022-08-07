import axios from 'axios';

const GetAll = async (): Promise<Onboarding[]> => {
  const { data } = await axios.get<Onboarding[]>('/api/onboardings');
  return data;
};

export { GetAll as GetAllOnboardings };
