import axios from "axios";

//axios clients
import apiClient  from "./axios/interceptors";
const authClient= axios.create();

//variables
const baseApiUrl = 'https://api.unsplash.com';
const baseUrl = 'https://unsplash.com';
const accessKey = process.env.REACT_APP_API_ACCESS_KEY;
const secretKey = process.env.REACT_APP_API_SECRET_KEY;
const redirectUri = process.env.REACT_APP_AUTH_REDIRECT_URL;

export default {

    getSearchResults(page = 1, perPage = 9, orderBy = "relevant", query="") {
        const urlWithParams = new URL(baseApiUrl + `/search/photos?page=${page}&per_page=${perPage}&order_by=${orderBy}&query=${query}&client_id=${accessKey}`);
        return apiClient.get(urlWithParams.href);
    },

    likePhoto(id) {
        return apiClient.post(baseApiUrl + `/photos/${id}/like`)
    },

    unlikePhoto(id) {
        return apiClient.delete(baseApiUrl + `/photos/${id}/like`)
    },

    authorizeUser(code) {
        return authClient.post(baseUrl + `/oauth/token?client_id=${accessKey}&client_secret=${secretKey}&redirect_uri=${redirectUri}&code=${code}&grant_type=authorization_code`)
    },

}
