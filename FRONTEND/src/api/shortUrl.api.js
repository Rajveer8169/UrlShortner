import axiosinstance from "../utils/axiosinstance";

export const createShortUrl = async(url) =>{
    const {data} = await axiosinstance.post("http://localhost:3000/api/create", {url});
    return data.shortUrl;
}