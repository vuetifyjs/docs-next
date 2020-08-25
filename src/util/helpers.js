// Globals
// import { IN_BROWSER, IS_PROD } from '@/util/globals'

export function copyElementContent (el) {
  // if (!IN_BROWSER) return

  // el.setAttribute('contenteditable', 'true')
  // el.focus()

  // document.execCommand('selectAll', false, null)
  // document.execCommand('copy')

  // el.removeAttribute('contenteditable')
}

export function getBranch () {
  return 'master'
  // let branch = 'master'
  // if (IN_BROWSER) {
  //   branch = window.location.hostname.split('.')[0]
  // }

  // return ['master', 'dev', 'next'].includes(branch) ? branch : 'master'
}

export function leadingSlash (str) {
  return str.startsWith('/') ? str : '/' + str
}

export function trailingSlash (str) {
  return str.endsWith('/') ? str : str + '/'
}

export const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout))
}

export async function waitForReadystate () {
  // if (
  //   IN_BROWSER &&
  //   IS_PROD &&
  //   document.readyState !== 'complete'
  // ) {
    // await new Promise(resolve => {
    //   const cb = () => {
    //     window.requestAnimationFrame(resolve)
    //     window.removeEventListener('load', cb)
    //   }

    //   window.addEventListener('load', cb)
    // })
  // }
}
