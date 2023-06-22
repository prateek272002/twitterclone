import React ,{useState,useEffect} from "react";
import './Feed.css';
import TweetBox from "./TweetBox.js";
import Post from "./Post.js";
import db from './firebase.js';
import {  collection, } from "firebase/firestore";

function Feed(){
 
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  
    return(
   <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox/>
      { posts.map((posts)=>(
         
         <Post  
            key={posts.text}
            displayName={posts.displayName}
            username={posts.usename}
            verified={posts.verified}
            text={posts.text}
            avatar={posts.avatar}
            image={posts.image}
        />
          )
        )
      }
      
       
   </div>
    )
}
 export default Feed;