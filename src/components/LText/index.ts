/*
 * @Author: your name
 * @Date: 2021-05-11 10:37:39
 * @LastEditTime: 2021-05-11 10:41:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /components/src/components/LText/index.ts
 */
import { App } from 'vue'
import LText from './LText.vue'
LText.install = (app: App) => {
  app.component(LText.name, LText)
}

export default LText