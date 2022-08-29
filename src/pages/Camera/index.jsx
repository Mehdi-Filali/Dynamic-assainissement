import React, { useEffect } from "react";
import "../../styles/Camera.css";
import Aos from "aos";
import "aos/dist/aos.css";
import ReactPlayer from "react-player";

const Camera = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const externalsource = "https://youtube.com/shorts/tAiFski8PwI?feature=share";

  return (
    <div className="container-main flex-col">
      <div className="container-title camera flex-col flex-align-c flex-justify-c">
        <div className="container-title-cel flex-col flex-align-c txt-center">
          <h4>
            L’inspection télévisée à pour but de vérifier le fonctionnement et
            de détecter les défauts des réseaux d’assainissement.
          </h4>
        </div>
      </div>
      <div className="container-section flex-col flex-align-c">
        <section className="second-module flex-display-row flex-justify-c">
          <div className="section-cel flex-col flex-align-c">
            <div className="flex-display-row responsive-col flex-justify-c">
              <div
                data-aos="fade-in"
                className="flex-col flex-align-c youtube-contain"
              >
                <ReactPlayer
                  url={externalsource}
                  controls
                  playing={false}
                  muted
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Camera;
