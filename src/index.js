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
      let tempMasonryOptions = masonryOptions.replace("pollDuration:", "*");

      tempMasonryOptions = tempMasonryOptions.slice(
        tempMasonryOptions.indexOf("*") + 1,
        tempMasonryOptions.lastIndexOf("}")
      );

      pollDuration = Number(tempMasonryOptions.split(",")[0]);
    }

    if (masonryOptions.includes("waitDuration:")) {
      let tempMasonryOptions = masonryOptions.replace("waitDuration:", "*");

      tempMasonryOptions = tempMasonryOptions.slice(
        tempMasonryOptions.indexOf("*") + 1,
        tempMasonryOptions.lastIndexOf("}")
      );

      waitDuration = Number(tempMasonryOptions.split(",")[0]);
    }
  }

  waitDuration
    ? setTimeout(() => useMasonry(masonryGrid), waitDuration)
    : useMasonry(masonryGrid);

  pollDuration && setInterval(() => useMasonry(masonryGrid), pollDuration);

  window.addEventListener("resize", () => useMasonry(masonryGrid));
  window.addEventListener("reload:masonry", () => useMasonry(masonryGrid));
}
