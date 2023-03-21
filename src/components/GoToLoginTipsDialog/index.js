import { createApp } from 'vue'
import GoToLoginTipsDialog from './GoToLoginTipsDialog.vue'
function showGoToLoginTipsDialog ({redirectUrl, onConfirm = function () {}, onCancel = function () {}}) {
  return new Promise((resolve, reject) => {
    const instance = createApp(GoToLoginTipsDialog, {
      redirectUrl: redirectUrl || window.location.href,
      onConfirm: () => {
        unmount()
        if (onConfirm && typeof onConfirm == 'function') {
          onConfirm()
        }
        resolve()
      },
      onCancel: () => {
        unmount()
        if (onCancel && typeof onCancel == 'function') {
          onCancel()
        }
        reject(new Error())
      }
    })
    /**
     * 创建一个挂载容器
     */
    const parentNode = document.createElement('div')
    document.body.appendChild(parentNode)
    instance.mount(parentNode)
    /**
     * 卸载组件
     */
    const unmount = () => {
      instance.unmount()
    }
  })
}

export default showGoToLoginTipsDialog
