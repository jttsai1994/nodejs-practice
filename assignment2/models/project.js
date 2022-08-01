const getDb = require('../util/database').getDb;

class Project {
    constructor(year, name) {
        this.year = year;
        this.name = name;
    }
    save() {
        const db = getDb();
        return db.collection('projects') //指定collection
        .insertOne(this)   //在這邊insert資料入mongoDB
        .then(result=>{
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
    }
}

module.exports = Project;