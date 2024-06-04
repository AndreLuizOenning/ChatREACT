import '../pages/chat.css'

function Msg(props){
    return(
        <div className="msg">
            <div className="user"><strong>{props.user}</strong></div>
            <div className="txt">{props.text}</div>
        </div>
    )
}
export default Msg