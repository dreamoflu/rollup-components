/*
 * @Author: your name
 * @Date: 2021-05-11 15:28:17
 * @LastEditTime: 2021-05-11 15:54:45
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
        globals: {
            'vue': 'Vue',
            'lodash-es': '_'
        },
        exports: 'named'
    }
}