import React, { useState } from "react";
import "./TweetBox.css";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import db from './firebase.js';
function TweetBox(){
    const [tweetMessage,setTweetMessage]=useState("");
    const [tweetImage,setTweetImage]=useState("");
   
    const sendTweet = (e) => {
        e.preventDefault();
    
        db.collection("posts").add({
          displayName: "Prateek Sharma",
          username: "@prateek2701",
          verified: true,
          text: tweetMessage,
          image: tweetImage,
          avatar:
          "https://instagram.fdel29-1.fna.fbcdn.net/v/t51.2885-19/273742555_475602894102845_3602542939449899261_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fdel29-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=hTZkmh8NgXIAX_Wr-Yt&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDkpLIZ1ggfamllVnZskoRDUKb6MvC43wv2A7XHSsQuKg&oe=644AB3F8&_nc_sid=8fd12b://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
        });
    
        setTweetMessage("");
        setTweetImage("");
      };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                  <Avatar src="https://instagram.fdel29-1.fna.fbcdn.net/v/t51.2885-19/273742555_475602894102845_3602542939449899261_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fdel29-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=hTZkmh8NgXIAX_Wr-Yt&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDkpLIZ1ggfamllVnZskoRDUKb6MvC43wv2A7XHSsQuKg&oe=644AB3F8&_nc_sid=8fd12b://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"/>
                  <input  onChange={(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage}
                    placeholder="What'Happening" 
                    type="text" />
                   
                </div>
                <input value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)} 
          className="tweetBox_image" 
          placeholder="Optional Enter image URL" type="text"/>
                <Button  onClick={sendTweet} type="submit" className="tweetBox_button">
                    Tweet
                </Button>
            </form>
         
        </div>
    )
}

export default TweetBox;