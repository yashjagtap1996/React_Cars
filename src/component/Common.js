import React,{useEffect} from 'react'
import AOS from "aos";


const Common = (props) => {
    useEffect(() => {
        AOS.init();
      });
    return (
        <>
            <div className="container-fluid Common mb-5" id={`${props.ID}`}>
                <div className={`row ${props.side} align-items-center`}>
                    <div className="col-md-8 left_image" data-aos="fade-up">
                        <img src={props.image} alt="" />
                    </div>
                    <div className="col-md-4 tag">
                        <h1>{props.heading}</h1>
                        <img src="images/bd87ca380d82a1c6fad66fa9fc53bc48.png" alt="" />
                        <p>{props.summary}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Common
