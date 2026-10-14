import "../Page1/P1_secc2.scss"
import { Photo } from "../../Photo"
export default function App(){
    return(
        <>
            <section className="Second">
                <div className="Centra">
                    <div className="texxt">
                        <h1>Welcome to Meddical</h1>
                        <p>A Great Place to Receive Care</p>
                        <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p1>
                        <div className="zxczxc">
                            <p>Learn More</p>
                            <h1>→</h1>
                        </div>
                    </div>
                    <img src={Photo.gandon}></img>
                </div>
            </section>
        </>
    )
}