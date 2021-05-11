/*
 * @Author: your name
 * @Date: 2021-05-11 10:35:43
 * @LastEditTime: 2021-05-11 10:35:44
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /components/src/components/LImage/index.ts
 */

import { App } from 'vue'
import LImage from './LImage.vue'
LImage.install = (app: App) => {
  app.component(LImage.name, LImage)
}

export default LImage