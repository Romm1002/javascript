export default function Card({ src, text, id, classList }) {
  return {
    tagName: 'div',
    classList: classList,
    attributes: {
      id: id,
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