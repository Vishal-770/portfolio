import axios from "axios";

const BaseUrl = process.env.BaseUrl;
const api = axios.create({
  baseURL: BaseUrl,
});

export const SendMessage = async (data) => {
  await api.post("api",data);
};
