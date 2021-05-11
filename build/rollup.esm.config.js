/*
 * @Author: your name
 * @Date: 2021-05-11 15:28:03
 * @LastEditTime: 2021-05-11 15:31:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /components/build/rollup.esm.config.js
 */

import basicConfig, { name, file } from './rollup.config'

export default {
    ...basicConfig,
    output: {
        name,
        file: file('esm'),
        format: 'es'
    }
}