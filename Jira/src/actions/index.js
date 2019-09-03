import { TaskData } from '../api';
import { getData } from '../utils/AsyncUtils';

// ----- ACCIONES PARA LISTAR, AGREGAR, ACTUALIZAR
// ----- Y ELIMINAR TAREAS
export const getTasksFromAPI = (api) => async (dispatch) => {
	const response = await api.getTasks();
	dispatch ({
		type: "GET_TASKS",
		payload: response
	});
};

export const addNewTask = (task) => {
	return {
		type: "ADD_TASK",
		payload: task
	}
};

export const updateTask = (task) => {
	return {
		type: "UPDATE_TASK",
		payload: task
	}
};

export const removeTask = (task_id) => {
	return {
		type: "DELETE_TASK",
		payload: task_id
	}
};
