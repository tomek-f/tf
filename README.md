# tf

## to check

-   [ ] https://component-party.dev/
-   [ ] https://auto-animate.formkit.com/

## update all (npm)

-   `npm install -g npm-check-updates` && `ncu -u && ncu -u -ws` && `npm i`

## corepack

-   pnpm `corepack prepare pnpm@9.1.3 --activate`
-   yarn `corepack prepare yarn@1.22.22 --activate`

## astro

same result

```ts
import type { HTMLAttributes } from 'astro/types';

type Props1 = HTMLAttributes<'svg'>;
type Props2 = astroHTML.JSX.SVGAttributes;
```

## next

-   title and description ://github.com/vercel/next.js/discussions/50872

## zod

-   default https://github.com/colinhacks/zod/discussions/1953

## icons

-   https://lucide.dev/
-   https://heroicons.com/

## primitives

-   https://www.radix-ui.com/
-   https://headlessui.com/

## fake data

-   https://www.npmjs.com/package/@faker-js/faker
-   https://www.npmjs.com/package/@ngneat/falso

## backend

-   express, fastify, koa, hono, hapi

## tailwind

-   https://www.npmjs.com/package/tailwind-merge - does not remove unused styles
-   https://preline.co/index.html

## react common types

-   `React.ReactElement` - React element (`<Foo />`); similar `JSX.Element` (deprecated) -> `React.JSX.Element`
-   `React.ReactNode` - describes anything that can be rendered - strings, numbers, elements or an array of these things
-   `React.ElementType` - React component (import Foo…)
-   html components
    -   `type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;`
    -   `interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> { active?: boolean }`
-   @types/react

    ```ts
    //
    // Event Handler Types
    // ----------------------------------------------------------------------

    type EventHandler<E extends SyntheticEvent<any>> = {
        bivarianceHack(event: E): void;
    }['bivarianceHack'];

    type ReactEventHandler<T = Element> = EventHandler<SyntheticEvent<T>>;

    type ClipboardEventHandler<T = Element> = EventHandler<ClipboardEvent<T>>;
    type CompositionEventHandler<T = Element> = EventHandler<
        CompositionEvent<T>
    >;
    type DragEventHandler<T = Element> = EventHandler<DragEvent<T>>;
    type FocusEventHandler<T = Element> = EventHandler<FocusEvent<T>>;
    type FormEventHandler<T = Element> = EventHandler<FormEvent<T>>;
    type ChangeEventHandler<T = Element> = EventHandler<ChangeEvent<T>>;
    type KeyboardEventHandler<T = Element> = EventHandler<KeyboardEvent<T>>;
    type MouseEventHandler<T = Element> = EventHandler<MouseEvent<T>>;
    type TouchEventHandler<T = Element> = EventHandler<TouchEvent<T>>;
    type PointerEventHandler<T = Element> = EventHandler<PointerEvent<T>>;
    type UIEventHandler<T = Element> = EventHandler<UIEvent<T>>;
    type WheelEventHandler<T = Element> = EventHandler<WheelEvent<T>>;
    type AnimationEventHandler<T = Element> = EventHandler<AnimationEvent<T>>;
    type TransitionEventHandler<T = Element> = EventHandler<TransitionEvent<T>>;
    ```

-   …

## react native

-   use expo 😉

## workflow backup

vecel.json

```json
{
    "github": {
        "enabled": false
    }
}
```

```yml
name: deploy @tf/next-playground

on:
    workflow_dispatch:
    workflow_call:

jobs:
    deploy-vercel-3:
        runs-on: ubuntu-latest
        strategy:
            matrix:
                environment: [testing, production]
        steps:
            - uses: actions/checkout@v3
            - uses: uses: actions/setup-node@v3
            - run: npm install --global vercel@latest
            - name: deploy project 3 to Vercel
              run: |
                  prodRun=""
                  if [[ ${GITHUB_REF} == "refs/heads/master" ]]; then
                  prodRun="--prod"
                  fi

                  vercel --token ${VERCEL_TOKEN} $prodRun
              env:
                  VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
                  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
                  VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID_3 }}
```

## vercel.json old react config

```json
{
    "github": {
        "enabled": false
    },
    "cleanUrls": true,
    "trailingSlash": false,
    "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```
