interface CommonData extends SomeObject {
    recvWindow: number;
    timestamp: number;
}

const getCommonData = (object: SomeObject = {}): CommonData => {
    if (Array.isArray(object)) {
        throw new TypeError('Needs object to operate');
    }

    return {
        recvWindow: 10_000,
        timestamp: Date.now(),
        ...object,
    };
};

export default getCommonData;
