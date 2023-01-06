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
        // tabManager.componentMapping.character.params = [{ id: e.currentTarget.id }]
        // tabManager.openTabById('character',)
      }
    },
    children: [
      {
        tagName: 'p',
        text: type + ' ' + name
      },
      {
        tagName: 'p',
        text: dimension
      },
      {
        tagName: 'p',
        text: residents.length + ' résidents'
      },
    ]
  }
}