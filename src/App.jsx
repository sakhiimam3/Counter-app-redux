import React from 'react'
import "./App.css"
import {useSelector,useDispatch} from "react-redux"
import {increNumber,decreNumber}  from "./actions/index"
// import { connect } from 'react-redux'
function App(props) {
    const myState = useSelector(state => state.ChangeNumber)
    const dispatch=useDispatch()
    return (
        <div className="app">
<h1 style={{fontSize:"16px",marginLeft:"-3px"}}>Redux</h1>
 <a onClick={()=>dispatch(decreNumber())}><span style={{fontSize:"50px",fontWeight:"900px",marginLeft:'5px' ,cursor:'pointer'}}>-</span></a><br />
  <input type="text"  style={{border:"none",width:'40px',paddingLeft:"15px",marginLeft:'-5px'}} value={myState}/><br />
  <a onClick={()=>dispatch(increNumber())}><span  style={{fontSize:"50px",fontWeight:"900px",cursor:'pointer'}}>+</span></a>

        </div>
    )
}
export default App
// const mapStateToProps = (state /*, ownProps*/) => {
//     return {
//         val: state.ChangeNumber
//     }
// }

// export default connect(mapStateToProps, null)(App)
