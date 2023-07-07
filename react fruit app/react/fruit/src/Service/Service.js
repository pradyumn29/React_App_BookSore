import axios from 'axios'
const baseurl="http://localhost:3002"

class Service{
    getFruit(){
        return axios.get(baseurl+"/fruit");
    }

    FruitInsert(fruit){
        return axios.post(baseurl+"/fruit/:fid"+fruit.fid,fruit);
    }

    DeleteFruit(fid){
        return axios.delete(baseurl+"/fruit/"+fid);
    }
}

export default new Service();