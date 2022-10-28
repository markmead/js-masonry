export function useMasonry(masonryGrid) {
  const gridGap = parseFloat(getComputedStyle(masonryGrid).gap);
  const gridCols =
    getComputedStyle(masonryGrid).gridTemplateRows.split(" ").length;
  const gridItems = [...masonryGrid.childNodes].filter(
    (gridItem) => gridItem.nodeType === 1
  );
  const perChunk = Math.round(gridItems.length / gridCols);

  gridItems.forEach((gridItem) => gridItem.style.removeProperty("margin-top"));

  if (perChunk === 1) {
    return;
  }

  gridItems.forEach(function (gridItem, itemIndex) {
    const previousItem = gridItems[itemIndex - perChunk];

    if (!previousItem) {
      return;
    }

    const currentItemTop = gridItem.getBoundingClientRect().top;
    const previousItemBottom = previousItem.getBoundingClientRect().bottom;
    const spaceBetween = currentItemTop - previousItemBottom;

    if (spaceBetween !== gridGap) {
      gridItem.style.marginTop = `-${spaceBetween - gridGap}px`;
    }
  });
}
