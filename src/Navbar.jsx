import { Link } from "react-router-dom";
import { BsDoorOpenFill } from "react-icons/bs";

export default function Navbar () {
    
        return(
            <nav className="Navbar">
                <div><p><Link to = "/">DocuScan</Link></p></div>
               
                <button className='btn_2'>
                    <div><BsDoorOpenFill /></div>
                </button>
            </nav>
        )
}
