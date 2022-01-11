# SimpleNodeCRUDApi

Make Sure you have Node and npm installed if you don't learn how to do it [here.](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Next run 

    npm install
in the base directory. This is to install all the packages in the package.json.

At this point you should probably set mongodb up

To do that locally check [here.](https://www.prisma.io/dataguide/mongodb/setting-up-a-local-mongodb-database)

To use mongodb atlas check [here.](https://www.prisma.io/dataguide/mongodb/setting-up-a-local-mongodb-database)

Next you should go into ```database.config.js``` 
There you'll find 

    module.exports = {
    url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nruun.mongodb.net/Fixbot?retryWrites=true&w=majority`,
    serverport: 3000 }

Replace `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nruun.mongodb.net/Fixbot?retryWrites=true&w=majority` with your mongo db connection string.

run  ```node index.js``` and if you configured it properly your project should be working now


The API is deployed [here](https://fixbottest.herokuapp.com/)

and documented [here](https://documenter.getpostman.com/view/15225360/UVXgLcCd)