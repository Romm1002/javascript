import { tabManager } from "../../main"
import CardList from "../components/CardList"
import createElement from "../dom/createElement"

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
  if ('error' in res){
    return createElement({tagName: 'h2', text: res.error})
  }
  let list = CardList(res.results);
  for (let card of list.querySelectorAll('.character')){
    card.addEventListener('click', e => {
      tabManager.componentMapping.character.params = [{id: e.currentTarget.id}]
      tabManager.openTabById('character')
    })
  }
  return list;
}

export default CharactersPage