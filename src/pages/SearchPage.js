import CardList from "../components/CardList"
import createElement from "../dom/createElement"

const fetchUsers = async (search) =>  {
  try {
    const req = await fetch('https://rickandmortyapi.com/api/character?name=' + search)
    const res = await req.json()
  
    return res
  } catch(e) {
    throw new Error(e)
  }
}

const SearchPage = async ({search}) => {
    const res = await fetchUsers(search)
    console.log(res)
    if('error' in res){
        return createElement({ tagName: 'h2', text: res.error})
    }else{
        return CardList(res.results)
    }
}

export default SearchPage