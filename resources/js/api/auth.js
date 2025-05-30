import { getFetch, postFetch } from "./core";

async function getCSRFCookie() {
    const response = await getFetch("/sanctum/csrf-cookie");
    console.log(response);
}

async function postLoginCredentials(loginCredentials) {
    const response = await postFetch("/api/login", null, loginCredentials);
    console.log(response);
}

export {getCSRFCookie, postLoginCredentials};