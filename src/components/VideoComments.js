import VideoComment from "./VideoComment";

function VideoComments(props) {

function renderComments() {
    return props.comments.map((comment, index) => {
        return(
            <VideoComment key={index} comment={comment} />
        )
    })
}
    return(
        <div id="video-comments-container">
            <br></br>
            <hr></hr>
            <h2>{props.comments.length} comments</h2>
            {renderComments()}
        </div>
    )
}

export default VideoComments; 