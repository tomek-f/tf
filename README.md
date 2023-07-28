# tf

## react common types

- `React.ReactElement` - React element (`<Foo />`); similar `JSX.Element` (deprecated) -> `React.JSX.Element`
- `React.ReactNode` - describes anything that can be rendered - strings, numbers, elements or an array of these things
- `React.ElementType` - React component (import Foo…)
- html components
  - `type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;`
  - `interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> { active?: boolean }`

## update all

- `npm install -g npm-check-updates` && `ncu -u && ncu -u -ws` && `npm i`

## next new stuff

- app folder
- server components
- server actions

## next static

- https://nextjs.org/docs/app/building-your-application/deploying/static-exports

## zod

- default https://github.com/colinhacks/zod/discussions/1953

## turbo

- https://turbo.build/repo/docs/handbook/sharing-code/internal-packages

## icons

- https://lucide.dev/
- https://heroicons.com/

## tailwind

- https://www.npmjs.com/package/tailwind-merge - does not remove unused styles
