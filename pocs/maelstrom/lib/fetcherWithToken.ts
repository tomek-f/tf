const fetcherWithToken = async (url: RequestInfo | URL, token: string) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin',
  });

  if (!res.ok) {
    const error = new Error(`${res.status}`);

    throw error;
  }

  return res.json();
};

export default fetcherWithToken;
