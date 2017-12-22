# node-create-file-script-demo

##实现功能

1.`node demo.js fileName01`可生成目录 fileName01,`node demo.js fileName02`可生成目录 fileName02.
2.如果要生成的目录已经存在，不能创建并会看到`This folder already exists`
3.生成的目录结构如下：
```
 ├── css
 │   └── style.css
 ├── index.html
 └── js
     └── main.js
```
4.index.html 的内容为
```
 <!DOCTYPE>
 <title>Hello</title>
 <h1>Hi</h1>
 ```
5.css/style.css 的内容为
```
 h1{color: red;}
 ```
6.js/main.js 的内容为
```
 var string = "Hello World"
 alert(string)
 ```
 7.当然，这些内容都可以在 demo.js 中更改。



## 使用说明

在 git bash 命令行中 输入 `node demo.js fileName` 即可创建一个 fileName 的文件夹



## 创建过程（git bash命令行）

`touch demo.js`

`start demo.js`

```
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
```


