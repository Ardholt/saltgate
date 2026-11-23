# Saltgate

Tides, sluices, and salt.

Saltgate is a 3D tide-management game set on a seeded salt marsh. The sea rises and falls on a lunar clock with spring and neap tides, and the water really flows: you dig channels and open sluice gates to fill salt pans with brine, set fish weirs and oyster beds, and later build tide mills and causeways. A trader lands at high water to buy your salt, fish and oysters, and the season goal is to earn 1300 shillings by Day 15 while storms and surges test your works.

**Live demo:** https://ardholt.github.io/saltgate/

## Run locally

Requires Node.js 20.19+ (or 22.12+) and npm.

```sh
npm install
npm run dev       # development server with hot reload
npm run build     # production build into dist/
npm run preview   # serve the production build
```

The unit tests use Node's built-in test runner: `node --test tests/`.

## Browser requirements

A current desktop browser with WebGL 2 (Chrome, Edge, Firefox or Safari). Mouse and keyboard recommended. Progress is saved in the browser's localStorage; once loaded over HTTPS the game also works offline via a service worker.

## License

MIT. See [LICENSE](LICENSE). The bundled Alegreya and Alegreya Sans fonts are under the SIL Open Font License (see `public/fonts/`).
