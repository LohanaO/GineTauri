import { Link, Outlet } from 'react-router-dom'
import Mtabs from './Mtabs'

const Layout = () => {
  return (
   <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <Mtabs/>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout