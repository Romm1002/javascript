import Location from "../components/Location"
import ApiManager from "../utils/ApiManager"
import createElement from "../dom/createElement"
import CardList from "../components/CharactersCardList";
import { tabManager } from "../../main"

const apiManager = new ApiManager();

const LocationPage = async ({id}) => {
    const res = await apiManager.fetchLocation(id)
    console.log(res.data.location)
    let component = {tagName: 'div', children: []}
    component.children.push({
      tagName: 'h1',
      text: 'Retour',
      attributes: {
          'data-tabId': 'locations'
      },
      eventListener: {
          event: 'click',
          function: () => {
              tabManager.openTabById('locations')
          }
      }
    })
    component.children.push(Location(res.data.location))
    component.children.push(CardList(res.data.location.residents))
    console.log(component);
    return createElement(component)
}

export default LocationPage