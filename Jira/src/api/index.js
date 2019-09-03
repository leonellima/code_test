import { API_URLS } from '../constants';

export class TaskData {
  constructor(token=""){
    this.token = token;
    this.tasks = [];
    this.API_URLS = API_URLS
  }

  getTasks = () => {
    return fetch(this.API_URLS.URL_BASE + this.API_URLS.ROUTE_TASKS, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + this.token
      }
    })
    .then(Response =>{ 
        return Response.json();
    })
  }

  addTask = (task) => {
    const body = {
      title: task.title,
      description: task.description,
      status: task.status
    };

    return fetch(this.API_URLS.URL_BASE + this.API_URLS.ROUTE_TASKS, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + this.token
      },
      body: JSON.stringify(body)
    })
    .then(Response => { 
        return Response.json();
    })
  }

  updateTask = (task) => {
    const body = {
      title: task.title,
      description: task.description,
      status: task.status
    };

    return fetch(this.API_URLS.URL_BASE + this.API_URLS.ROUTE_TASKS + task.id + "/", {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + this.token
      },
      body: JSON.stringify(body)
    })
    .then(Response => { 
        return Response.json();
    })
  }

  destroyTask = (id_task) => {
    return fetch(this.API_URLS.URL_BASE + this.API_URLS.ROUTE_TASKS + id_task+ "/", {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + this.token
      }
    })
    .then(Response => { 
        console.log("RESPONSE", Response);
    })
  }
}

export class UserData {
  constructor(){
    this.token = "";
    this.user = null;
    this.API_URLS = API_URLS;
  }

  setToken(token){
    this.token = token;
  }

  getToken(username, password){
    return fetch(this.API_URLS.URL_BASE + this.API_URLS.ROUTE_AUTH, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    })
    .then(Response => { 
        return Response.json();
    })
  }
}
