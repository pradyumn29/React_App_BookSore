import Axios  from "axios";
const baseurl="http//localhost:3002"

class service{

    getpaint(){
        return Axios.get(baseurl+"/paint");
    }

    addPaint(paint){
        return Axios.post(baseurl+"/paint/:pid",paint);
    }

    updatePaint(pid,paint){
        return Axios.put(baseurl+"/paint/"+pid,paint.pid,paint);
    }

    deletePaint(pid){
        return Axios.delete(baseurl+"/paint/"+pid);
    }
}

export default  new service();