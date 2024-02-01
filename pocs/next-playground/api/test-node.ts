// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function handler(request: any, response: any) {
    const { name = 'World' } = request.query;

    return response.send(`Hello ${name}!`);
}
