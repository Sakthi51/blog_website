import { PUBLISH_BLOG_REQUEST } from "./actions/actionCreators";
import { v4 as uuid } from 'uuid';

const initialState =[]
;

const writeBlogReducer = (state=initialState,action)=>{
    switch(action.type){
        case PUBLISH_BLOG_REQUEST:
            var {user:{email}, title, description,hashtags,imageUrl,oneLiner,readTime}= action.payload;

            return([...state,{e_mail: email, id:uuid(),title: title,description: description,hashtags:hashtags,imageUrl:imageUrl,oneLiner:oneLiner,readTime:readTime}]);
        default:
            return state;    
    }
}

export default writeBlogReducer;