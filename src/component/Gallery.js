import React,{useEffect} from 'react'
import AOS from "aos";

const Gallery = ({ photo }) => {
    useEffect(() => {
        AOS.init();
      });
    return (
        <>
            <div className="container-fluid" id="Gallery">
                <div className="row">
                    <div className="col-md-12 gallery_heading">
                        <h1>JOIN US IN THE FUTURE.</h1>
                        <p>Our vision for the car of the future starts with "Yui."<br />
                            Designed from the inside out, Toyota Concept-i is an exciting glimpse into a future mobility that <br /> is warm, friendly and revolves around you.</p>
                    </div>
                </div>

                <div className="Parent_Div">
                    {
                        photo.map((element) => {
                            return <div className={`${element.design}`}>
                                <img width="100%" height="100%" src={element.image} alt="" data-aos="flip-up" data-aos-duration="1500" />
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Gallery
