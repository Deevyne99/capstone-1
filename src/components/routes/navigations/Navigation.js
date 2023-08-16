import { Outlet } from 'react-router-dom'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link to='/'>
          <div>logo</div>
        </Link>
        <div className='nav-links-container'>
          <Link to='/shop' className='nav-link'>
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}
export default Navigation
