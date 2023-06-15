import axios from "axios";

/*

Para utilizar api fake instalar a lib abaixo:
npm install -g json-server
npm install axios

iniciando o banco:
comando só funfa no cmd essa porra:
json-server --watch -d 180 --host 192.168.0.30 db.json

*/

const api = axios.create({
    baseURL: 'http://192.168.0.30:3000/'
})

export default api;