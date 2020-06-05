import axios from "axios";
import config from "../Config/Config.json";

const APIClient = axios.create({ baseURL: config.urls.baseUrl });

export { APIClient };
