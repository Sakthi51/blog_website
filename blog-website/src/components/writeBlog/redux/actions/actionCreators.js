export const PUBLISH_BLOG_REQUEST="PUBLISH_BLOG_REQUEST";

export const publishBlogRequest=(title,description,user)=>({
    type:PUBLISH_BLOG_REQUEST,
    payload: {title,description,user}
});