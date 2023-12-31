import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: 'ckvf1x81',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2023-05-03',
});