import '../../styles/Home.css'
import { FaRegHandshake } from 'react-icons/fa'
import { AiOutlineFileProtect } from 'react-icons/ai'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import Aos from "aos"
import "aos/dist/aos.css"
import React , { useEffect } from "react"
import GoogleMap from '../../components/GoogleMap'


function Home() {

  const styleIcon = {
    color: "orange",
    fontSize: "2em",
    marginBottom: "1em"
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (

    <div className='container-main flex-col'>

      <div className='container-title home flex-col flex-align-c flex-justify-c'>

        <div className='container-title-cel flex-col flex-align-c txt-center'>

          <h1>Nettoyer, Vidanger, Déboucher, Débloquer. On s'occupe de tout !</h1>
          <p>“Personne n'aime penser à l'entretien quotidien de ses tuyaux et canalisations, mais lorsqu'ils se bouchent, c'est un problème sérieux. Nous sommes l'entreprise sur laquelle vous pouvez compter pour être là pour vous 24h/24, 7j/7. Nous nous rendons à votre domicile ou à votre bureau et nettoyons vos canalisations et vos tuyaux.”</p>

        </div>

      </div>

      <div className='container-section flex-col flex-align-c'>

        <section className='first-module flex-display-row flex-justify-c'>

          <div className='section-cel flex-col'>

            <div>
              <h2>Intervention en Urgence</h2>
            </div>

            <div className='flex-display-row flex-align-c flex-space-b responsive-col'>

              <div data-aos="fade-right" className='width-element-2 txt-center'>
                <img src={require('../../assets/contenu/degorgement.jpg')} alt='degorgement'/>
              </div>

              <div data-aos="fade-left" className='width-element-2'>
                
                <p>
                Le débouchage ou hydrocurage, consiste à vider, déboucher et désengorger les conduits obstrués empêchant la voie d’écoulement à l’aide d’un jet haute pression contrôlé.</p>
                <p>Négliger un débouchage régulier, c’est faciliter l’accumulation des dépôts solides ou non-solides.</p>
                <p>C'est là ou nous intervenons ! Notre intervention s’avère nécessaire pour nettoyer les canalisations bouchées.
                </p>

              </div>

            </div>

          </div>

        </section>

        <section className='second-module flex-display-row flex-justify-c'>

          <div className='section-cel flex-col'>

            <div className='txt-center'>
              <h2>Pourquoi nous contacter ?</h2>
            </div>

            <div className='flex-display-row flex-space-b responsive-col'>

              <div data-aos="fade-in" className='flex-col width-element-3 flex-align-c'>
                <AiOutlineFileProtect style={styleIcon} />
                <h2>Professionnalisme</h2>
                <p>
                      Les techniciens de Dynamic'Assainissement s'occupe de vous !
                      Nous sommes là 24h/ 24 et 7j/7 pour nous assurer que vous recevez le meilleur service possible et dans les meilleurs délais.
                </p>
              </div>

              <div data-aos="fade-in" className='flex-col width-element-3 flex-align-c'>
                <VscWorkspaceTrusted style={styleIcon} />
                <h2>La transparence</h2>
                  <p>
                    Nous veillons à instaurer une atmosphère de confiance avec notre clientèle et faisons au mieux pour toujours répondre a leurs attentes.
                  </p>
              </div>

              <div data-aos="fade-in" className='flex-col width-element-3 flex-align-c'>
                <FaRegHandshake style={styleIcon} />               
                <h2>Satisfaction 100%</h2>
                  <p>
                      Nous mettons la qualité au cœur de notre métier pour mieux vous satisfaire. Notre équipe est à l’écoute de vos moindres soucis pour garantir le résultat voulu.
                  </p>
              </div>

            </div>

          </div>

        </section>

        <section className='third-module flex-display-row flex-justify-c'>

          <div className='section-cel flex-col'>

            <div>
              <h2>Nos services de dégorgements</h2>
            </div>

            <div className='flex-display-row flex-align-c flex-space-b responsive-col'>

              <div data-aos="fade-right" className='width-element-2'>
                <p>
                  Le débouchage ou hydrocurage, consiste à vider, déboucher et désengorger les conduits obstrués empêchant la voie d’écoulement à l’aide d’un jet haute pression contrôlé.</p>
                  <p>Négliger un débouchage régulier, c’est faciliter l’accumulation des dépôts solides ou non-solides.</p>
                  <p>C'est là ou nous intervenons ! Notre intervention s’avère nécessaire pour nettoyer les canalisations bouchées.
                </p>
              </div>

              <div data-aos="fade-left" className='width-element-2 txt-center'>
                <img src={require('../../assets/contenu/degorgement.jpg')} alt='logo'/>
              </div>

            </div>

          </div>

        </section>

        <section className='fourth-module flex-display-row flex-justify-c'>

          <div className='section-cel flex-col'>
            
            <div className='txt-center'>
              <h2>Services aux particuliers</h2>
            </div>


            <div className='flex-display-row flex-space-b responsive-col'>
                
              <div data-aos="fade-in" className='flex-col width-element-3 flex-align-c flex-space-b'>
                <div className='déboucher'></div>
                <h3>Le débouchage</h3>
              </div>

              <div data-aos="fade-in" className='flex-col width-element-3 flex-align-c flex-space-b'>
                <div className='curer'></div>
                <h3>Le curage</h3>
              </div>

              <div data-aos="fade-in" className='flex-col width-element-3 flex-align-c flex-space-b'>
                <div className='pomper'></div>
                <h3>Le pompage</h3>
              </div>

            </div>

          </div>

        </section>

        <section className='fifth-module flex-display-row flex-justify-c'>
        
          <div className='section-cel flex-col'>

            <div>
              <h2>Syndicat de copropriété</h2>
            </div>

            <div className='flex-display-row flex-align-c flex-space-b responsive-col'>

              <div data-aos="fade-right" className='width-element-2 txt-center'>
                <img src={require('../../assets/contenu/syndic_proprio.jpg')} alt='Syndicat de Propriété'/>
              </div>

              <div data-aos="fade-left" className='width-element-2'>
                <p>
                  Chez Dynamic'Assainissement, nous disposons des connaissances techniques pour vous guider vers des solutions optimales. Nous prenons soin de vous fournir des conseils professionnels afin de garantir le résultat souhaité.
                  Profitez de l'expertise de notre entreprise et faites nettoyer votre système d'assainissement par les meilleurs agents professionnels.
                </p>
              </div>

            </div>

          </div>

        </section>

        <section className='sixth-module flex-display-row flex-justify-c'>

          <div className='section-cel'>

            <div className='flex-display-row flex-align-c flex-space-b responsive-col'>

              <div data-aos="fade-in-out" className='width-element-2 txt-center'>
                <h2>Zones d’intervention en Iles de France</h2>
              </div>

              <div data-aos="fade-in-out" className='width-element-2 txt-center'>
                <img src={require('../../assets/contenu/map_kai.jpg')}  alt='map' className='map'/>
              </div>

            </div>

          </div>

        </section>

        <section className='seventh-module flex-display-row flex-justify-c'>
        
          <div className='section-cel flex-col'>

            <div>
              <h2>Nos Tarifs</h2>
            </div>

            <div className='flex-display-row flex-space-b responsive-col'>

              <div data-aos="fade-in" className='flex-col width-element-3 flex-align-c'>

                <h2 className='txt-center'>Intervention Standard :</h2>
                <h3>109€ TTC</h3>
                <p>
                  Débouchage manuel de vos équipements ménagers.
                Intervention en urgence à votre domicile.                
                </p>

              </div>

              <div data-aos="fade-in" className='flex-col width-element-3 flex-align-c'>

                <h2 className='txt-center'>Intervention Hydrocurage :</h2>
                <h3>229€ TTC</h3>
                <p>
                  Dégorgement de vos conduits avec notre matériel d'hydrocurage à haute pression.
                  Intervention en urgence à votre domicile et partie extérieure.                
                </p>
                <p>
                  Option curage canalisation : 49€ TTC / métre linéaire.
                  Frais technique inclus dans le prix.
                </p>

              </div>

              <div data-aos="fade-in" className='flex-col width-element-3 flex-align-c'>

                <h2 className='txt-center'>Intervention Pompage et vidange :</h2>
                <h3>329€ TTC</h3>
                <p>
                  Pompage de fosses septique et vidange de vos bacs à graisse. Intervention en urgence à votre domicile, société, restaurant et partie extérieure.                
                </p>

              </div>

            </div>

          </div>

        </section>

        <section className='eighth-module flex-display-row flex-justify-c'>
          <div className='google-map section-cel flex-col'>
            <GoogleMap />
          </div>
        </section>

      </div>

    </div>
  )
}

export default Home
