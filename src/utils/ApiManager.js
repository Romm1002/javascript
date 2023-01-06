class ApiManager {
    constructor() {
        this.rootUrl = 'https://rickandmortyapi.com/api'
    }


    async fetchAllCharacters(page) {
        try {
            const req = await fetch(this.rootUrl + '/character' + '?page=' + page)
            const res = await req.json()

            return res
        } catch (e) {
            throw new Error(e)
        }
    }

    async fetchCharacters(search, page) {        
        try {
            const req = await fetch(this.rootUrl + '/character?name=' + search + '&page=' + page)
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
    async fethUrl(url) {
        try {
            const req = await fetch(url)
            const res = await req.json()

            return res
        } catch (e) {
            throw new Error(e)
        }
    }

}

export default ApiManager