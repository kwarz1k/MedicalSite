import "../Page1/P1_secc3.scss"
import { Photo } from "../../Photo"
export default function App(){
    return(
        <>
            <section className="Third">
                <div className="Centrov">
                    <div className="text">
                        <h1>Care you can believe in</h1>
                        <p>Our Services</p>
                    </div>
                    <div className="vse">
                        <div className="knop">
                            <div className="raz">
                                <img src={Photo.med}></img>
                                <p>Free Checkup</p>
                            </div>
                            <div className="dva">
                                <img src={Photo.vec}></img>
                                <p1>Cardiogram</p1>
                            </div>
                            <div className="tri">
                                <img src={Photo.vec1}></img>
                                <p>Dna Testing</p>
                            </div>
                            <div className="cet">
                                <img src={Photo.vec2}></img>
                                <p>Blood Bank</p>
                            </div>
                            <div className="pat">
                                <h1>View All</h1>
                            </div>
                        </div>
                        <div className="textxx">
                            <h1>A passion for putting patients first.</h1>
                            <div className="FUCK">
                                <ul>
                                    <li><a href="">A Passion for Healing</a></li>
                                    <li><a href="">5-Star Care</a></li>
                                    <li><a href="">All our best</a></li>
                                    <li><a href="">Believe in Us</a></li>
                                    <li><a href="">A Legacy of Excellence</a></li>
                                    <li><a href="">Always Caring</a></li>
                                </ul>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.</p>
                        </div>
                        <div className="Kartinki">
                            <img src={Photo.lucid}></img>
                            <img src={Photo.dream}></img>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}