import React, {useCallback, useEffect} from 'react';
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Task} from "./Task";
import {Delete} from "@mui/icons-material";
import {Button, IconButton, Link} from "@mui/material";
import {TaskStatuses, TaskType} from "./api/todolists-api";
import {FilterValuesType} from "./state/todolists-reducer";
import {loadTasksTC} from "./state/tasks-reducer";
import {useDispatch} from "react-redux";


export type TodoListType = {
    todoListID: string
    todoListTitle: string
    tasks: TaskType[]
    removeTask: (idTasks: string, todolistID: string) => void
    changeFilter: (value: FilterValuesType, todoListID: string) => void
    addTask: (title: string, todolistID: string) => void
    changeStatusCheckbox: (tasksID: string, status: TaskStatuses, todoListID: string) => void
    changeTaskTitle: (id: string, newValue: string, todoListID: string) => void
    changeTodoListTitle: (todoListID: string, newTodoListTitle: string) => void
    filter: FilterValuesType
    removeTodoList: (todoListID: string) => void

}

export const TodoList = React.memo(function (props: TodoListType) {

    let dispatch = useDispatch()

    useEffect( () => {
        dispatch(loadTasksTC(props.todoListID))
    })


    const onAllClickHandler = useCallback(() => {
        props.changeFilter("all", props.todoListID)
    }, [props.changeFilter, props.todoListID])
    const onCompletedClickHandler = useCallback(() => {
        props.changeFilter("completed", props.todoListID)
    }, [props.changeFilter, props.todoListID])
    const onActiveClickHandler = useCallback(() => {
        props.changeFilter("active", props.todoListID)
    }, [props.changeFilter, props.todoListID])

    const removeTodoListHandler = () => {

        props.removeTodoList(props.todoListID)
    }

    // изначальная ц-ция просит два аргумента, так можно от него избавиться
    const addTaskForAddItem = useCallback((title: string) => {
        props.addTask(title, props.todoListID)
    }, [props.addTask, props.todoListID])

    const changeTodoListTitleHandler = useCallback((newTodoListTitle: string) => {
        props.changeTodoListTitle(props.todoListID, newTodoListTitle)
    }, [props.changeTodoListTitle, props.todoListID])

    let tasksForTodolist = props.tasks

    if (props.filter === "completed") {
        tasksForTodolist = props.tasks.filter(t => t.status === TaskStatuses.New)
    }
    if (props.filter === "active") {
        tasksForTodolist = props.tasks.filter(t => t.status === TaskStatuses.Completed)
    }

    return (
        <div>
            <Link>
                <h3>
                    <EditableSpan
                        title={props.todoListTitle}
                        onChange={changeTodoListTitleHandler}/>
                    <IconButton
                        onClick={removeTodoListHandler}>
                        <Delete/>
                    </IconButton>
                </h3>
            </Link>
            <AddItemForm
                addItem={addTaskForAddItem}/>
            <ul>
                {
                    tasksForTodolist && tasksForTodolist.map(t => <Task
                        key={t.id}
                        todoListID={props.todoListID}
                        removeTask={props.removeTask}
                        changeStatusCheckbox={props.changeStatusCheckbox}
                        changeTaskTitle={props.changeTaskTitle}
                        t={t}
                    />)
                }
            </ul>
            <div>
                <Button
                    variant={props.filter === "all" ? "outlined" : "text"}
                    onClick={onAllClickHandler}>
                    All
                </Button>
                <Button
                    color={'success'}
                    variant={props.filter === "active" ? "outlined" : "text"}
                    // className={props.filter === "active" ? "active-filter" : ""}
                    onClick={onActiveClickHandler}>
                    Active
                </Button>
                <Button
                    color={'warning'}
                    variant={props.filter === "active" ? "outlined" : "text"}
                    onClick={onCompletedClickHandler}>
                    Completed
                </Button>
            </div>
        </div>
    );
});

export default TodoList




