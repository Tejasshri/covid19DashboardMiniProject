import {FiGithub, FiInstagram, FiTwitter} from 'react-icons/fi'
import CovidContext from '../../context/CovidContext'

import './index.css'

const Footer = () => (
  <CovidContext.Consumer>
    {value => {
      const {isThemeLight} = value
      const footerClassName = isThemeLight ? 'footer footer-light' : 'footer'
      return (
        <div className={footerClassName}>
          <h1 className="footer-logo-title">
            COVID19<span>INDIA</span>
          </h1>
          <p className="footer-paragraph">
            we stand with everyone fighting on the front lines
          </p>
          <div className="footer-icon-container">
            <FiGithub size="30" className="footer-icon" />
            <FiInstagram size="30" className="footer-icon" />
            <FiTwitter size="30" className="footer-icon" />
          </div>
        </div>
      )
    }}
  </CovidContext.Consumer>
)

export default Footer
