import {TasksStateType} from "../../App";
import {AddTodoListActionType, RemoveTodoListActionType} from "./todolists-reducer";
import {v1} from "uuid";
import {TaskPriorities, TaskStatuses, TaskType} from "../api/todolists-api";
import {Dispatch} from "react";
import {tasksListsAPI} from "../api/tasks-api";


type ActionTypes = RemoveTaskActionType | AddTaskActionType | ChangeFilterStatusType |
    ChangeTaskTitleType | AddTodoListActionType | RemoveTodoListActionType | loadTasksActionType

type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    todoListId: string,
    taskId: string
}

type AddTaskActionType = {
    type: 'ADD-TASK'
    title: string
    todoListId: string
}

type ChangeFilterStatusType = {
    type: 'CHANGE-FILTER-STATUS'
    taskId: string
    todoListId: string
    status: TaskStatuses
}

type ChangeTaskTitleType = {
    type: "CHANGE-TASK-TITLE"
    taskId: string
    todoListId: string
    title: string
}

const initialState: TasksStateType = {
    // [todoListID1]: [
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "TypeScript", isDone: false},
    //     {id: v1(), title: "REACT", isDone: true},
    //     {id: v1(), title: "REDUX", isDone: true}],
    // [todoListID2]: [
    //     {id: v1(), title: "Terminator", isDone: true},
    //     {id: v1(), title: "XXX", isDone: true},
    //     {id: v1(), title: "Jentelmens of fortune", isDone: false},
    // ]
}


export const tasksReducer = (state: TasksStateType = initialState, action: ActionTypes): TasksStateType => {
    switch (action.type) {
        case "LOAD-TASKS": {
            const stateCopy = {...state}
            stateCopy[action.todoListId] = action.arrayTasks
            return stateCopy
        }

        case "REMOVE-TASK": {
            const stateCopy = {...state}
            const tasks = state[action.todoListId]
            stateCopy[action.todoListId] = tasks.filter(t => t.id !== action.taskId)
            return stateCopy
        }
        case "ADD-TASK": {
            const stateCopy = {...state}
            const newTask = {
                id: v1(), title: action.title,
                status: TaskStatuses.New,
                todoListId: action.todoListId, description: '',
                startDate: '', deadline: '', addedDate: '',
                order: 0, priority: TaskPriorities.Low
            }
            const tasks = stateCopy[action.todoListId]
            stateCopy[action.todoListId] = [newTask, ...tasks]
            return {...stateCopy}
        }
        case "CHANGE-FILTER-STATUS": {
            let tasks = state[action.todoListId]
            state[action.todoListId] = tasks.map(t =>
                t.id === action.taskId ? {...t, isDone: action.status} : t)
            return ({...state})
        }
        case "CHANGE-TASK-TITLE": {
            let tasks = state[action.todoListId]
            state[action.todoListId] = tasks.map(t =>
                t.title === action.title ? {...t, title: action.title} : t)

            return ({...state})
        }
        case "ADD-TODOLIST": {
            const stateCopy = {...state}
            stateCopy[action.todolistId] = []
            return stateCopy
        }
        case "REMOVE-TODOLIST": {
            const stateCopy = {...state}
            delete stateCopy[action.id]
            return stateCopy
        }
        default:
            return state
    }
}

export type loadTasksActionType = ReturnType<typeof getTasksAC>

export const getTasksAC = (todoListId: string, arrayTasks: TaskType[]) => {
    return {type: 'LOAD-TASKS', todoListId, arrayTasks} as const
}

export const removeTaskAC = (taskId: string, todoListId: string): RemoveTaskActionType => {
    return {
        type: "REMOVE-TASK",
        taskId: taskId,
        todoListId: todoListId
    }
}
export const addTaskAC = (taskTitle: string, todoListId: string): AddTaskActionType => {
    return {
        type: "ADD-TASK",
        title: taskTitle,
        todoListId: todoListId
    }
}

export const changeStatusCheckboxAC = (taskId: string, status: TaskStatuses, todoListId: string): ChangeFilterStatusType => {
    return {
        type: "CHANGE-FILTER-STATUS",
        status,
        todoListId,
        taskId,
    }
}

export const changeTaskTitleAC = (taskId: string, title: string, todoListId: string): ChangeTaskTitleType => {
    return {
        type: "CHANGE-TASK-TITLE",
        title,
        todoListId,
        taskId,
    }
}


export const loadTasksTC = (todoListId: string) => {
    console.log("1")
    return (dispatch: Dispatch<ActionTypes>) => {
        tasksListsAPI.getTaskLists(todoListId)
            .then((res) => {
                dispatch(getTasksAC(todoListId, res.data.items))
            })
    }
}