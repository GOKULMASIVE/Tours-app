import { Title } from "./Title"
import { servicesInfo } from "../data"
export const Services = () => {
  return (
      <section className="section services" id="services">
      <Title title='our' subTitle='services'/>
          
          <div className="section-center services-center">
            {servicesInfo.map((service)=>{
                const{id,title,icon,desc}=service
                return(
                    <article className="service" key={id}>
                        <span className="service-icon"><i
                            className={icon}></i></span>
                        <div className="service-info">
                            <h4 className="service-title">{title}</h4>
                            <p className="service-text">
                                {desc}
                            </p>
                        </div>
                    </article>

                )
            })}
              
            
          </div>
      </section>

  )
}