import React from 'react'

const todo = (props) => {
    return (
        <div>
            <li className="list-group-item LiStyle">
                {props.todo}
            </li>
        </div>
    );
}

export default todo;