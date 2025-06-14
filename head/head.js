import {Link} from "react-router-dom";
import "./head.css"

export default function Head(){
    return (
        <div className="head">
            <center>
                <img src="https://tayniymir.com/wp-content/uploads/2017/11/astrologiya.jpg" height="100px" width="100px"
                     align="center"/>
            </center>
            <center>
                <Link to='/news'> Новости</Link>
                <Link to='/contacts'> Контакты</Link>
                <Link to='/about'> О проекте</Link>
            </center>
        </div>
)
}