//controller裡 決定這個路徑下要做哪些動作

const Project = require('../models/project');
const fs = require('fs');
const path = require('path');
exports.getAddProject = ( (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'create-project.html'))
})

exports.postAddProject=((req, res, next) => {
    console.log(req.body);
    var year = req.body.whichyear;
    var projectName = req.body.projectName;
    const project = new Project(year,projectName); //將req送來的資訊 放入物件Porject中
    var dir = `${year}/${projectName}`; // 建立'年度/項目名稱'的路徑 此路徑可以再串接 所需的資料夾路徑+此路徑
    // 建立資料夾
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
    };
    //project執行save()
    project.save()
    .then(result=>{
        console.log('Created Project');
        res.redirect('./create-project');
    })
    .catch(err=>{
        console.log(err);
    });
    
})