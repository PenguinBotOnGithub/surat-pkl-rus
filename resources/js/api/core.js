import axios from "axios";

async function getFetch(endpoint, headers, callback) {
    /* try {
        const response = await fetch(endpoint, {
            method: "GET",
            headers: {
                ...headers
            }
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        
        const json = await response.json();
        return json;
    } catch (e) {
        if (callback) {
            callback();
        }
        return e.message;
    } */
    try {
        const response = await axios.get(endpoint, {
            headers: {
                ...headers
            },
            responseType: "json"
        });
        if (response.status > 299) {
            throw new Error(`Response status: ${response.status}`);
        }

        return response.data;
    } catch (e) {
        if (callback) {
            callback();
        }
        return e.message;
    }

}

async function postFetch(endpoint, headers, body, callback) {
    try {
        const response = await axios.post(
            endpoint,
            {
                ...body
            },
            {
                headers: {
                    ...headers
                },
                responseType: "json",
                maxRedirects: 2
            }
        );
        if (response.status > 299) {
            throw new Error(`Response status: ${response.status}`);
        }

        return response.data;
    } catch (e) {
        if (callback) {
            callback();
        }
        return e.message;
    }
}

async function putFetch(endpoint, headers, body, callback) {
    try {
        const response = await fetch(endpoint, {
            method: "PUT",
            headers: {
                ...headers
            },
            body: body
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (e) {
        if (callback) {
            callback();
        }
        return e.message;
    }
}

async function deleteFetch(endpoint, headers, callback) {
    try {
        const response = await fetch(endpoint, {
            method: "DELETE",
            headers: {
                ...headers
            }
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (e) {
        if (callback) {
            callback();
        }
        return e.message;
    }
}

export {
    getFetch,
    postFetch,
    putFetch,
    deleteFetch
};