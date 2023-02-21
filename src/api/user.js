import axiosRequest from "../utils/axiosRequest.js";

export const login = (data) => {
    return axiosRequest({
        url: 'Mobile/User/login',
        method: 'post',
        data
    })
}
