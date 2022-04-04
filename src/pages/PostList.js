import React from "react";
import Post from "../components/Post";

const PostList = (props) => {
    
    return (
        <React.Fragment>
           <Post />
        </React.Fragment>
    )
}

// props 로 정보를 받아오는데 부모가 정보를 주지 않았을때 오류나 화면이 다 깨지거나
// 그럴 때 기본적으로 필요한 props들을 미리 넘겨 놓는 방식(최소 props 정보가 없어서 생기는 오류 방지)

Post.defaultProps ={
    user_info: {
        user_name: "taak_e",
        user_porfile: "https://taakeimages.s3.ap-northeast-2.amazonaws.com/eggtart.jpg"
    },
    image_url: "https://taakeimages.s3.ap-northeast-2.amazonaws.com/eggtart.jpg",
    contents: "에그타르트 맛집!",
    comment_cnt: 10,
    insert_dt: "2022-04-08 10:00:00",
};

export default PostList;