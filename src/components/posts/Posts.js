
import sample_image from "./sample_image"
import Post from "../post/Post"
import "./Posts.css"

const Posts = () => {

    const posts = [
        {
            id: 1, 
            name: "John Doe",
            userId: 1,
            desc: "description",
            img: sample_image
        },
        {
            id: 2,
            name: "Salley May",
            desc: "description",
            img: sample_image
        }


    ];
    console.log("posts: ", posts);

    return (
        <div className="posts">
          {posts.map(post => {
            console.log("Mapping post: ", post); // log the current post in the mapping
            return <Post post={post} key={post.id} />;
          })}
        </div>
      );
    


};

export default Posts;