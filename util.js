const fetch = require("node-fetch")

module.exports = {
    send(user, command) {
        /*
        * Tells API that a command was used
        *
        * @param {string} user: ID of the user that used the command
        * @param {string} command: Name of the command that was used
        */
       
        fetch("http://localhost:8080/command/"+user).then(res => res.json()).then(json => {
            console.log(json)
        })
    }
}