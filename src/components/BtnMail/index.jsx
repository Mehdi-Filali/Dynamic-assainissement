import { Link, NavLink } from 'react-router-dom'
import '../../styles/BtnMail.css'
import { AiOutlineMail } from 'react-icons/ai'

function BtnMail() {

    const styleIcon = {
        color : "orange"
    }

  return (

        <div className='wrapper'>

            <div className='link_wrapper'>
            
                <NavLink to="/Contact">Contactez nous</NavLink>
                <div className='icon'>
                    <AiOutlineMail style={styleIcon}/>
                </div>

            </div>
        
        </div>
  )
}

export default BtnMail