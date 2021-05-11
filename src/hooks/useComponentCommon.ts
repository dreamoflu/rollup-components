/*
 * @Author: your name
 * @Date: 2021-05-11 10:33:10
 * @LastEditTime: 2021-05-11 10:33:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /components/src/hooks/useComponentCommon.ts
 */
import { computed } from 'vue'
import { pick } from 'lodash-es'
import { CommonComponentProps } from '../defaultProps'
const useComponentCommon =(props: Readonly<Partial<CommonComponentProps & { isEditing: boolean }>>, picks: string[]) => {
  const styleProps = computed(() => pick(props, picks))
  const handleClick = () => {
    if (props.actionType === 'url' && props.url  && !props.isEditing) {
      window.location.href = props.url
    }
  }
  return {
    styleProps,
    handleClick
  }
}

export default useComponentCommon