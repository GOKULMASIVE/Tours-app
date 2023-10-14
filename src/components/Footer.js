import { pageLink ,iconsLink} from "../data"


export const Footer = () => {
  return (
      <footer className="section footer">
          <ul className="footer-links">
          {pageLink.map((link)=>{
            const {id,href,text}=link;
            return(
                <li key={id}>
                    <a href={href} className="footer-link">{text}</a>
                </li>
            )
          })}
              
             
          </ul>
          <ul className="footer-icons">
          {iconsLink.map((icons)=>{
            const{id,href,icon}=icons;
            return(
                <li key={id}>
                    <a href={href} target="_blank" className="footer-icon"
                    ><i className={icon}></i
                    ></a>
                </li>
            )
          })}
              
              
          </ul>
          <p className="copyright">
              copyright &copy; Backroads travel tours company
              <span id="date">{new Date().getUTCFullYear()}</span> all rights reserved
          </p>
      </footer>
  )
}