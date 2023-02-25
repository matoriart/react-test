import React from "react"
import Navbar from '../Components/Navbar'
class NotFound extends React.Component{
    render(){
        return(
        <div>
          <Navbar />
            <div className="container">
                    <h1>NOT FOUND 404 :(</h1>
            </div>
        </div>
        )
    }
}
export default NotFound;