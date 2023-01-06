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

    async fetchAllLocations(page){
        try {
            const req = await fetch(this.rootUrl + '/location' + '?page=' + page)
            const res = await req.json()

            return res
        } catch (e) {
            throw new Error(e)
        }
    }

    async fetchLocations(search, page) {        
        try {
            const req = await fetch(this.rootUrl + '/location?name=' + search + '&page=' + page)
            const res = await req.json()

            return res
        } catch (e) {
            throw new Error(e)
        }
    }

    async fetchLocation(id) {
        try {
            const req = await fetch(this.rootUrl + '/location/' + id)
            const res = await req.json()

            return res
        } catch (e) {
            throw new Error(e)
        }
    }

}

export default ApiManager