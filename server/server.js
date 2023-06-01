const express  = require('express');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();
const dbConfig = require('./config/dbConfig');
app.use(express.json());

const usersRoute = require('./routes/usersRoute');
const inventoryRoute = require('./routes/inventoryRoute');
const dashboardRouter = require('./routes/dashboardRoute');

app.use('/api/users', usersRoute);
app.use('/api/inventory', inventoryRoute);
app.use('/api/dashboard', dashboardRouter);

// deployment config
const path = require("path");
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
}


app.listen(port, () => console.log(`NodeJS Server started at ${port}`));