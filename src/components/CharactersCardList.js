import Card from "./CharacterCard";

export default function CardList(arrayOfCards) {
  return {
    tagName: 'div',
    classList: ['users'],
    children: arrayOfCards.map(({ id, name, image }) => Card({ id: id, text: name, src: image, classList: ['character'] }))
  }
}