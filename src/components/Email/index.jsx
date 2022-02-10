// import { EmailJSResponseStatus } from "emailjs-com"
import emailjs from 'emailjs-com'

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

                <div className="contact-img col">
                    <div>
                        <h1>N'hésitez pas à nous laissez un message</h1>
                    </div>

                    <div>
                        <h2>Par Téléphone</h2>
                        <a href="tel:+33 6 59 52 03 23">+33 6 59 52 03 23</a>
                    </div>

                    <div>
                        <h2>Par Email</h2>
                        <a href="mailto:dynamic-assainissement@gmail.com">dynamic-assainissement@gmail.com</a>
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