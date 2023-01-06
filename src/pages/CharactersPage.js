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
  console.log(res)

  let page = { tagName: 'div', children: [{ tagName: 'h1', text: 'Liste de personnage :' }] }

  if ('error' in res) {
    page.children.push({ tagName: 'h2', text: res.error });
  } else {
    let list = CardList(res.results);

    page.children.push(list);
  }

  return createElement(page);
}

export default CharactersPage