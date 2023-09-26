import {Link} from 'react-router-dom'
import CovidContext from '../../context/CovidContext'
import './index.css'

const NotFound = () => (
  <CovidContext.Consumer>
    {value => {
      const {isThemeLight} = value
      const routeClassName = isThemeLight
        ? 'not-found-route not-found-route-light'
        : 'not-found-route'
      return (
        <div className={routeClassName}>
          <img
            className="not-found-image"
            alt="not-found"
            src="https://th.bing.com/th/id/OIP.wrhV89ZbVqiO_r5pIi2L6AHaDu?pid=ImgDet&rs=1"
          />
          <h1 className="not-found-heading">PAGE NOT FOUND</h1>
          <p className="not-found-paragraph">
            we,re sorry, the page you requested could not be found Please go
            back to the home page
          </p>
          <Link to="/">
            <button type="button" className="button">
              Home
            </button>
          </Link>
        </div>
      )
    }}
  </CovidContext.Consumer>
)

export default NotFound
