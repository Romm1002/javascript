import './style.css'
import CharactersPage from "./src/pages/CharactersPage";
import TabManager from "./src/utils/TabManager";

const rootElement = document.querySelector('#app')
export const tabManager = new TabManager(rootElement, {
  characters: {
    component: CharactersPage,
    params: [{search: ''}]
  },

})

tabManager.openTabById('characters');

document.querySelectorAll('[data-tabId]').forEach(element => {
  element.addEventListener('click', () => {
    tabManager.openTabById(element.getAttribute('data-tabId'))
  })
})

document.querySelector('#searchForm').addEventListener('submit', e => {
  e.preventDefault();
  tabManager.componentMapping.characters.params = [{search: '?name=' + document.querySelector('#searchInput').value}]  
  tabManager.openTabById('characters')
})

