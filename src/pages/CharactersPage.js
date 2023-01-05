import { tabManager } from "../../main"
import CardList from "../components/CardList"
import createElement from "../dom/createElement"
import ApiManager from "../utils/ApiManager"

const apiManager = new ApiManager();


const CharactersPage = async ({ search }) => {
  let res = [];
  if (search != '') {
    res = await apiManager.fetchCharacters(search)
  } else {
    res = await apiManager.fetchAllCharacters()
  }
  if ('error' in res) {
    return createElement({ tagName: 'h2', text: res.error })
  }
  let list = CardList(res.results);

  for (let card of list.querySelectorAll('.character')) {
    card.addEventListener('click', e => {
      tabManager.componentMapping.character.params = [{ id: e.currentTarget.id }]
      tabManager.openTabById('character',)
    })
  }
  return list;
}

export default CharactersPage