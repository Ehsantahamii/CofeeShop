import axios from "axios";

const baseUrl = "https://aminsheibani.ir/api/";

export const 
    send_order = (values) =>{
        return axios.post(`${baseUrl}/orders`, values);
    }