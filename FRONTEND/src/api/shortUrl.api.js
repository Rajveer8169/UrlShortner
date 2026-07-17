import axiosinstance from "../utils/axiosinstance";

export const createShortUrl = async(url,slug) =>{
    const {data} = await axiosinstance.post("http://localhost:3000/api/create", {url,slug});
    return data.shortUrl;
}