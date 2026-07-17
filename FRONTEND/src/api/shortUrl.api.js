import axiosinstance from "../utils/axiosinstance";

export const createShortUrl = async(url,slug) =>{
    const {data} = await axiosinstance.post("/api/create", {url,slug});
    return data.shortUrl;
}