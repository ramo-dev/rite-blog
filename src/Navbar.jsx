import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h2><Link to="/">The Rite-Blog</Link></h2>
            <div>
                <Link to="/">Home</Link>
                <button className='navbar-button'><Link to="/create" style={{color:'#fff'}}>New Blog</Link></button>
            </div>
        </nav>
     );
}
 
export default Navbar;