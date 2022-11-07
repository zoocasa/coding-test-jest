const SortFilterMode = Object.freeze({
  default: 'default',
  priceAscending: 'priceAscending',
  priceDescending: 'priceDescending',
  filterShowForSale: 'filterShowForSale',
  filterShowSold: 'filterShowSold',
});

function sortFilterListings(listings, sortFilterMode) {
  if (listings == null) {
    return null;
  }

  if (sortFilterMode === SortFilterMode.default) {
    return listings;
  }

  if (sortFilterMode === SortFilterMode.priceAscending) {
    return [...listings].sort((a, b) => {
      return a.price - b.price;
    });
  }

  if (sortFilterMode === SortFilterMode.priceDescending) {
    return [...listings].sort((a, b) => {
      return b.price - a.price;
    });
  }

  if (sortFilterMode === SortFilterMode.filterShowForSale) {
    return listings.filter((listing) => (listing.status === "For Sale"));
  }

  if (sortFilterMode === SortFilterMode.filterShowSold) {
    return listings.filter((listing) => (listing.status === "Sold"));
  }

  throw new Error("Unsupported filter mode: " + sortFilterMode);
}

export { SortFilterMode, sortFilterListings };
