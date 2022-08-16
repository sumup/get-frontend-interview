import axios from 'axios';

type Onboarding = {
    id: string;
    merchantName: string;
    merchantLastName: string;
    acquirer: string;
    status: boolean;
    lastResponse: string;
};

interface OnboardingResponse {
    id: string;
    merchant_name: string;
    merchant_last_name: string;
    acquirer: string;
    status: boolean;
    last_response: string;
}

type GetAllOnboardingsResponse = Array<OnboardingResponse>;

const GetAll = async (): Promise<Onboarding[]> => {
    const client = axios.create({
        baseURL: 'https://62e00ca3fa8ed271c47d6718.mockapi.io',
    });
    const url = '/api/v1/onboardings';
    return client
        .get<GetAllOnboardingsResponse>(url)
        .then(({ data }) => {
            return data.map((onb) => {
                const onboarding: Onboarding = {
                    id: onb.id,
                    merchantName: onb.merchant_name,
                    merchantLastName: onb.merchant_last_name,
                    acquirer: onb.acquirer,
                    status: onb.status,
                    lastResponse: onb.last_response,
                };
                return onboarding;
            });
        })
        .catch((err) => {
            throw err;
        });
};

export { type Onboarding, GetAll as GetAllOnboardings };
