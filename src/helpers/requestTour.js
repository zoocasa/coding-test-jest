async function requestTour(listingId) {
  try {
    const response = await fetch("http://localhost:3000/tours", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ listingId: listingId }),
    });

    return response.ok;
  } catch (e) {
    return false;
  }
}

export default requestTour;
