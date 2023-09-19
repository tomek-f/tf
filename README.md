# tf

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

## update all

-   `npm install -g npm-check-updates` && `ncu -u && ncu -u -ws` && `npm i`

## astro

same result

```ts
import type { HTMLAttributes } from 'astro/types';

type Props1 = HTMLAttributes<'svg'>;

type Props2 = astroHTML.JSX.SVGAttributes;
```

## next

-   app folder
-   server components
-   server actions
-   https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
-   https://nextjs.org/docs/app/building-your-application/deploying/static-exports
-   title and description ://github.com/vercel/next.js/discussions/50872

## zod

-   default https://github.com/colinhacks/zod/discussions/1953

## turbo

-   https://turbo.build/repo/docs/handbook/sharing-code/internal-packages

## icons

-   https://lucide.dev/
-   https://heroicons.com/

## primitives

-   https://www.radix-ui.com/
-   https://headlessui.com/

## tailwind

-   https://www.npmjs.com/package/tailwind-merge - does not remove unused styles
-   https://preline.co/index.html
