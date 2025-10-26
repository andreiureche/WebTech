async function getPlanesOverCountry(country) {
    try {
        const responseCountry = await fetch(`https://nominatim.openstreetmap.org/search?country=${country}&format=json`);
        const countryData = await responseCountry.json();
        const bounds = {
            minLatitude: countryData[0].boundingbox[0],
            maxLatitude: countryData[0].boundingbox[1],
            minLongitude: countryData[0].boundingbox[2],
            maxLongitude: countryData[0].boundingbox[3]
        };
        const url = `https://opensky-network.org/api/states/all?lamin=${bounds.minLatitude}&lomin=${bounds.minLongitude}&lamax=${bounds.maxLatitude}&lomax=${bounds.maxLongitude}`;
        const responsePlanes = await fetch(url);
        const dataPlanes = await responsePlanes.json();
        if (!dataPlanes.states) {
            console.log(`Nu există avioane deasupra ${country} în acest moment.`);
            return [];
        }
        const planes = dataPlanes.states.map(state => ({
            flight: state[1] || "N/A",
            origin_country: state[2],
            longitude: state[5],
            latitude: state[6],
            altitude: state[7],
            velocity: state[9]
        }));

        console.log(`Avioane deasupra ${country} (${planes.length}):`);
        console.log(planes.slice(0, 5));
        return planes;

    } catch (error) {
        console.error("Eroare:", error.message);
        return [];
    }
}

getPlanesOverCountry("Romania");
