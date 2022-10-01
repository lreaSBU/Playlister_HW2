export default class DBManager {
    // QUERY AND MUTATION FUNCTIONS GET/SET DATA FROM/TO
    // AN EXTERNAL SOURCE, WHICH FOR THIS APPLICATION
    // MEANS THE BROWSER'S LOCAL STORAGE
    queryGetSessionData = () => {
        let sessionDataString = localStorage.getItem("playlister-data");
        console.log("LOADING SESSION:\n");
        var ret = JSON.parse(sessionDataString);
        console.log(ret);
        return ret;
    }

    queryIsList = (key) => {
        let list = localStorage.getItem("playlister-list-" + key);
        return list != null;
    }

    /**
     * This query asks local storage for a list with a particular key,
     * which is then returned by this function.
     */
    queryGetList = (key) => {
        let listString = localStorage.getItem("playlister-list-" + key);
        var ret = JSON.parse(listString);
        console.log("LOADING LIST " + key + ":\n");
        //console.log(ret);
        return ret;
    }

    mutationCreateList = (list) => {
        this.mutationUpdateList(list);
    }

    mutationUpdateList = (list) => {
        // AND FLOW THOSE CHANGES TO LOCAL STORAGE
        console.log("SAVING LIST:\n");
        let listString = JSON.stringify(list);
        //console.log(listString);
        localStorage.setItem("playlister-list-" + list.key, listString);
    }
    
    mutationUpdateSessionData = (sessionData) => {
        let sessionDataString = JSON.stringify(sessionData);
        localStorage.setItem("playlister-data", sessionDataString);
    }

    mutationDeleteList = (key) => {
        if (this.queryIsList(key))
            localStorage.removeItem("playlister-list-" + key);
    }
}