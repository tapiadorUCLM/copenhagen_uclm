import { describe, expect, it, beforeEach } from "@jest/globals";

import {
  initPopularSearches,
  normalizeSearchTerms,
  renderPopularSearches,
} from "./popularSearches";

describe("popularSearches", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  it("normalizes comma-separated search terms", () => {
    expect(normalizeSearchTerms("  clave 1, clave 2 ,, clave 3 ")).toEqual([
      "clave 1",
      "clave 2",
      "clave 3",
    ]);
  });

  it("renders one list item per valid search term", () => {
    document.body.innerHTML = `
      <div class="popular-searches js-popular-searches" data-popular-searches="fechas de la pau, resultados de la pau, matrícula universitaria" hidden>
        <ul class="popular-searches__list js-popular-searches-list"></ul>
      </div>
    `;

    const container = document.querySelector(".js-popular-searches");
    renderPopularSearches(container);

    const items = [...container.querySelectorAll(".popular-searches__item")];
    const links = [...container.querySelectorAll(".popular-searches__pill")];

    expect(items).toHaveLength(3);
    expect(links).toHaveLength(3);
    expect(links[0]).toHaveTextContent("fechas de la pau");
    expect(links[0]).toHaveAttribute(
      "href",
      "https://soporte.uclm.es/hc/es/search?query=fechas%20de%20la%20pau"
    );
    expect(container.hidden).toBe(false);
  });

  it("rebuilds the list without duplicating items", () => {
    document.body.innerHTML = `
      <div class="popular-searches js-popular-searches" data-popular-searches="uno, dos" hidden>
        <ul class="popular-searches__list js-popular-searches-list">
          <li>anterior</li>
        </ul>
      </div>
    `;

    const container = document.querySelector(".js-popular-searches");
    renderPopularSearches(container);
    renderPopularSearches(container);

    const items = [...container.querySelectorAll(".popular-searches__item")];

    expect(items).toHaveLength(2);
    expect(container).not.toHaveTextContent("anterior");
  });

  it("initializes rendering for matching containers", () => {
    document.body.innerHTML = `
      <div
        class="popular-searches js-popular-searches"
        data-popular-searches="calendario académico, contacto universidad"
        hidden
      >
        <ul class="popular-searches__list js-popular-searches-list"></ul>
      </div>
    `;

    initPopularSearches();

    const items = [...document.querySelectorAll(".popular-searches__item")];
    expect(items).toHaveLength(2);
  });
});
