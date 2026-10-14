import "../Page1/P1_secc6.scss"
import { Photo } from "../../Photo"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
const items = [
    { id: 1, imageName: "./src/assets/nig.png", title: "Doctor's Name", category: "Neurology", ink:"./src/assets/in.png", facebook: "./src/assets/fe.png", instag: "./src/assets/gram.png"},
    { id: 2, imageName: "./src/assets/DrDre.png", title: "Doctor's Name", category: "Neurology", ink:"./src/assets/in.png", facebook: "./src/assets/fe.png", instag: "./src/assets/gram.png" },
    { id: 3, imageName: "./src/assets/Show.png", title: "Doctor's Name", category: "Neurology", ink:"./src/assets/in.png", facebook: "./src/assets/fe.png", instag: "./src/assets/gram.png" }
  ];
export default function App(){
    return(
        <>
            <section className="Six">
                <div className="Centrr">
                    <div className="tezxxt">
                        <h1>Trusted Care</h1>
                        <p>Our Doctors</p>
                    </div>
                    <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    >
                    <SwiperSlide>
                    <div className="zxccx">
                        {items.map(item => (
                        <div className="kontzxc" key={item.id}>
                            <img src={item.imageName}></img>
                            <div className="dior">
                                <p>{item.title}</p>
                                <h1>{item.category}</h1>
                                <div className="jersy">
                                   <img src={item.ink} alt="" />
                                    <img src={item.facebook}></img>
                                    <img src={item.instag}></img>
                                </div>
                            </div>
                            <button className="Prof">View Profile</button>
                        </div>
                        ))}
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="zxccx">
                        {items.map(item => (
                        <div className="kontzxc" key={item.id}>
                            <img src={item.imageName}></img>
                            <div className="dior">
                                <p>{item.title}</p>
                                <h1>{item.category}</h1>
                                <div className="jersy">
                                   <img src={item.ink} alt="" />
                                    <img src={item.facebook}></img>
                                    <img src={item.instag}></img>
                                </div>
                            </div>
                            <button className="Prof">View Profile</button>
                        </div>
                        ))}
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="zxccx">
                        {items.map(item => (
                        <div className="kontzxc" key={item.id}>
                            <img src={item.imageName}></img>
                            <div className="dior">
                                <p>{item.title}</p>
                                <h1>{item.category}</h1>
                                <div className="jersy">
                                   <img src={item.ink} alt="" />
                                    <img src={item.facebook}></img>
                                    <img src={item.instag}></img>
                                </div>
                            </div>
                            <button className="Prof">View Profile</button>
                        </div>
                        ))}
                    </div>
                    </SwiperSlide>
                   </Swiper>
                    <img src={Photo.toch}></img>
                </div>
            </section>
        </>
    )
}