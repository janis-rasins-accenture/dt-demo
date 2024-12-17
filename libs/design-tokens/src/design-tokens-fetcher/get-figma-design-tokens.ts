import fs from 'fs';
import getFetchSettings from './fetch-settings';
import { DesignTokensResponse } from '../types/design-tokens';
import { getTokens } from '../design-tokens-styler/design-token-styler';
import * as dotenv from 'dotenv';

const getFigmaDesignTokens = async () => {
  dotenv.config({ path: `.env.local` });
  const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
  const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
  const FIGMA_RESPONSE_FILE = process.env.FIGMA_RESPONSE_FILE;
  if (!FIGMA_TOKEN || !FIGMA_FILE_KEY || !FIGMA_RESPONSE_FILE) {
    throw new Error('Missing Figma settings!');
  }
  const url = `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/variables/local`;
  try {
    const fetchSettings = getFetchSettings('GET', FIGMA_TOKEN);
    console.log('A request has been sent to Figma to receive tokens...');
    const response = await fetch(url, fetchSettings);
    const figmaResponse = await (response.json() as Promise<DesignTokensResponse>);
    console.log('Data received wit status: ', figmaResponse.status);
    if (figmaResponse.status !== 200) {
      throw new Error(`Bad status: ${figmaResponse.status}`);
    }
    console.log('Processing data starting...');
    const currentTheme = getTokens(figmaResponse);
    console.log('The data has been processed.');
    fs.writeFileSync(FIGMA_RESPONSE_FILE, JSON.stringify(currentTheme));
    console.log('Design tokens file was saved!');
  } catch (error) {
    return console.error(error);
  }
};

export default getFigmaDesignTokens();
