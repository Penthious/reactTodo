import React, {
    Component,
    PropTypes,
} from 'react';

class CreateTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
        }
        console.log('1',this.props);
    }

    handleCreate = (e) => {
        e.preventDefault();
        const createInput   = this.refs.createInput;
        const task          = createInput.value;
        const validateInput = this.validateInput(task);

        if (validateInput) {
            this.setState({error: validateInput});
            return;
        }
        this.setState({error: null});
        this.props.createTask(task);
        this.refs.createInput.value = '';
    };

    validateInput = (task) => {
        if (!task) {
            return 'Please enter a task';
        } else if (this.props.todos.find(todo => todo.task === task)) {
            return 'Task already exist';
        }
        else {
            return null;
        }
    }

    renderError() {
        if (!this.state.error) {
            return null;
        }

        return <div style={{color: 'red'}}> {this.state.error}</div>
    }

    render() {
        return (
            <form onSubmit={this.handleCreate}>
                <input type="text" placeholder="What do I need to do?" ref="createInput" />
                <button>Create</button>
                {this.renderError()}
            </form>
        );
    }
}

CreateTodo.propTypes    = {};
CreateTodo.defaultProps = {};

export default CreateTodo;
