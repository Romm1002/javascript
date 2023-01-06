import { tabManager } from "../../main"
import CardList from "../components/CharactersCardList"
import createElement from "../dom/createElement"
import ApiManager from "../utils/ApiManager"

const apiManager = new ApiManager();


const CharactersPage = async ({ search, page }) => {
  let res = [];
  if (search != '') {
    res = await apiManager.fetchCharacters(search, page)
  } else {
    res = await apiManager.fetchAllCharacters(page)
  }

  let component = { tagName: 'div', children: [{ tagName: 'h1', text: 'Liste de personnage :' }] }

  if ('error' in res) {
    component.children.push({ tagName: 'h2', text: res.error });
  } else {
    let list = CardList(res.results);

    component.children.push(list);

    
    if (res.info.prev !== null) {
      component.children.push({
        tagName: 'button',
        text: 'prev',
        classList: ['pagination-prev'],
        eventListener: {
          event: 'click',
          function: () => {
            tabManager.componentMapping.characters.params[0].page = new URLSearchParams(res.info.prev.slice(res.info.prev.indexOf('?'))).get('page');
            tabManager.openTabById('characters');
          }
        }
      })
    }
    if (res.info.next !== null) {
      component.children.push({
        tagName: 'button',
        text: 'next',
        classList: ['pagination-next'],
        eventListener: {
          event: 'click',
          function: () => {
            tabManager.componentMapping.characters.params[0].page = new URLSearchParams(res.info.next.slice(res.info.next.indexOf('?'))).get('page');
            tabManager.openTabById('characters');
          }
        }
      })
    }

  }

  
  


  return createElement(component);
}

export default CharactersPage