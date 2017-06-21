## Getting started
```bash
npm install
npm install -g nodemon
nodemon ./app.js
```

## Model Task Schema
```json
{
    "title": "Titre de ma tache",
    "description": "Description",
    "created": "Tue Jun 20 2017 14:24:29 GMT+0200",
    "status": "pending"
}
```
## Status enumeration
* pending
* ongoing
* complete

## Model
```json
{
    "id": "autogenerated",
    "title":"Titre de ma tâche",
    "description": "Description",
    "created": "Tue Jun 20 2017 14:24:29 GMT+0200",
    "status": "complete"
}
```

| Verb      | Endpoint              | Description       
|-----------|-----------------------|-------------------
| GET       | /todo/tasks           | Get all the tasks
| GET       | /todo/tasks/:status   | Get all the tasks by status
| POST      | /todo/tasks           | Create a task
| GET       | /todo/task/:id        | Get a single task
| PUT       | /todo/tasks/:id       | Update a task
| DELETE    | /todo/task/:id        | Delete a single task

# MongoDB

## Running Mongo
```docker
docker run --name mymongo -p 27017:27017 -d mongo
```

## Exec Mongo
```docker
docker exec -ti mymongo /bin/bash
```


