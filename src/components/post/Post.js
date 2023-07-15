import "./Post.css"
 
//import {Link} from "react-router-dom";

const Post = ({post}) =>{
    console.log("Post prop: ", post); // log the post prop

    if (!post) {
        return <div>No Post Data</div>;
      }

    return <div className="post">
        <div className="user">
            <div className="userInfo">
                <img src ={post?.img} alt = {post?.name}></img>
                <div className="deatils">
                    {/* <Link to ={`/profile/${post.userId}`}>
                        <span>{post.name}</span>
                    </Link> */}
                </div>
            </div>



        </div>
        <div className="content"></div>
        <div className="info"></div>



    </div>
}

export default Post;