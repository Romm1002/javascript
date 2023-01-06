import { tabManager } from "../../main"
export default function Card({name, type, dimension, residents, id, classList }) {
  return {
    tagName: 'div',
    classList: classList,
    attributes: {
      id: id,
    },
    eventListener: {
      event: 'click',
      function: e => {
        tabManager.componentMapping.location.params = [{ id: e.currentTarget.id }]
        tabManager.openTabById('location',)
      }
    },
    children: [
      {
        tagName: 'p',
        classList: ['p1'],
        text: type + ' ' + name
      },
      {
        tagName: 'p',
        classList: ['p2'],
        text: dimension
      },
      {
        tagName: 'p',
        classList: ['p3'],
        text: residents.length + ' résidents'
      },
    ]
  }
}