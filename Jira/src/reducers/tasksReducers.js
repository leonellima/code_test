export default (state = [], action) => {
	switch (action.type) {
		case 'GET_TASKS':
			// Retorna nueva lista de tareas
			// [{'id':1, ..., 'status':'0'}, {'id':2, ..., 'status':'1'}, ... ]
			return action.payload;
		case 'DELETE_TASK':
		  // Retorna lista sin tarea cuyo id es de action.payload (task)
			return state.filter(e => e.id !== action.payload);
		case 'UPDATE_TASK':
		  // Retorna lista con tarea actualizada
			return state.map(item => item.id === action.payload.id ? action.payload: item);
		case 'ADD_TASK':
		  // Agrega tarea nueva a la lista
			return [...state, action.payload];
		default:
			return state;
	}
}