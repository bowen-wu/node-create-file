var fs = require('fs')

var dirName = process.argv[2] // param is second start 

if (fs.existsSync(dirName)) {
    console.log('This folder already exists');
}else{
    process.chdir("C:\\Users\\Administrator\\Desktop") // cd ~/Desktop
    fs.mkdirSync("./" + dirName) // mkdir $1
    process.chdir("./" + dirName) // cd $1
    fs.mkdirSync('css') // mkdir css
    fs.mkdirSync('js') // mkdir js

    fs.writeFileSync("./index.html", "<!DOCTYPE>\n<title>Hello</title>\n<h1>Hello</h1>")

    fs.writeFileSync("css/style.css", "h1{color: red;}")
    fs.writeFileSync("./js/main.js", "var string = 'Hello World';\nalert(string);")

    process.exit(0)
}


