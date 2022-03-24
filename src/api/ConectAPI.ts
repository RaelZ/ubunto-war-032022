import axios from "axios";

class ConectAPI {
  getAll = async () => await axios.get(`http://127.0.0.1:3333/animations`);
}

export const conectAPI = new ConectAPI();
