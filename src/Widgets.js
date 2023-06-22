import React from "react";
import "./Widgets.css";
import{
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
}from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';
function Widgets(){
    return (
        <div className="widgets">
           <div className="widgets_input">
            <SearchIcon className="search_icon"/>
            <input  className="search_input"placeholder="Twitter Search" type="text"/>
        </div>
            <div className="widget_container">
                <h2>What's happening</h2>
                 <TwitterTweetEmbed tweetId={"1650343831844552709"}/>
                 <TwitterTimelineEmbed sourceType="profile" screenName="prateek27012002" options={{ height: 400 }}/>
                 <TwitterShareButton className="shareButton"
                 url={"https://twitter.com/prateek27012002"} 
                 options={{text:"hey",via:"Prateek"}}
                 />
            </div>
           </div>
       
    )
}

export default Widgets;