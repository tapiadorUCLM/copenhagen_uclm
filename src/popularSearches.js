const popularSearchesSelector = ".js-popular-searches";
const popularSearchesListSelector = ".js-popular-searches-list";
const searchUrlBase = "https://soporte.uclm.es/hc/es/search?query=";

function normalizeSearchTerms(rawTerms) {
  return rawTerms
    .split(",")
    .map((term) => term.trim())
    .filter((term) => term.length > 0);
}

function buildPillElement(term) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");

  listItem.classList.add("popular-searches__item");
  link.classList.add("popular-searches__pill");
  link.href = `${searchUrlBase}${encodeURIComponent(term)}`;
  link.textContent = term;

  listItem.appendChild(link);
  return listItem;
}

function renderPopularSearches(container) {
  const rawTerms = container.getAttribute("data-popular-searches") || "";
  const terms = normalizeSearchTerms(rawTerms);
  const list = container.querySelector(popularSearchesListSelector);

  if (!terms.length || !list) {
    return;
  }

  terms.forEach((term) => {
    list.appendChild(buildPillElement(term));
  });

  container.hidden = false;
}

window.addEventListener("DOMContentLoaded", () => {
  const containers = [...document.querySelectorAll(popularSearchesSelector)];
  containers.forEach((container) => {
    renderPopularSearches(container);
  });
});
