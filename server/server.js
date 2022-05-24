var express = require('express');
var app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
var app_path = '../dist/quince-queen';

app.use('/' , express.static(path.join(__dirname , app_path)))
.get('*' , (req,res) => res.sendFile(path.join(__dirname, app_path + 'index.html')))
.listen(PORT, ()=>console.log(`/Listening on ${PORT}`)); 

/*
https://medium.com/geekculture/how-to-easily-deploy-your-first-angular-app-on-heroku-65dd546c8181
git init
heroku git:remote -a quince-queen
 git add .
git commit -am "make it better"
git push heroku main
*/