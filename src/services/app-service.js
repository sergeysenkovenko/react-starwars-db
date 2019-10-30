export default class AppService {
    _apiBase = 'https://swapi.co/api'
    
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)
        return await res.json();
    }

    getPeoples = async () => {
        const peoples = await this.getResource(`/people/`)
        return peoples.results.map(this._transformPersonData)
    }

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}`)
        return this._transformPersonData(person);
    }

    getPlanets = async () => {
        const planets = await this.getResource(`/planets/`)
        return planets.results.map(this._transformPlanetData)
    }

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}`)
        return this._transformPlanetData(planet);
    }

    getStarships = async () => {
        const starships = await this.getResource(`/starships/`)
        return starships.results.map(this._transformStarshipData);
    }

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}`)
        return this._transformStarshipData(starship);
    }

    getFilm = async (id) => {
        const film = await this.getResource(`/films/${id}`)
        return this._transformFilmData(film)
    }

    _extractId = item => {
        const regExp = /\/([0-9]*)\/$/;
        return item.url.match(regExp)[1];
    }
    
    _transformFilmData = film => {
        return {
            id: this._extractId(film),
            title: film.title,
            episode: film.episode_id,
            director: film.director,
            release: film.release_date,
            producer: film.producer
        }
    }

    _transformPlanetData = planet => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
          }
    }

    _transformPersonData = person => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birth: person.birth_year,
            eyesColor: person.eye_color
          }
    }

    _transformStarshipData = starship => {
        return {
          id: this._extractId(starship),
          name: starship.name,
          model: starship.model,
          length: starship.length,
          crew: starship.crew,
          passengers: starship.passengers,
          cargoCapacity: starship.cargo_capacity
        }
      };
}