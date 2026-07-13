import axios from "axios"

const axiosinstance = axios.create({
    baseURL:"http://localhost:3000",
    timeout:10000,
    withCredentials:true
})

axiosinstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response){
            const {status,data} = error.response;
            switch(status){
                case 400:
                    console.error("Bad Request:",data);
                    break;
                case 401:
                    console.error("Unauthorized:",data);
                    break;
                case 403:
                    console.error("Forbidden:",data);
                    break;
                case 404:
                    console.error("Not Found:",data);
                    break;
                case 500:
                    console.error("Server Error",data);
                    break;     
                default:
                    console.error(`Error (${status}):`,data);             
            }
        }else if(error.request){
            console.error("Network Error: No response recieved", error.request);
        }else{
            console.error("error:",error.message);
        }
        return Promise.reject({
            // isAxiosError: true,
            message: error.response?.data?.message || error.message || "Unknown",
            status: error?.response?.status,
            data: error?.response?.data,
            // orignalError: error
        });
    }
);

export default axiosinstance;