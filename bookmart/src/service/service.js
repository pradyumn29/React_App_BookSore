import axios from 'axios';
const baseurl="http://localhost:3002";

class service{

    getbook(){
       return axios.get(baseurl+"/book");
    }
    getbookById(bid){
        return axios.get(baseurl+"/book/"+bid);
    }
    bookInsert(book){
        return axios.post(baseurl+"/book/:bid"+book.bid,book);
    }
    BookUpdate(book){
        return axios.put(baseurl+"/book/"+book.bid,book);
    }
    BookDelete(bid){
        return axios.delete(baseurl+"/book/"+bid);
    }
}

export default new service();