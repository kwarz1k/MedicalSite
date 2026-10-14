import "../Page1/P1_secc1.scss"
import { Photo } from "../../Photo"
export default function App(){
    return(
        <>
            <section className="First">
                <div className="Centr">
                    <div className="Kont">
                        <div className="text">
                            <h1>Caring for Life</h1>
                            <p>Leading the Way in Medical Excellence</p>
                        </div>
                        <button className="tyz">Our Services</button>
                    </div>
                    <div className="Kont2">
                        <div className="raz">
                            <p>Book an Appointment</p>
                            <img src={Photo.calendar}/>
                        </div>
                        <div className="dva">
                            <p>Book an Appointment</p>
                            <img src={Photo.guys}/>
                        </div>
                        <div className="tri">
                            <p>Book an Appointment</p>
                            <img src={Photo.cash}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}