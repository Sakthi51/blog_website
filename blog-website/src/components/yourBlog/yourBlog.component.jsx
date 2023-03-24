
import {useSelector} from 'react-redux';
const YourBlog = () => {
    const userBlog = useSelector( state=>state)
    
    return(
        <section className="yourblogs-container">
            {
               userBlog.map(blog => {
                return(
                <div className="blog-container" key={blog.id}>
                <h1>{blog.title}</h1>
                <p>{blog.description}</p>
                </div>
                )
               })
            }
          
        </section>
    )
}

export default YourBlog
