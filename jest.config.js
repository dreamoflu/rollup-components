/*
 * @Author: your name
 * @Date: 2021-05-11 17:57:55
 * @LastEditTime: 2021-05-11 18:06:25
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /components/jest.config.js
 */
module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  transformIgnorePatterns: [
    '/!node_modules\\/lodash-es/'
  ]
}
