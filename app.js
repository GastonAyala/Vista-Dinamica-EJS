const express = require('express');
const app = express();
const port = 3030;

/* RUTAS */
const otherRoutes = require('./routes/other.routes')
const menuRoutes = require('./routes/menu.routes')

/* MIDDLEWARE */
app.use(express.static('public'));

/* CONFIGURACIONES */
app.set("view engine", "ejs");
app.set("views", "./views");

/* ENRUTADORES */
app.use("/", otherRoutes);
app.use("/menu", menuRoutes);


/* SERVIDOR */
app.listen(port);