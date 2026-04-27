/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace astroHTML.JSX {
  interface VideoHTMLAttributes {
    fetchpriority?: 'high' | 'low' | 'auto';
  }
}
