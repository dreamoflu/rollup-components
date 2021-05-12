/*
 * @Author: your name
 * @Date: 2021-05-11 15:28:17
 * @LastEditTime: 2021-05-12 16:24:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /components/build/rollup.umd.config.js
 */

import basicConfig, { name, file } from './rollup.config'

export default {
    ...basicConfig,
    output: {
        name: 'LegoComponents',
        file: file('umd'),
        format: 'umd',

        // 解决rollup打包警告 umd格式打包之后均为全局变量，引入了vue和lodash-es未设置全局变量名称
        globals: {   
            'vue': 'Vue',
            'lodash-es': '_'
        },
        // 解决rollup打包警告 umd 格式需要导出一个全局变量
        exports: 'named'
    }
}