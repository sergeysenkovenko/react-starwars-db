import React from 'react';

const FilmView = ({ film }) => {
    const {id, title, episode, director, release, producer} = film;
    const imgSrc = id ? `https://starwars-visualguide.com/assets/img/films/${id}.jpg` : ''
    return(
        <React.Fragment>
            <div className="film-image">
        <img src={imgSrc} alt={title}/>
        </div>
        <div className="film__content">
          <h4>{title}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Episode:</span>
              <span>{episode}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Director:</span>
              <span>{director}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Producer:</span>
              <span>{producer}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Release Date:</span>
              <span>{release}</span>
            </li>
          </ul>
        </div>
        </React.Fragment>
    );
}

export default FilmView;
