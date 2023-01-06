import Character from "../components/Character"
import ApiManager from "../utils/ApiManager"
import createElement from "../dom/createElement"

const apiManager = new ApiManager();

const CharacterPage = async ({id}) => {
    const res = await apiManager.fetchCharacter(id)
    console.log(res.data.character)
    return createElement(Character(res.data.character))
}

export default CharacterPage