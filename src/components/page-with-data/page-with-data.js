import React from 'react';
import Page from '../page';
import RandomFilm from '../random-film'
import AppService from '../../services/app-service';

const appService = new AppService();

const { getPerson, 
        getPeoples, 
        getPlanet, 
        getPlanets, 
        getStarship, 
        getStarships,
        getFilm } = appService;

export const Film = () => {
    return(
        <RandomFilm getItem={ getFilm }
        />
    )
}

export const PeoplePage = () => {
    return (
        <Page getList={ getPeoples }
              getItem={ getPerson }
              viewType={ "person" }
        />
    );
}

export const PlanetsPage = () => {
    return (
        <Page getList={ getPlanets }
              getItem={ getPlanet }
              viewType={ "planet" }
        />
    );
}

export const StarshipsPage = () => {
    return (
        <Page getList={ getStarships }
              getItem={ getStarship }
              viewType={ "starship" }
        />
    );
}