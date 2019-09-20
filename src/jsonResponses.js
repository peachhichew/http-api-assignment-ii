const users = {};

// function to response with a json object
const respondJSON = (request, response, status, object) => {
    const headers = {
        'Content-Type': 'application/json'
    };

    // send response with json object
    response.writeHead(status, headers);
    response.write(JSON.stringify(object));
    response.end();
}

// function to respond without json body
// takes request, response, and status code 
const respondJSONMeta = (request, response, status) => {
    const headers = {
        'Content-Type': 'application/json'
    };

    response.writeHead(status, headers);
    response.end();
};

const getUsers = (request, response) => {
    const responseJSON = {
        users,
    };

    // return status code 200 with message
    return respondJSON(request, response, 200, responseJSON);
};

// get meta info about the users and return a 200 status code
const getUsersMeta = (request, response) => {
    return respondJSONMeta(request, response, 200);
};

module.exports = {
    getUsers,
    getUsersMeta
};