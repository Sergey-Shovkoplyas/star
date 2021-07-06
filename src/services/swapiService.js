export default  class SwapiService {
    _apiBase = `https://swapi.dev/api`;

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }

    // ------------------------- People ----------------------------
    async getAllPeople() {
        const res = await this.getResource(`/people/`)
        return res.results;
    }

    async getPerson(id) {
        return this.getResource(`/people/${id}/`);
    }

    // ------------------------- Planets ----------------------------
    async getAllPlanets() {
        const res = await this.getResource(`/planets/`)
        return res.results;
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    // ------------------------- Starships ----------------------------
    async getAllStarships() {
        const res = await this.getResource(`/starships/`)
        return res.results;
    }

    async getStarship(id) {
        return this.getResource(`/starships/${id}/`);
    }

    _transformPlanet(planet) {
        const idRegExp = /\/([0-9]*)\/$/;
        const id = planet.url.match(idRegExp)[1];

        return {
            id,
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }
}

// -----------------------------------------------------------------------

// fetch('https://swapi.dev/api/people/1')
//     .then((res) => {
//         return res.json();
//     })
//     .then((body) => {
//         console.log(body);
//     });

// ------------------------------------------------------------------

// const getResource = async (url) => {
//     try {
//         const res = await fetch(url);
//
//         if (!res.ok) {
//             throw new Error(`Could not fetch ${url}, received ${res.status}`);
//         }
//
//         const body = await res.json();
//
//         return body;
//     } catch (err) {
//         console.error('could not fetch!!!!!!!', err);
//     }
// }
//
// getResource('https://swapi.dev/api/people/1/')
//     .then((body) => {
//         console.log(body);
//     })
