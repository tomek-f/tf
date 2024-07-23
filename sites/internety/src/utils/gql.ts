// this tagged template literal does nothing, but allows syntax highlighting inside (eg. https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql-syntax)

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// function gql2(strings: TemplateStringsArray, ...expressions: any[]) {
//   return strings.reduce(
//     (result, currentString, i) =>
//       `${result}${currentString}${expressions[i] ? expressions[i] : ''}`,
//     '',
//   );
// }

// hacked version
export function gql(strings: TemplateStringsArray) {
    return strings.join('');
}
