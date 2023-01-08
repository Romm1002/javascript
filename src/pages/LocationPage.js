import Location from "../components/Location"
import ApiManager from "../utils/ApiManager"
import createElement from "../dom/createElement"
import CardList from "../components/CharactersCardList";
import { tabManager } from "../../main"

const apiManager = new ApiManager();

const LocationPage = async ({id}) => {
    if(id == null){
        throw new Error('id introuvable')
    }
    const res = await apiManager.fetchLocation(id)
    let component = {tagName: 'div', children: []}
    component.children.push(Location(res.data.location))
    component.children.push(CardList(res.data.location.residents))
    return createElement(component)
}

export default LocationPage