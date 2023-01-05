import Character from "../components/Character"
import ApiManager from "../utils/ApiManager"
import createElement from "../dom/createElement"

const apiManager = new ApiManager();

const CharacterPage = async ({id}) => {
    const res = await apiManager.fetchCharacter(id)
    return createElement(Character(res))
}

export default CharacterPage