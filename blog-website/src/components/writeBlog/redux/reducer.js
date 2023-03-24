import { PUBLISH_BLOG_REQUEST } from "./actions/actionCreators";
import { v4 as uuid } from 'uuid';

const initialState =[{
    title:null,
    description:null}]
;

const writeBlogReducer = (state=initialState,action)=>{
    switch(action.type){
        case PUBLISH_BLOG_REQUEST:
            return([...state,{id:uuid(),title:action.payload.title,description:action.payload.description}]);
        default:
            return state;    
    }
}

export default writeBlogReducer;