export default function Card({ src, text, id }) {
  return {
    tagName: 'div',
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