import React, { Component } from 'react';
import FilmView from './film-view';
import Spinner from '../spinner';
import ErrorMessage from '../error-message';
import './random-film.css';

export default class RandomFilm extends Component {

  static defaultProps = {
    updateInterval: 10000
  }

  state = {
    film: {},
    loading: true
  }

  async updateFilm () {
    const id = Math.floor((Math.random() * 7) + 1);
    try{
      const film = await this.props.getItem(id)
      this.setState({
        film,
        loading: false,
        error:false
      });
    } catch(err) {
      this.setState({
        loading: false,
        error: true
      });
    }
  }

  componentDidMount () {
    const { updateInterval } = this.props;
    this.updateFilm()
    this.interval = setInterval(() => this.updateFilm(), updateInterval)
  }
  
  componentWillUnmount () {
    clearInterval(this.interval);
  }

  render() {
    const { film, loading, error } = this.state;
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = (!loading && !errorMessage) ? <FilmView film={film}/> : null;
    return (
      <div className="random-film jumbotron">
        { spinner }
        { errorMessage }
        { content }
      </div>
    );
  }
}
