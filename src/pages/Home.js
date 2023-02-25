import React from "react"
import Navbar from '../Components/Navbar'
class Home extends React.Component{
    render(){
        return(
        <div>
          <Navbar />
            <div className="container">
                <center>
                <div className="alert alert-success">
                    Ini adalah Halaman Home
                </div>
                
                </center>
            </div>
        </div>
        )
    }
}
export default Home;