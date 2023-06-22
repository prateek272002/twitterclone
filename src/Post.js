import React from "react";
import "./Post.css";
import Avatar from '@mui/material/Avatar';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
function Post(props){
    return (
       <div className="post">
           <div className="post_avatar">
           <Avatar src={props.avatar}/>
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="header_text">
                     <h3>
                        {props.displayName}
                      <span className="post__headerspecial">
                        {props.verified&&<VerifiedUserIcon className="header_verified" />}{props.username}
                        </span>
                      </h3>
                    </div>
                    <div className="body_text">
                        <p>{props.text}</p>
                    </div>
                </div>
                <img src={props.image}/>
                <div className="footer">
                 <ChatBubbleOutlineIcon fontSize="small"/>
                 <RepeatIcon fontSize="small"/>
                 <FavoriteBorderIcon fontSize="small"/>
                 <PublishIcon fontSize="small"/>

               </div>
            </div>
            
           </div>
        
    )
}
export default Post;