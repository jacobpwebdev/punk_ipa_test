import axios from "axios";

const baseURL = "https://api.punkapi.com/v2"

export const getBeers = () => {
    return axios.get(`${baseURL}/beers`).then((data) => data);
}