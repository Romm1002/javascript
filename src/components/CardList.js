import createElement from "../dom/createElement";
import Card from "./Card";

export default function CardList(arrayOfUsers) {
  console.log(arrayOfUsers)
  return createElement({
    tagName: 'div',
    classList: ['users'],
    children: arrayOfUsers.map(({ name, image }) => Card({ text: name, src: image }))
  })
}