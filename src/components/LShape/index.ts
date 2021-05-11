/*
 * @Author: your name
 * @Date: 2021-05-11 10:36:37
 * @LastEditTime: 2021-05-11 10:40:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /components/src/components/LShap/index.ts
 */
import { App } from 'vue'
import LShape from './LShape.vue'
LShape.install = (app: App) => {
  app.component(LShape.name, LShape)
}

export default LShape