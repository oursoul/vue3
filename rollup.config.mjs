import ts from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import serve from "rollup-plugin-serve";
import path from "path";

export default {
  input: "src/index.ts",
  output: {
    name: "VueReactivity",
    format: "umd", // 打包后的格式格式IFE umd
    file: path.resolve("dist/vue.js"), // 绝对路径
    sourcemap: true, // 生成映射文件
  },
  plugins: [
    // 解析第三方模块
    nodeResolve({
      extensions: [".js", ".ts"],
    }),
    // 解析ts
    ts({
      tsconfig: path.resolve("tsconfig.json"),
    }),
    // 替换环境变量
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"), // 浏览器不识别process.env.NODE_ENV
    }),
    // 启动服务
    serve({
      open: true, // 打包的时候默认打开服务
      openPage: "/public/index.html",
      port: 3000,
      contentBase: "", // 服务启动的位置
    }),
  ],
};
