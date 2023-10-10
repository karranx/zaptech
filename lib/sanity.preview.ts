'use client'

import { definePreview } from 'next-sanity/preview';
import { projectId, dataset } from './sanity.client';

function onPublicAccessOnly() {
  throw new Error('Unable to load preview content. Please LogIn');
}

if(!projectId || !dataset) {
  throw new Error('Missing projectId or dataset. Check your sanity.json or .env');
}

export const usePreview = definePreview({
    projectId,
    dataset,
})