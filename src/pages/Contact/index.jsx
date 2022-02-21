import Email from "../../components/Email"
import '../../styles/Contact.css'

function Contact() {
    return (
        <div>

            <div className="container-title"> 
                <h1>Laissez nous un message !</h1>
                <p>Notre équipe vous recontacte dans les meilleurs délais afin d’établir un devis sur-mesure répondant besoins de l’intervention.</p>
            </div>
            
            <Email />

        </div>
    )
}

export default Contact