import Card from "./LocationCard";

export default function CardList(arrayOfCards) {
  return {
    tagName: 'div',
    classList: ['locations'],
    children: arrayOfCards.map(({ id, name, type, dimension, residents }) => Card({ id: id, name: name, type: type, dimension: dimension, residents: residents, classList: ['character'] }))
  }
}