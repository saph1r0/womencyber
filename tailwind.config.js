/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          "2d-colors-foreground-color": "var(--2d-colors-foreground-color)",
          "2d-colors-scrim-foreground-scrim":
            "var(--2d-colors-scrim-foreground-scrim)",
          "2d-colors-tree": "var(--2d-colors-tree)",
          "asset-master-ambient-dawn": "var(--asset-master-ambient-dawn)",
          "asset-master-ambient-day": "var(--asset-master-ambient-day)",
          "asset-master-ambient-night": "var(--asset-master-ambient-night)",
          "asset-master-ambient-sunset": "var(--asset-master-ambient-sunset)",
          "asset-master-fog-dawn": "var(--asset-master-fog-dawn)",
          "asset-master-fog-day": "var(--asset-master-fog-day)",
          "asset-master-fog-night": "var(--asset-master-fog-night)",
          "asset-master-fog-sunset": "var(--asset-master-fog-sunset)",
          "asset-master-sky-dawn": "var(--asset-master-sky-dawn)",
          "asset-master-sky-day": "var(--asset-master-sky-day)",
          "asset-master-sky-night": "var(--asset-master-sky-night)",
          "asset-master-sky-sunset": "var(--asset-master-sky-sunset)",
          "assets-colorscloudsclouds": "var(--assets-colorscloudsclouds)",
          "assets-colorscloudsdark": "var(--assets-colorscloudsdark)",
          "assets-colorscloudsgreyish": "var(--assets-colorscloudsgreyish)",
          "assets-colorscloudspure": "var(--assets-colorscloudspure)",
          "assets-colorscloudspure-transp-50":
            "var(--assets-colorscloudspure-transp-50)",
          "assets-colorslightmoonshapemoon":
            "var(--assets-colorslightmoonshapemoon)",
          "assets-colorslightmoonshapemoon-shadow":
            "var(--assets-colorslightmoonshapemoon-shadow)",
          "assets-colorslightstar": "var(--assets-colorslightstar)",
          "assets-colorslightsunshapenoon":
            "var(--assets-colorslightsunshapenoon)",
          "assets-colorslightsunshapesunrise":
            "var(--assets-colorslightsunshapesunrise)",
          "assets-colorslightsunshapesunset":
            "var(--assets-colorslightsunshapesunset)",
          "assets-colorsmaterials-sfxdust":
            "var(--assets-colorsmaterials-sfxdust)",
          "assets-colorsmaterials-sfxfire-red":
            "var(--assets-colorsmaterials-sfxfire-red)",
          "assets-colorsmaterials-sfxfire-smoke":
            "var(--assets-colorsmaterials-sfxfire-smoke)",
          "assets-colorsmaterials-sfxfire-yellow":
            "var(--assets-colorsmaterials-sfxfire-yellow)",
          "assets-colorsmaterials-sfxsand":
            "var(--assets-colorsmaterials-sfxsand)",
          "assets-colorsmaterials-sfxsnow":
            "var(--assets-colorsmaterials-sfxsnow)",
          "assets-colorsmaterials-sfxstone":
            "var(--assets-colorsmaterials-sfxstone)",
          "assets-colorsmaterials-sfxstone-light":
            "var(--assets-colorsmaterials-sfxstone-light)",
          "UI-palette-colors-coin": "var(--UI-palette-colors-coin)",
          "UI-palette-colors-error": "var(--UI-palette-colors-error)",
          "UI-palette-colors-llama": "var(--UI-palette-colors-llama)",
          "UI-palette-neutral-on-color": "var(--UI-palette-neutral-on-color)",
          "UI-palette-neutral-on-inverse-surface":
            "var(--UI-palette-neutral-on-inverse-surface)",
          "UI-palette-neutral-on-inverse-surface-2":
            "var(--UI-palette-neutral-on-inverse-surface-2)",
          "UI-palette-neutral-on-surface": "var(--UI-palette-neutral-on-surface)",
          "UI-palette-neutral-on-surface-2":
            "var(--UI-palette-neutral-on-surface-2)",
          "UI-palette-surfaces-inverse-surface":
            "var(--UI-palette-surfaces-inverse-surface)",
          "UI-palette-surfaces-inverse-surface-trans-12":
            "var(--UI-palette-surfaces-inverse-surface-trans-12)",
          "UI-palette-surfaces-inverse-surface-trans-20":
            "var(--UI-palette-surfaces-inverse-surface-trans-20)",
          "UI-palette-surfaces-inverse-surface-trans-40":
            "var(--UI-palette-surfaces-inverse-surface-trans-40)",
          "UI-palette-surfaces-inverse-surface-trans-64":
            "var(--UI-palette-surfaces-inverse-surface-trans-64)",
          "UI-palette-surfaces-surface-FF":
            "var(--UI-palette-surfaces-surface-FF)",
          "UI-palette-surfaces-surface-trans-20":
            "var(--UI-palette-surfaces-surface-trans-20)",
          "x-2dsnow": "var(--x-2dsnow)",
        },
        fontFamily: {
          "body-large": "var(--body-large-font-family)",
          "body-medium": "var(--body-medium-font-family)",
          "body-small": "var(--body-small-font-family)",
          "headline-s": "var(--headline-s-font-family)",
          "label-large": "var(--label-large-font-family)",
          "label-XL": "var(--label-XL-font-family)",
          "label-XXL": "var(--label-XXL-font-family)",
        },
      },
    },
    plugins: [],
  };