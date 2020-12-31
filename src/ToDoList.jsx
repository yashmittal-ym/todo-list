import React from 'react'

const ToDoList = (props) => {
    const fun = () => {
        console.log("deleted");
    }
    return (
        <>
            <div className="todo_style">
                <i
                    className="fa fa-times"
                    aria-hidden="true"
                    onClick={() => { props.del(props.id); }}
                />
                <li className="list_style">{props.text}</li>
            </div>
        </>
    );
};
export default ToDoList;