const RESTServiceTemplate = `
const SERVICE_URL = "http://{replaceWithYourURL}/api/<%=entity%>";

export default class <%=entity%>Service {
    static create<%=entity%>(entity) {
        return fetch(SERVICE_URL, {
            body:JSON.stringify(entity),
            headers:{
                'Content-Type': 'application/json'
            },
            method:"POST"
        }).then(response => response.json());
    }

    static findAll<%=entity%>() {
        return fetch(SERVICE_URL).then(response => response.json());
    }

    static find<%=entity%>ById(id) {
        return fetch(SERVICE_URL + "/" + id).then(response => response.json());
    }

    static update<%=entity%>(entity) {
        return fetch(SERVICE_URL, {
            body:JSON.stringify(entity),
            headers:{
                'Content-Type': 'application/json'
            },
            method:"PUT"
        }).then(response => response.json());
    }

    static delete<%=entity%>(id) {
        return fetch(SERVICE_URL + "/" + id, {
            method:"DELETE"
        }).then(response => response.json());
    }
}
`

module.exports = {RESTServiceTemplate};

