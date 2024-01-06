import { createClient } from '@sanity/client';

// @ts-ignore
const id = import.meta.env.PROJ_ID;

export const client = createClient({
    projectId: id,
    dataset: 'production',
    useCdn: false,
    apiVersion: '2023-05-03',
});