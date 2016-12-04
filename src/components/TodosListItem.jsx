import React, {
    Component,
    PropTypes,
} from 'react';

class TodosListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
        };
    }

    onEditClick = () => {
        this.setState({isEditing: true});
    };

    onCancelClick = () => {
        this.setState({isEditing: false});
    };

    renderActionSection() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button >Save</button>
                    <button onClick={this.onCancelClick}>Cancel</button>
                </td>
            );
        }
        return (
            <td>
                <button onClick={this.onEditClick}>Edit</button>
                <button>Delete</button>
            </td>
        );
    }

    render() {
        return (
            <tr>
                <td>{this.props.task}</td>
                {this.renderActionSection()}
            </tr>
        );
    }
}

TodosListItem.propTypes    = {};
TodosListItem.defaultProps = {};

export default TodosListItem;
