async function searchByZip(zip) {
  const response = await fetch(
    `https://autobodyshopnear.com/api/v1/public/shops/by-zip?zip=${zip}`
  );

  const data = await response.json();
  console.log(data);
}

async function searchByCity(city, state) {
  const response = await fetch(
    `https://autobodyshopnear.com/api/v1/public/shops/by-city?city=${encodeURIComponent(city)}&state=${state}&limit=20&offset=0`
  );

  const data = await response.json();
  console.log(data);
}

searchByZip("20740");
searchByCity("Houston", "TX");
