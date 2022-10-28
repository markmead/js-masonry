import { useMasonry } from "./useMasonry";

export default function () {
  const masonryGrids = [...document.querySelectorAll("[data-masonry]")];

  masonryGrids.forEach(function (masonryGrid) {
    buildMasonry(masonryGrid);
  });
}

function buildMasonry(masonryGrid) {
  const masonryOptions = masonryGrid.getAttribute("data-masonry");

  let pollDuration;
  let waitDuration;

  if (masonryOptions) {
    if (masonryOptions.includes("pollDuration:")) {
      pollDuration = getOption("pollDuration:", masonryOptions);
    }

    if (masonryOptions.includes("waitDuration:")) {
      waitDuration = getOption("waitDuration:", masonryOptions);
    }
  }

  waitDuration
    ? setTimeout(() => useMasonry(masonryGrid), waitDuration)
    : useMasonry(masonryGrid);

  pollDuration && setInterval(() => useMasonry(masonryGrid), pollDuration);

  window.addEventListener("resize", () => useMasonry(masonryGrid));
  window.addEventListener("reload:masonry", () => useMasonry(masonryGrid));
}

function getOption(optionId, baseOptions) {
  let tempMasonryOptions = baseOptions.replace(optionId, "*");

  tempMasonryOptions = tempMasonryOptions.slice(
    tempMasonryOptions.indexOf("*") + 1,
    tempMasonryOptions.lastIndexOf("}")
  );

  return Number(tempMasonryOptions.split(",")[0]);
}
