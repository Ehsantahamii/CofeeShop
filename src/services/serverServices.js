import axios from "axios";

const baseUrl = "https://aminsheibani.ir";

export const send_order = (values) => {
  return axios.post(`${baseUrl}/orders`, values);
};

export default async function handler (req , res){
  if (req.method === "POST"){
    const order = req.body;
    console.log(order);
  }
}