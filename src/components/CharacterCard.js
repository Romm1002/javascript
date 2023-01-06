import { tabManager } from "../../main"
export default function Card({ src, text, id, classList }) {
  return {
    tagName: 'div',
    classList: classList,
    attributes: {
      id: id,
    },
    eventListener: {
      event: 'click',
      function: e => {
        tabManager.componentMapping.character.params = [{ id: e.currentTarget.id }]
        tabManager.openTabById('character')
      }
    },
    children: [
      {
        tagName: 'img',
        attributes: {
          src
        }
      },
      {
        tagName: 'p',
        text
      },
    ]
  }
}