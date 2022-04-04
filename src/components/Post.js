import React from "react";
import { Grid, Image, Text } from "../elements"

const Post = (props) => {

    return(
        <React.Fragment>
            <Grid>
                <Grid is_flex>
                    <Image shape="circle" src={props.src}/>
                    <Text bold>{props.user_info.user_name}</Text>
                    <Text>{props.insert_dt}</Text>
                </Grid>
                <Grid padding="16px">
                    <Text>{props.contents}</Text>
                </Grid>
                <Grid>
                    <Image shape="rectangle" src={props.src}/>
                </Grid>
                <Grid padding="16px">
                   <Text bold>댓글 {props.comment_cnt}개</Text>
                </Grid>
                <Grid>

                </Grid>
                <div>user profile / user name / insert_dt</div>
                <div>contents</div>
                <div>image</div>
                <div>comment cnt</div>
            </Grid>
        </React.Fragment>
    )
}

export default Post;