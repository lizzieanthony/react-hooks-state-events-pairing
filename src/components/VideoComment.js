
function VideoComment(props) {
    console.log(props.comment)
    return(
        <div>
            <h3>{props.comment.user}</h3>
            <p>{props.comment.comment}</p>
        </div>
    )
}

export default VideoComment; 