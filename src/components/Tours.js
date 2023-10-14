// import tour1 from '../images/tour-1.jpeg';
// import tour2 from '../images/tour-2.jpeg';
// import tour3 from '../images/tour-3.jpeg';
// import tour4 from '../images/tour-4.jpeg';
// import tour5  from '../images/tour-5.jpeg';
// import tour6 from '../images/tour-6.jpeg';

import { tourInfo } from "../data"
import { Title } from "./Title"

export const Tours = () => {
  return (
      <section className="section" id="tours">
        <Title title='featured' subTitle='Tours'/>
          

          <div className="section-center featured-center">
          {tourInfo.map((tourCard)=>{
            {/* console.log(tourCard) */}
            const{id,img,alt,date,title,desc,icon,place,days,cost}=tourCard
            return(
                <article className="tour-card" key={id}>
                    <div className="tour-img-container">
                        <img src={img} className="tour-img" alt={alt} />
                        <p className="tour-date">{date}</p>
                    </div>
                    <div className="tour-info">
                        <div className="tour-title">
                            <h4>{title}</h4>
                        </div>
                        <p>
                           {desc}
                        </p>
                        <div className="tour-footer">
                            <p>
                                <span><i className={icon}></i></span> {place}
                            </p>
                            <p>{days}</p>
                            <p>{cost}</p>
                        </div>
                    </div>
                </article>
            )
          })}
             

             
          </div>
      </section>

  )
}