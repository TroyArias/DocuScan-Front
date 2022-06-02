import { Link } from "react-router-dom";

export default function Navbar () {
    
        return(
            <nav className="Navbar">
                <div><p><Link to = "/">DocuScan</Link></p></div>
                {/* <button className = "Exit_button" ><span className="material-icons-outlined">logout</span>Exit</button> */}
            </nav>
        )
}
