##### 搭建rollup开发环境
rollup 打包工具  打包工具
rollup-plugin-typescript2 解析ts插件
@rollup/plugin-node-resolve  解析第三方模块
@rollup/plugin-replace 替换插件（环境变量）
rollup-plugin-serve 启动本地服务插件

##### 开始
根目录下新建 rollup-config.js
运行命令行 npx tsc --init
"module": "ESNext", 打包后的语法
新增命令
"dev": "rollup -c -w"，指定使用配置文件，监听文件的变化，重新打包

