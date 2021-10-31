import axios from "axios";

const apiClient= axios.create();

apiClient.interceptors.request.use(function (config) {
    if(getAccessToken() !== null){
        config.headers.Authorization = `Bearer ` + localStorage.getItem('access_token');
    }
    return config
}, function (error) {
    return Promise.reject(error);
});

apiClient.interceptors.response.use(function (response) {
    return response;
}, function (error) {

    if (error.response.status === 401) {
        alert("You are not authorized for this action, login to like photos.")
    } else if (error.response.status === 403){
        alert("Rate Limit Exceeded. Demo apps default rate limit is 50 requests/hour. For more details check out: https://help.unsplash.com/en/articles/3887917-when-should-i-apply-for-a-higher-rate-limit")
    }

    return Promise.reject(error);
});

async function getAccessToken() {
    const accessToken = await localStorage.getItem('access_token');
    return accessToken;
}

export default apiClient
