import logo from '../images/logo.svg';
import {pageLink,iconsLink} from '../data';

export const Nav = () => {
  return (
      <nav className="navbar">
          <div className="nav-center">
              <div className="nav-header">
                  <img src={logo} className="nav-logo" alt="backroads" />
                  <button type="button" className="nav-toggle" id="nav-toggle">
                      <i className="fas fa-bars"></i>
                  </button>
              </div>
              {/* <!-- left this comment on purpose --> */}
              <ul className="nav-links" id="nav-links">
              {pageLink.map((link)=>{
                return(
                    <li key={link.id}>
                        <a href={link.href} className="nav-link"> {link.text}</a>
                    </li>
                )
                  
              })}
                 
              </ul>
                  
              <ul className="nav-icons">
                {iconsLink.map((icons)=>{
                    const{id,href,icon}=icons
                    return(
                        <li key={id}>
                            <a href={href} target="_blank" className="nav-icon"
                                rel='noreferrer'
                            >
                            <i className={icon} ></i>
                                
                            </a>
                        </li>
                    )
                    
                })}
                  
                
              </ul>
          </div>
      </nav>
  )
}


{/* export default Nav; */}