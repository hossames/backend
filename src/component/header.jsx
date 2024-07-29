import './Header.css'
import { Link } from 'react-router-dom'
export const Header = ()=>{
    return(
        <>
        <header id="header">
                <Link to="/" className="nav-item"><span>home</span></Link>
                <Link to="/product" className="nav-item"><span>product</span></Link>
                <Link to="/catagory" className="nav-item"><span>catagory</span></Link>
        </header>
        </>
    )
}