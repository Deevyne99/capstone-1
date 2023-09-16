import { Outlet } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../../assets/crown.svg'
import './navigation.style.scss'
import { userContext } from '../../../context/UserContext'
import { signOutUser } from '../../../utils/firebase/firebase'
import CartIcon from '../../cart-icon/CartIcon'
import CartDropdown from '../../cart-dropdown/cart-dropdown.component'
import { CartContext } from '../../../context/cartContext'
// import { CartContext } from '../../contexts/cartContext'

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(userContext)
  const { isCartOpen } = useContext(CartContext)
  // console.log(currentUser)
  const handleSignOut = async () => {
    const response = await signOutUser()
    console.log(response)
    setCurrentUser(null)
  }
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
          {currentUser ? (
            <span className='nav-link' onClick={handleSignOut}>
              Sign Out
            </span>
          ) : (
            <Link to='/signIn ' className='nav-link'>
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}
export default Navigation
