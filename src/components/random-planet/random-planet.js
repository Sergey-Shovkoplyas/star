import React from 'react';

import SwapiService from "../../services/swapiService";

import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

import './random-planet.css';

class RandomPlanet extends React.Component {
    SwapiService = new SwapiService;

    state = {
        planet: {},
        loading: true,
        error: false
    }

    constructor(props) {
        super(props);

        this._onPlanetLoaded = this._onPlanetLoaded.bind(this);
        this._onError = this._onError.bind(this);
        this._updatePlanet();
    }

    _isLoading() {
        return this.state.loading
    }

    _isError() {
        return this.state.error
    }

    _hasData() {
        return !this._isLoading() && !this._isError();
    }

    _onPlanetLoaded(planet) {
        this.setState({
            planet,
            loading: false
        });
    }

    _onError(err) {
        this.setState({
            error: true,
            loading: false
        })
        console.log(err)
    }


    _updatePlanet() {
        const id = Math.floor(Math.random()*25) + 2;
        this.SwapiService
            .getPlanet(id)
            .then(this._onPlanetLoaded)
            .catch(this._onError);
    }

    render() {
        const { planet: {id, name, population, rotationPeriod, diameter} } = this.state;

        return (
            <div className="random-planet">
                {this._isError() && (
                    <ErrorIndicator />
                )}

                {this._isLoading() && (
                    <Spinner />
                )}

                {this._hasData() && (
                    <div className="row">
                        <div className="col-3">
                            <img
                                className="random-planet__preview"
                                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                                alt="random-planet"
                            />
                        </div>

                        <div className="col-9">
                            <div className="random-planet__description">
                                <h2 className="description__title">
                                    {name}
                                </h2>

                                <ul className="description__items list-group">
                                    <li className="item list-group-item">
                                        Population: {population}
                                    </li>

                                    <li className="item list-group-item">
                                        Rotation Period: {rotationPeriod}
                                    </li>

                                    <li className="item list-group-item">
                                        Diameter: {diameter}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default RandomPlanet;
