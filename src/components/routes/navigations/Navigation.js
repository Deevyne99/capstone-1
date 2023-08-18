import { Outlet } from 'react-router-dom'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../../assets/crown.svg'
import './navigation.style.scss'
const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link to='/'>
          <div>
            <CrownLogo className='logo' />
          </div>
        </Link>
        <div className='nav-links-container'>
          <Link to='/shop' className='nav-link'>
            Shop
          </Link>
          <Link to='/signIn ' className='nav-link'>
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}
export default Navigation
