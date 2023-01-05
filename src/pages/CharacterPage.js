import Character from "../components/Character"
import createElement from "../dom/createElement"

const fetchCharacter = async (id) => {
  try {
    const req = await fetch('https://rickandmortyapi.com/api/character/' + id)
    const res = await req.json()

    return res
  } catch (e) {
    throw new Error(e)
  }
}

const CharacterPage = async ({id}) => {
    const res = await fetchCharacter(id)
    console.log(res)
    return createElement(Character(res))
}

export default CharacterPage