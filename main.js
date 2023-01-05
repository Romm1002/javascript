import './style.css'
import UserPage from "./src/pages/UserPage";
import SearchPage from "./src/pages/SearchPage";
import TabManager from "./src/utils/TabManager";

const rootElement = document.querySelector('#app')
const tabManager = new TabManager(rootElement, {
  page1: {
    component: () => document.createElement('div'),
    params: [{ src: 'http://placekitten.com/200/200', text: 'A cat' }]
  },
  user: {
    component: UserPage,
  },
  search: {
    component: SearchPage,
    params: [{search: ''}]  
  },

})

tabManager.openTabById('user');

document.querySelectorAll('[data-tabId]').forEach(element => {
  element.addEventListener('click', () => {
    tabManager.openTabById(element.getAttribute('data-tabId'))
  })
})

document.querySelector('#searchForm').addEventListener('submit', e => {
  e.preventDefault();
  tabManager.componentMapping.search.params = [{search: document.querySelector('#searchInput').value}]  
  tabManager.openTabById('search')
})
