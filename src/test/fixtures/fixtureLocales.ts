import { rawLocales } from "./data";

const fixtureLocales = rawLocales.map((l) => ({
  name: l.name,
}));

export { fixtureLocales };
