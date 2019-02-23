import React from 'react';

import Envelope from './components/envelope/envelope';

import './app.scss';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="app__content">
                    <Envelope />
                </div>
            </div>
        );
    }
}

export default App;
