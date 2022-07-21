const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
// module.exports = path.dirname(require.main.filename);
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const createProjectRoutes = require('./routes/create-project');

// import mongoConnect form util/database.js
const {mongoConnect} = require('./util/database');
// add a parser to parse req.post.body 
app.use(bodyParser.urlencoded({extended:true}));

app.use(adminRoutes);

app.use(shopRoutes);

app.use(createProjectRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

mongoConnect(()=>{
    app.listen(3000);
})
// app.listen(3000);