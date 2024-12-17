const getFetchSettings = (method: 'GET' | 'POST', figmaToken: string, data = {}): RequestInit => ({
  method,
  mode: 'cors',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
    'X-Figma-Token': figmaToken,
    'Accept-Encoding': 'gzip, deflate, br',
    Connection: 'keep-alive',
    Accept: '*/*',
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
  ...(Object.keys(data).length ? { body: JSON.stringify(data) } : {}),
});

export default getFetchSettings;
