import Axios from 'axios'



const instance = Axios.create({
    baseURL:`http://${process.env.HOST || 'locaalhost'}:${process.env.PORT || 3000}`,
    timeout:1000,
    headers:{}
})