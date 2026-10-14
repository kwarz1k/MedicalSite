import { Link } from "react-router-dom"
import { Photo } from "../../Photo"
import "./Header.scss"
export default function App(){
    return(
        <>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/Page_1">Home</Link></li>
                        <li><Link>About Us</Link></li>
                        <li><Link>Services</Link></li>
                        <li><a href="">Doctor</a></li>
                        <li><a href="">News</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                    <div className="yezzy">
                        <img src={Photo.zxc}></img>
                        <button className="kut">Appointment</button>
                    </div>
                </nav>
            </header>
        </>
    )
}