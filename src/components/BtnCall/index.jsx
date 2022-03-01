import { Link, NavLink } from 'react-router-dom'
import '../../styles/BtnCall.css'
import { BsTelephoneForwardFill } from 'react-icons/bs'

function BtnCall() {

    const styleIcon = {
        color : "orange"
    }

  return (

        <div className='wrapper'>

            <div className='link_wrapper'>
                <a href="tel:+33 6 59 52 03 23">+33 6 59 52 03 23</a>
                <div className='icon'>
                    <BsTelephoneForwardFill style={styleIcon}/>
                </div>

            </div>
        
        </div>
  )
}

export default BtnCall