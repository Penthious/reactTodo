import React, {
    Component,
    PropTypes,
} from 'react';

class CreateTodo extends Component {
    handleCreate = (e) => {
        e.preventDefault();
        this.props.createTask(this.refs.createInput.value);
        this.refs.createInput.value = '';
    };

    render() {
        return (
            <form onSubmit={this.handleCreate}>
                <input type="text" placeholder="What do I need to do?" ref="createInput" />
                <button>Create</button>
            </form>
        );
    }
}

CreateTodo.propTypes    = {};
CreateTodo.defaultProps = {};

export default CreateTodo;
