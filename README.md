# node-create-file

## 实现功能

1.`node  name.js fileName`可生成目录 fileName01,`node demo.js fileName02`可生成目录 fileName02.

2.如果要生成的目录已经存在，不能创建并会看到`This folder already exists`

3.生成的目录结构如下：
```
.
├── dist
├── package.json
├── package-lock.json
├── README.md
└── src
    ├── css
    │   └── main.scss
    ├── index.html
    └── js
        └── main.js


```

4.index.html 的内容为
```
<!DOCTYPE html>
<html lang="zh-Hans">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> xxx </title>
    <link rel="stylesheet" href="./css/main.css">
</head>
<body>
    
    <script src="./js/main.js"></script>
</body>
</html>
```

5.css/main.css 的内容为
```
*{ margin:0; padding:0; }
li{list-style: none;}
a{color: inherit; text-decoration:none;}
h1,h2,h3,h4,h5,h6{font-weight: normal;}
.clearfix::after{content:"";display:block;clear:both;}

 ```
6.js/main.js 的内容为
```
{
      
}
```

7.当然，这些内容都可以在 demo.js 中更改。



## 使用说明

前提：已安装 node + npm + git 
1. 安装 shelljs 模块
2. 运行 ` node  name.js fileName `，其中 name.js 为文件的名称

