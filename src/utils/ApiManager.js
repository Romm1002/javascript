class ApiManager {
    constructor() {
        this.rootUrl = 'https://rickandmortyapi.com/api'
    }


    async fetchAllCharacters() {
        try {
            const req = await fetch(this.rootUrl + '/character')
            const res = await req.json()

            return res
        } catch (e) {
            throw new Error(e)
        }
    }

    async fetchCharacters(search) {        
        try {
            const req = await fetch(this.rootUrl + '/character?name=' + search)
            const res = await req.json()

            return res
        } catch (e) {
            throw new Error(e)
        }
    }

    async fetchCharacter(id) {
        try {
            const req = await fetch(this.rootUrl + '/character/' + id)
            const res = await req.json()

            return res
        } catch (e) {
            throw new Error(e)
        }
    }

}

export default ApiManager