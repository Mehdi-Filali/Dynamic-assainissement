// import { EmailJSResponseStatus } from "emailjs-com"
import emailjs from 'emailjs-com'
import '../../styles/Email.css'

function Email() {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_b27669s', 'template_gez5txd', e.target, 'user_2dO6JrA47B8iXyciikJ0n'
        ).then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
    }
    return (


        <section className="contact container">

            <div className="row">

                <div className="contact-info col">
                    <div>
                        <h2>Nos coordonnées</h2>
                    </div>

                    <div>
                        <h3>Nous sommes joignables toute la semaine et le dimanche 24h/24</h3>
                    </div>

                    <div className='tel-container'>
                        <h4>Par Téléphone</h4>
                        <a href="tel:+33 6 59 52 03 23">+33 6 59 52 03 23</a>
                    </div>
                    
                    <div className='email-container'>
                        <h4>Par Email</h4>
                        <a href="mailto:contact@dynamic-assainissement.fr">contact@dynamic-assainissement.fr</a>
                    </div>
                    
                </div>

                <div className="form-container col">

                    <form onSubmit={sendEmail}>

                        {/* lastname/firmname */}
                        {/* pattern="[A-Za-z]*" */}
                        <div class="form-floating mb-3">
                            <input type="name" name="name" class="form-control" id="floatingInput" placeholder="Votre Nom/Entreprise" required />
                            <label for="floatingInput">Nom de famille/Entreprise</label>

                            <div class="help is-error invalid-feedback">
                                Veuillez rentrer un nom de famille valide !
                            </div>
                        </div>

                        {/* email adress */}
                        <div class="form-floating mb-3">
                            <input  className="form-control" id="floatingInput" type="email" name="email" pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$" placeholder="email@.com" required />
                            <label for="floatingInput">email@.com</label>

                            <div class="help is-error invalid-feedback">
                                Veuillez rentrer une adresse mail valide !
                            </div>
                        </div>

                        {/* message */}
                        <div class="form-floating">
                            <textarea class="form-control" name="message" type="message" minlength="10" maxlength="250" placeholder="Laisser un commentaire ici" id="floatingTextarea2" style={{ height: "255px" }} required></textarea>
                            <label for="floatingTextarea2">Ecrire votre commentaire</label>

                            <div class="help is-error invalid-feedback">
                                Veuillez rentrer un message valide !
                            </div>
                        </div>

                        {/* submit */}
                        <button type="submit" class="btn-link form-control btn btn-primary">
                            Envoyer
                        </button>

                    </form>

                </div>   

            </div>
            

        </section>

    )
}

export default Email