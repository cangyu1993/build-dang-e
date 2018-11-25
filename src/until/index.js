import axios from 'axios'
import qs from 'qs'


const env = process.env.NODE_ENV

const baseURL = env == 'development'? '/api' : '/'

const instance = axios.create({
  baseURL,
  timeout: 15000,
});

const xhr = {
  get(url, data, config) {
    return new Promise((resolve, reject) => {
      instance.get(url, {params: data}, config).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  fetch(url, data, config,methods){
    return new Promise((resolve,reject)=>{
      instance[methods](url, data, config).then(res=>{
        resolve(res)
      }).catch(err=>{
        reject(err)
      })
    })
  },
  post(url, data, config){
    return this.fetch(url, data,config,'post')
  }
}


export default xhr
