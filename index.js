//import json server
const jsonServer=require('json-server')

//2 create a server application using json-server

const mediaserver = jsonServer.create()

//3 create a middleware used by json server
const middleware=jsonServer.defaults()

//4 set up route for db.json
const router=jsonServer.router('db.json') 

//5. applying middleware to the server
mediaserver.use(middleware)

//6. applying route to the server
mediaserver.use(router)

//7. setting the port
const PORT=3000

//8. Starting the server
mediaserver.listen(PORT,()=>{
    console.log("Media server Started..listening on"+PORT);
    
})