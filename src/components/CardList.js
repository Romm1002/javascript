import createElement from "../dom/createElement";
import Card from "./Card";

export default function CardList(arrayOfCards) {
  return createElement({
    tagName: 'div',
    children: [
      {
        tagName: 'h1',
        text: 'Liste de personnages: '
      },
      {
        tagName: 'div',
        classList: ['users'],
        children: arrayOfCards.map(({ id, name, image }) => Card({ id: id, text: name, src: image, classList: ['character'] }))
      }
    ]
  })
}