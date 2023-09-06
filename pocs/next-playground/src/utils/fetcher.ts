// for swr config https://swr.vercel.app/docs/with-nextjs#client-components
// UNUSED
const fetcher = async (input: RequestInfo | URL, init?: RequestInit) => {
    const res = await fetch(input, init);

    if (!res.ok) {
        const error = new Error(String(res.status));

        throw error;
    }

    return res.json();
};

export default fetcher;
