import React, {
    Component,
    PropTypes,
} from 'react';

import TodosList from './TodosList';
import CreateTodo from './CreateTodo';

const todos = [
    {
        task: 'make React tutorial',
        isCompleted: false,
    },
    {
        task: 'eat dinner',
        isCompleted: true,
    },
];

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos,
        };
    }

    createTask = (task) => {
        this.state.todos.push({
            task,
            isCompleted: false,
        });
        this.setState({todos: this.state.todos});
    };

    render() {
        return (
            <div>
                <CreateTodo createTask={this.createTask} />
                <TodosList todos={this.state.todos} />
            </div>
        );
    }
}

Todo.propTypes    = {};
Todo.defaultProps = {};

export default Todo;
