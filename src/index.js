class SwapiService {
    _apiBase = `https://swapi.dev/api`;

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();;
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
        return this.getResource(`/planets/${id}/`);
    }

    // ------------------------- Starships ----------------------------
    async getAllStarships() {
        const res = await this.getResource(`/starships/`)
        return res.results;
    }

    async getStarship(id) {
        return this.getResource(`/starships/${id}/`);
    }
}





const swapi = new SwapiService();

swapi.getStarship(10)
    .then((body) => {
        console.log(body);
    })
    .catch((err) => {
        console.log(err);
    })

console.log("some comm");

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

console.log("hello!!!");

let a = 0;

while (a <= 10) {
    console.log(a);
    a++;
}
