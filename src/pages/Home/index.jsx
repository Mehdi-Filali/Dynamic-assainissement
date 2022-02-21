import '../../styles/Home.css'
import { FaRegHandshake } from 'react-icons/fa'
import { AiOutlineFileProtect } from 'react-icons/ai'
import { VscWorkspaceTrusted } from 'react-icons/vsc'



function Home() {

  const styleIcon = {
    color: "orange",
    fontSize: "2em",
    marginBottom: "1em"
  }

  return (

    <div>
      <div className="container-title home"> 

        <h1>Nettoyer, Vidanger, Déboucher, Débloquer. On s'occupe de tout !</h1>
        <p>“Personne n'aime penser à l'entretien quotidien de ses tuyaux et canalisations, mais lorsqu'ils se bouchent, c'est un problème sérieux. Nous sommes l'entreprise sur laquelle vous pouvez compter pour être là pour vous 24h/24, 7j/7. Nous nous rendons à votre domicile ou à votre bureau et nettoyons vos canalisations et vos tuyaux.”</p>


        </div>

        <div className='main'>

          <section className='container-left'>
            <div>
              <h1>Nos services de dégorgements</h1>
            </div>

            <div className='container-row'>
              <div className='container-row-img'>
                <img src={require('../../assets/logo/logo_da.png')} alt='logo'/>
              </div>
              <div className='container-row-info'>
                <p>
                  Le débouchage ou hydrocurage, consiste à vider les conduits obstrués empêchant la voie d’écoulement à l’aide d’un nettoyeur, par le biais d’un outil mécanique ou de façon manuelle.
                  Négliger un débouchage régulier, c’est faciliter l’accumulation des dépôts solides ou non-solides.
                  C’est pourquoi, notre intervention s’avère nécessaire pour nettoyer les canalisations bouchées.
                  Nous veillons à ce que vos demandes soient exécutées correctement, efficacement et en toute sécurité. Nos agents s'efforcent de vous fournir les conseils nécessaires et d'assurer un suivi continu.
                </p>
              </div>
            </div>
          </section>

          <section className='container-icon'>
            <div className='why-contact-title'>
              <h1>Pourquoi nous contacter ?</h1>
            </div>

            <div className='container-row why-contact'>
              <div>
                <AiOutlineFileProtect style={styleIcon} />
                <h2>Professionnalisme</h2>
                <p>
                      Les techniciens de Dynamic'Assainissement s'occupe de vous !
                      Nous sommes là 24h/ 24 et 7j/7 pour nous assurer que vous recevez le meilleur service possible et dans les meilleurs délais.
                </p>
              </div>

              <div>
                <VscWorkspaceTrusted style={styleIcon} />
                <h2>La transparence</h2>
                  <p>
                    Nous veillons à instaurer une atmosphère de confiance avec notre clientèle et faisons au mieux pour toujours répondre a leurs attentes.
                  </p>
              </div>

              <div>
                <FaRegHandshake style={styleIcon} />               
                <h2>Satisfaction 100%</h2>
                  <p>
                       Nous mettons la qualité au cœur de notre métier pour mieux vous satisfaire. Notre équipe est à l’écoute de vos moindres soucis pour garantir le résultat voulu.
                  </p>
              </div>

            </div>

          </section>

          <section className='container-right'>
            <div>
              <h1>Nos services de dégorgements</h1>
            </div>

            <div className='container-row'>
              <div className='container-row-info'>
                <p>
                  Le débouchage ou hydrocurage, consiste à vider les conduits obstrués empêchant la voie d’écoulement à l’aide d’un nettoyeur, par le biais d’un outil mécanique ou de façon manuelle.
                  Négliger un débouchage régulier, c’est faciliter l’accumulation des dépôts solides ou non-solides.
                  C’est pourquoi, notre intervention s’avère nécessaire pour nettoyer les canalisations bouchées.
                </p>
              </div>
              <div className='container-row-img'>
                <img src={require('../../assets/logo/logo_da.png')} alt='logo'/>
              </div>
            </div>

          </section>

          <section className='container-icon'>
            
            <div className='service-title'>
              <h1>Services aux particuliers</h1>
            </div>

            <div className='container-row'>

              <div className='container-service container-row'>
              
                <div className='icon-dcp'>
                  <div className='déboucher'></div>
                  <h2>Le débouchage</h2>
                </div>

                <div className='icon-dcp'>
                  <div className='curer'></div>
                  <h2>Le curage</h2>
                </div>

                <div className='icon-dcp'>
                  <div className='pomper'></div>
                  <h2>Le pompage</h2>
                </div>

              </div>

            </div>
          </section>

          <section className='container-left'>
            <div>
              <h1>Syndicat de copropriété</h1>
            </div>

            <div className='container-row'>

              <div className='container-row-img'>
                <img src={require('../../assets/logo/logo_da.png')} alt='logo'/>
              </div>
              <div className='container-row-info'>
                <p>
                  Chez Dynamic'Assainissement, nous disposons des connaissances techniques pour vous guider vers des solutions optimales. Nous prenons soin de vous fournir des conseils professionnels afin de garantir le résultat souhaité.
                  Profitez de l'expertise de notre entreprise et faites nettoyer votre système d'assainissement par les meilleurs agents professionnels.
                </p>
              </div>

            </div>
          </section>

          <section className='container-row map'>
            <div>
              <h1>Zones d’intervention en Iles de France</h1>
            </div>
            <div>
              <img src={require('../../assets/contenu/map.jpg')}  alt='map' />
            </div>

          </section>

        </div>

    </div>
  )
}

export default Home