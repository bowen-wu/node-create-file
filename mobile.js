var fs = require('fs')

var dirName = process.argv[2] // param is second start 

if (fs.existsSync(dirName)) {
    console.log('This folder already exists');
}else{
    process.chdir("/home/bowen-wu/Desktop") // cd ~/Desktop  lunix  进入路径而已
    // process.chdir("C:\\Users\\Administrator\\Desktop") // cd ~/Desktop windows
    fs.mkdirSync("./" + dirName) // mkdir $1
    process.chdir("./" + dirName) // cd $1
    fs.mkdirSync('css') // mkdir css
    fs.mkdirSync('js') // mkdir js

    fs.writeFileSync("./index.html", 
    '<!DOCTYPE html>\n' +
    '<html lang="zh-Hans">\n' +
    '<head>\n' +
    '   <meta charset="UTF-8">\n' +
    '   <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\n' +
    '   <meta http-equiv="X-UA-Compatible" content="ie=edge">\n' +
    '   <title>' + dirName + '</title>\n' +
    '   <link rel="stylesheet" href="./css/style.css">\n' +
    '   <script>\n' +
    '       var pageWidth = window.innerWidth\n' +
    '       document.write("<style>html{font-size:" + pageWidth/10 + "px;}</style>")\n' +
    '   </script>\n' +
    '</head>\n' +
    '<body>\n' +
    '\n' +
    '   <script src="./js/main.js"></script>' +
    '</body>\n' +
    '</html>')

    // fs.writeFileSync("css/style.css", 
    // '*{ margin:0; padding:0; }\n' +
    // 'body{ font-size: 16px; }\n' +
    // 'li{list-style: none;}\n' +
    // 'a{color: inherit; text-decoration:none;}\n' +
    // 'h1,h2,h3,h4,h5,h6{font-weight: normal;}\n' +
    // '.clearfix::after{content:"";display:block;clear:both;}\n' +
    // '\n' +
    // '\n')
    fs.writeFileSync("css/style.scss", 
    '@function px( $px ){\n' +
    '   @return $px/$designWidth*10 + rem;\n' +
    '}\n' +
    '$designWidth : 设计稿宽度;\n' +
    '\n' +
    '*{ margin:0; padding:0; }\n' +
    'body{ font-size: 16px; }\n' +
    'li{list-style: none;}\n' +
    'a{color: inherit; text-decoration:none;}\n' +
    'h1,h2,h3,h4,h5,h6{font-weight: normal;}\n' +
    '.clearfix::after{content:"";display:block;clear:both;}\n' +
    '\n' +
    '\n')
    fs.writeFileSync("./js/main.js", 
    'window.onload = function(){' +
    '   \n' +
    '   \n' +
    '}')
    fs.writeFileSync("README.md", "# "+dirName)

    process.exit(0)
}


