import React from "react";
import { useDispatch } from "react-redux";
import {Grid, Image, Text, Button} from "../elements";
import { history } from "../redux/configureStore";
import { actionCreators as postActions } from "../redux/modules/post";

const Post = (props) => {
    const dispatch = useDispatch();

    const deletePost = () => {
        dispatch(postActions.deletePostFB(props.id));
    }

    return (
      <React.Fragment>
        <Grid>
          <Grid is_flex padding="16px">
            <Grid is_flex width="auto">
              <Image shape="circle" src={props.src} />
              <Text bold>{props.user_info.user_name}</Text>
            </Grid>
            <Grid is_flex width="auto">
              {props.is_me && (<Button width="auto" padding="4px" margin="4px" 
              _onClick={() => {history.push(`/write/${props.id}`)}}>수정</Button>)}
              {props.is_me && (<Button width="auto" padding="4px" margin="4px" 
              _onClick={deletePost}>삭제</Button>)}
              <Text>{props.insert_dt}</Text>
            </Grid>
          </Grid>
          <Grid padding="16px">
            <Text>{props.contents}</Text>
          </Grid>
          <Grid>
            <Image shape="rectangle" src={props.image_url} />
          </Grid>
          <Grid padding="16px">
            <Text margin="0px" bold>댓글 {props.comment_cnt}개</Text>
          </Grid>
        </Grid>
      </React.Fragment>
    );
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
    is_me: false,
};

export default Post;