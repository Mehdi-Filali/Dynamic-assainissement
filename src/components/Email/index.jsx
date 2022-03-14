// import { EmailJSResponseStatus } from "emailjs-com"
import emailjs from 'emailjs-com'
import { useState, useEffect } from "react";
import '../../styles/Email.css'

function Email() {

    const initialValues = { name: "", email: "", message: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    
    function sendEmail(e) {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        emailjs.sendForm('service_b27669s', 'template_gez5txd', e.target, 'user_2dO6JrA47B8iXyciikJ0n'
        ).then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
        
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setFormErrors(validate(formValues));
    //     setIsSubmit(true);
    // };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
        }
    }, [formErrors, formValues, isSubmit]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexName = /([A-Za-z]*)\w/;

        if (!values.name) {
            errors.name = "Veuillez rentrer un nom valide !";
        } else if (!regexName.test(values.name)) {
            errors.name = "Le nom n'est pas valide !";
        }

        if (!values.message) {
            errors.message = "Veuillez rentrer un message valide !";
        } 

        if (!values.email) {
            errors.email = "Veuillez rentrer une adresse mail valide !";
        } else if (!regex.test(values.email)) {
            errors.email = "L'adresse mail n'est pas au format valide !";
        }

        return errors;
    };

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
                        <div class="form-floating mb-3">
                            <input 
                                type="name" 
                                name="name" 
                                class="form-control" 
                                id="floatingInput" 
                                placeholder="Votre Nom/Entreprise"
                                value={formValues.name}
                                onChange={handleChange}  
                                required 
                            />
                            <label for="floatingInput">Nom de famille/Entreprise</label>

                            <p>{formErrors.name}</p>
                            
                        </div>

                        {/* email adress */}
                        <div class="form-floating mb-3">
                            <input 
                                className="form-control" 
                                id="floatingInput" 
                                type="email" 
                                name="email" 
                                pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$" 
                                placeholder="email@.com" 
                                value={formValues.email}
                                onChange={handleChange} 
                                 
                                
                            />
                            <label for="floatingInput">email@.com</label>

                            <p>{formErrors.email}</p>
                            
                        </div>

                        {/* message */}
                        <div class="form-floating">
                            <textarea 
                                class="form-control" 
                                name="message" 
                                type="message" 
                                minLength="10" 
                                maxLength="250" 
                                placeholder="Laisser un commentaire ici" 
                                id="floatingTextarea2"
                                value={formValues.message}
                                onChange={handleChange} 
                                style={{ height: "255px" }} 
                                required>

                            </textarea>
                            <label for="floatingTextarea2">Ecrire votre commentaire</label>
                            <p>{formErrors.message}</p>

                        </div>

                        {/* submit */}
                        <button type="submit" class="btn-link form-control btn btn-primary">
                            Envoyer
                        </button>

                        { Object.keys(formErrors).length === 0 && isSubmit ? (
                        <div className='valid-feedback'>Votre message a bien été envoyé !</div>
                        ) : (
                            console.log(<pre>{ JSON.stringify(formValues, undefined, 2) }</pre>)                  
                        )}

                    </form>

                </div>   

            </div>
            

        </section>

    )
}

export default Email