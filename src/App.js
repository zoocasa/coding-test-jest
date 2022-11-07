import "./App.css";
import { useState, useEffect } from "react";
import fetchListings from "./helpers/fetchListings";
import { SortFilterMode, sortFilterListings } from "./helpers/sortFilterListings";
import requestTour from "./helpers/requestTour";

function App() {
  const [listings] = useState(fetchListings());
  const [selectedListing, setSelectedListing] = useState(null);
  const [sortFilterMode, setSortFilterMode] = useState(SortFilterMode.default);

  useEffect(() => {
    if (listings && !selectedListing) {
        setSelectedListing(listings[0])
    }
  }, [listings, selectedListing]);

  const sortedFilteredListings = sortFilterListings(listings, sortFilterMode);

  return (
    <div className="App">
      <h1>Welcome to the Zoocasa coding challenge!</h1>
      <div>
        <span className="label">Sort or filter listings:</span>
        <select value={sortFilterMode} onChange={(event) => setSortFilterMode(event.target.value)}>
          <option value={SortFilterMode.default}>Default</option>
          <option value={SortFilterMode.priceAscending}>Sort by price ascending</option>
          <option value={SortFilterMode.priceDescending}>Sort by price descending</option>
          <option value={SortFilterMode.filterShowForSale}>Only show for sale</option>
          <option value={SortFilterMode.filterShowSold}>Only show sold</option>
        </select>
      </div>
      <div className="content" data-testid="content">
        <div className="listings">
          {sortedFilteredListings ? (
            <Listings listings={sortedFilteredListings} selectedListing={selectedListing} setSelectedListing={setSelectedListing} />
          ) : (
            <p>No Listings available</p>
          )}
        </div>
        <div className="listing-details">{selectedListing ? (
            <ListingDetails listing={selectedListing} />
        ) : (
            <p>Click a listing to continue</p>
        )}</div>
      </div>
    </div>
  );
}

function Listings(props) {
  const listings = props.listings;
  const selectedListing = props.selectedListing;
  const setSelectedListing = props.setSelectedListing;

  return (
    <ul>
      {listings.map((listing, index) => (
        <li key={index} className={selectedListing && selectedListing.id === listing.id ? 'selected' : ''}>
          <img
            src={listing.imageUrl}
            className="listing-image"
            alt="A property for sale"
            onClick={() => setSelectedListing(listings[index])}
          />
        </li>
      ))}
    </ul>
  );
}

function ListingDetails(props) {
  const listing = props.listing;

  async function handleTourRequest() {
    const success = await requestTour(listing.id);

    if (success) {
      alert("An Agent will be in touch with you shortly to arrange a tour of this property");
    } else {
      alert("Whoops! Something went wrong");
    }
  }

  return (
    <>
      <img
        src={listing.imageUrl}
        className="listing-image"
        alt="A property for sale"
      />
      <div>
        <span className="label">Address:</span>
        <span className="value">{listing.address}</span>
      </div>
      <div>
        <span className="label">Price:</span>
        <span className="value">{listing.price}</span>
      </div>
      <div>
        <span className="label">Status:</span>
        <span className="value">{listing.status}</span>
      </div>
      <button onClick={() => handleTourRequest()}>Take a tour</button>
    </>
  );
}

export { App, Listings, ListingDetails as Listing };
