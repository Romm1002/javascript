import { tabManager } from "../../main"
import Card from "../components/Card"
import CardList from "../components/CardList"

const fetchCharacters = async (search) => {
  try {
    const req = await fetch('https://rickandmortyapi.com/api/character' + search)
    const res = await req.json()

    return res
  } catch (e) {
    throw new Error(e)
  }
}

const CharactersPage = async ({search}) => {
  const res = await fetchCharacters(search)
  let list = CardList(res.results);
  for (let card of list.querySelectorAll('.character')){
    card.addEventListener('click', e => {
      console.log(tabManager);
    })
  }
  return list;
}

export default CharactersPage