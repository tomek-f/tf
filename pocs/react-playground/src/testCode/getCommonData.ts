interface CommonData extends SomeObj {
  recvWindow: number;
  timestamp: number;
}

const getCommonData = (obj: SomeObj = {}): CommonData => {
  if (Array.isArray(obj)) {
    throw new Error('Needs object to operate');
  }

  return {
    recvWindow: 10000,
    timestamp: Date.now(),
    ...obj,
  };
};

export default getCommonData;
