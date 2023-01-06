import './style.css'
import CharactersPage from "./src/pages/CharactersPage";
import CharacterPage from "./src/pages/CharacterPage";
import LocationsPage from "./src/pages/LocationsPage";
import LocationPage from "./src/pages/LocationPage";
import TabManager from "./src/utils/TabManager";

const rootElement = document.querySelector('#app')
export const tabManager = new TabManager(rootElement, {
  characters: {
    component: CharactersPage,
    params: [{ search: '', page: 1 }]
  },
  character: {
    component: CharacterPage,
    params: [{ id: '' }]
  },
  locations: {
    component: LocationsPage,
    params: [{ search: '', page: 1 }]
  },
  location: {
    component: LocationPage,
    params: [{ id: '' }]
  },

})

tabManager.openTabById('characters');
document.querySelector('#searchRefresh').addEventListener('click', e => {
  tabManager.componentMapping.characters.params[0].search = ''
  tabManager.componentMapping.characters.params[0].page = 1
  document.querySelector('#searchInput').value = '';
})
document.querySelectorAll('[data-tabId]').forEach(element => {
  element.addEventListener('click', () => {
    tabManager.openTabById(element.getAttribute('data-tabId'))
  })
})

document.querySelector('#searchForm').addEventListener('submit', e => {
  e.preventDefault();
  tabManager.componentMapping.characters.params[0].search = document.querySelector('#searchInput').value;
  tabManager.componentMapping.characters.params[0].page = 1;
  tabManager.openTabById('characters')
})

