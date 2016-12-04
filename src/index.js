import React from 'react';
import ReactDOM from 'react-dom';

import Todo from './components/Todo';

export default class App extends React.Component {
    render() {
        return (
            <Todo />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));