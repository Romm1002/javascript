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

  if (res.data.characters.results.length === 0 ) {
    component.children.push({ tagName: 'h2', text: 'Aucun personnage trouvé' });
  } else {
    let list = CardList(res.data.characters.results);

    component.children.push(list);

    
    if (res.data.characters.info.prev !== null) {
      component.children.push({
        tagName: 'button',
        text: 'prev',
        classList: ['pagination-prev'],
        eventListener: {
          event: 'click',
          function: () => {
            tabManager.componentMapping.characters.params[0].page = res.data.characters.info.prev;
            tabManager.openTabById('characters');
          }
        }
      })
    }
    if (res.data.characters.info.next !== null) {
      component.children.push({
        tagName: 'button',
        text: 'next',
        classList: ['pagination-next'],
        eventListener: {
          event: 'click',
          function: () => {
            tabManager.componentMapping.characters.params[0].page = res.data.characters.info.next;
            tabManager.openTabById('characters');
          }
        }
      })
    }

  }

  
  


  return createElement(component);
}

export default CharactersPage