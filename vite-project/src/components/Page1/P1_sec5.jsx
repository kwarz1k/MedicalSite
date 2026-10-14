import "../Page1/P1_secc5.scss"
import { Photo } from "../../Photo"
export default function App(){
    return(
        <>
            <section className="Five">
                <div className="Centr1">
                    <div className="text1">
                        <h1>Book an Appointment</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
                    </div>
                    <div className="Kontaz">
                        <div className="Weeknd">
                            <div className="starboy">
                                <h1>Name</h1>
                                <img src={Photo.vec4} />
                            </div>
                            <div className="starboy">
                                <h1>Gender</h1>
                                <img src={Photo.vec4} />
                            </div>
                            <div className="starboy">
                                <h1>Email</h1>
                                <img src={Photo.vec4} />
                            </div>
                            <div className="starboy">
                                <h1>Phone</h1>
                                <img src={Photo.vec4} />
                            </div>
                            <div className="starboy">
                                <h1>Date</h1>
                                <img src={Photo.vec4} />
                            </div>
                            <div className="starboy">
                                <h1>Time</h1>
                                <img src={Photo.vec4} />
                            </div>
                            <div className="starboy">
                                <h1>Doctor</h1>
                                <img src={Photo.vec4} />
                            </div>
                            <div className="starboy">
                                <h1>Department</h1>
                                <img src={Photo.vec4} />
                            </div>
                        </div>
                        <div className="Mess">
                            <h1>Message</h1>
                        </div>
                        <button className="fortnite">Submit</button>
                    </div>
                </div>
            </section>
        </>
    )
}