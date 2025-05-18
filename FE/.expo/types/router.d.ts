/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/main` | `/main`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Setting` | `/Setting`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Main` | `/Main`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/main` | `/main`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Setting` | `/Setting`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Main` | `/Main`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/main${`?${string}` | `#${string}` | ''}` | `/main${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Setting${`?${string}` | `#${string}` | ''}` | `/Setting${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Main${`?${string}` | `#${string}` | ''}` | `/Main${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/main` | `/main`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Setting` | `/Setting`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Main` | `/Main`; params?: Router.UnknownInputParams; };
    }
  }
}
