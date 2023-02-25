import React from "react"
import Navbar from '../Components/Navbar'
class Contact extends React.Component{
    render(){
        return(
        <div>
          <Navbar />
            <div className="container">
                <div className="alert alert-danger">
                    Ini adalah Halaman Contact
                </div>
            </div>
        </div>
        )
    }
}
export default Contact;
