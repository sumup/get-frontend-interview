import type { NextApiRequest, NextApiResponse } from 'next';
import { getReasonPhrase, StatusCodes } from 'http-status-codes';
import axios from 'axios';

interface GetOnboardingsRequest extends NextApiRequest {
  method: string;
  headers: {
    'csrf-token': string;
    'roles': string;
  };
  query: {
    status: string;
    limit: string;
    offset: string;
  };
}

interface OnboardingResponse {
  id: string;
  merchant_code: string;
  acquirer: string;
  status: number;
  last_response: string;
}

type GetAllOnboardingsResponse = Array<OnboardingResponse>;

const handler = async (req: GetOnboardingsRequest, res: NextApiResponse) => {
  const client = axios.create({
    baseURL: 'https://62e00ca3fa8ed271c47d6718.mockapi.io',
  });
  const url = '/api/v1/onboardings';
  await client
    .get<GetAllOnboardingsResponse>(url)
    .then(({ data }) => {
      const onboardings = data.map((onb) => {
        const onboarding: Onboarding = {
          id: onb.id,
          merchantCode: onb.merchant_code,
          acquirer: onb.acquirer,
          status: onb.status,
          lastResponse: onb.last_response,
        };
        return onboarding;
      });
      res.status(StatusCodes.OK).send(onboardings);
    })
    .catch(() => {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send(getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR));
    });
};

export default handler;
