export default function handler(request, response) {
    const { name = 'World' } = request.query;

    return response.send(`Hello ${name}!`);
}

// api/test-node.ts(2,1): error TS1287: A top-level 'export' modifier cannot be used on value declarations in a CommonJS module when 'verbatimModuleSyntax' is enabled.
