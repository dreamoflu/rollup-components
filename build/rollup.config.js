import vuePlugin from 'rollup-plugin-vue'  // 处理vue 文件
import css from 'rollup-plugin-css-only' // css 单独提取
import typescript from 'rollup-plugin-typescript2' // 处理typescript 执行此方法 会自动获取tsconfig 文件
import { nodeResolve } from '@rollup/plugin-node-resolve' // 处理rollup 不能处理引入绝对路劲文件的问题  例如 import moment from 'moment'
import pkg, { name } from '../package.json'
const deps = Object.keys(pkg.dependencies)
const file = type => `dist/${name}.${type}.js`
const overrides = {
    compilerOptions: { declaration: true },  // 修改tsconfig.json 配置  生成typescript 声明文件
    exclude: [
        "node_modules",
        "src/App.vue"
    ]
}
export { name, file }
export default {
    input: 'src/index.ts',
    output: {
        name,
        file: file('esm'),
        format: 'es'
    },
    plugins: [
        nodeResolve(),
        typescript({ tsconfigOverride: overrides }),
        vuePlugin(),
        css({ output: 'bundle.css' })
    ],
    /**
     * external: ['vue','lodash-es']    
     *  vue 和 lodash-es不打包到库里，这俩个属于外部引用 此插件必须在vue环境中使用，
     * lodash-es 可以在用户下载此插件的时候 下载 lodash-es
     *  */ 

   /**
    * 函数写法  推荐此写法 意思是不把此组件使用的依赖打包到组件中
    * (package.js 中的peerDependencies（使用此组件必须先有此模块下的依赖）和dependencies) 
    * 用户npm 安装此组件时会自动下载组件的依赖
    * */
    external: (id) => {  
        return /^vue/.test(id) || deps.some(k => new RegExp('^' + k).test(id))
    }
}