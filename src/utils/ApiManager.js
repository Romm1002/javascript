class ApiManager {
    constructor() {
        this.rootUrl = 'https://rickandmortyapi.com/api';
        this.graphQLUrl = 'https://rickandmortyapi.com/graphql';
    }

    async fetchAllCharacters(page){
        return await this.performGraphQLQuery(` 
        query GetCharacters($page: Int!) {
            characters(page: $page) {
                info{
                    next
                    prev
                }
                results{
                    id
                    name
                    image
                }
            }
        }
      `, {'page': page});
    }
    async fetchCharacters(search, page) {   
        return await this.performGraphQLQuery(` 
        query GetCharacters($page: Int!, $search: String) {
            characters(page: $page, filter: { name: $search }) {
                info{
                    next
                    prev
                }
                results{
                    id
                    name
                    image
                }
            }
        }
      `, {'page': page, 'search': search});
    }

    
    async fetchCharacter(id) {
        return await this.performGraphQLQuery(` 
        query GetCharacter($id: ID!) {
            character(id: $id){
                id
                name
                gender
                status
                species
                image
                location{
                  name
                }
                origin{
                  name
                }
              }
        }
      `, {'id': id});
        
    }

    
    async fetchAllLocations(page){
        return await this.performGraphQLQuery(` 
        query GetLocations($page: Int!) {
            locations(page: $page){
                info{
                  prev
                  next
                  count
                }
                results{
                  id
                  name
                  type
                  dimension
                  residents {
                    id
                  }
                }
            }
        }
      `, {'page': page});
    }


    async performGraphQLQuery(graphQLQuery, variables) {
        return await this.performHttpRequest(this.graphQLUrl, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                query: graphQLQuery,
                variables: variables
            })
        })
    }
    async performHttpRequest(url, requestSettings = null) {
        try {
            return await fetch(url, requestSettings)
                .then((data) => data.json())
                .then(data => { if("error" in data){
                    return [];
                } else {
                    return data;
                }});
        } catch(ex){
            throw new Error(ex);
        }
    }

}

export default ApiManager