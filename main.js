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
  if(tabManager.currentComponent == 'characters' || tabManager.currentComponent == 'character'){
    tabManager.componentMapping.characters.params[0].search = ''
    tabManager.componentMapping.characters.params[0].page = 1
    document.querySelector('#searchInput').value = '';
    tabManager.openTabById('characters')
  }else if (tabManager.currentComponent == 'locations' || tabManager.currentComponent == 'location'){
    tabManager.componentMapping.locations.params[0].search = ''
    tabManager.componentMapping.locations.params[0].page = 1
    document.querySelector('#searchInput').value = '';
    tabManager.openTabById('locations')
  }
})
document.querySelectorAll('[data-tabId]').forEach(element => {
  element.addEventListener('click', () => {
    tabManager.openTabById(element.getAttribute('data-tabId'))
    if(tabManager.currentComponent == 'characters' || tabManager.currentComponent == 'character'){
      document.querySelector('#searchInput').value = tabManager.componentMapping.characters.params[0].search
    }else if (tabManager.currentComponent == 'locations' || tabManager.currentComponent == 'location'){
      document.querySelector('#searchInput').value = tabManager.componentMapping.locations.params[0].search
    }
  })
})

document.querySelector('#searchForm').addEventListener('submit', e => {
  e.preventDefault();
  if(tabManager.currentComponent == 'characters' || tabManager.currentComponent == 'character'){
    tabManager.componentMapping.characters.params[0].search = document.querySelector('#searchInput').value;
    tabManager.componentMapping.characters.params[0].page = 1;
    tabManager.openTabById('characters')
  }else if (tabManager.currentComponent == 'locations' || tabManager.currentComponent == 'location'){
    tabManager.componentMapping.locations.params[0].search = document.querySelector('#searchInput').value;
    tabManager.componentMapping.locations.params[0].page = 1;
    tabManager.openTabById('locations')
  }
})

