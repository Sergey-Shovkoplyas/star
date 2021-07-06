import React from 'react';

import RandomPlanet from "../random-planet/random-planet";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="container">
                    <RandomPlanet />
                </div>
            </div>
        );
    }
}

export default App;
