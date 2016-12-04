import React, {
    Component,
    PropTypes,
} from 'react';

class TodosListHeader extends Component {
    render() {
        return (
            <thead>
                <tr>Task</tr>
                <tr>Action</tr>
            </thead>
        );
    }
}

TodosListHeader.propTypes    = {};
TodosListHeader.defaultProps = {};

export default TodosListHeader;
