export const PUBLISH_BLOG_REQUEST="PUBLISH_BLOG_REQUEST";

export const publishBlogRequest=(title,description,user,hashtags,imageUrl,oneLiner,readTime)=>({
    type:PUBLISH_BLOG_REQUEST,
    payload: {title,description,user,hashtags,imageUrl,oneLiner,readTime}
});