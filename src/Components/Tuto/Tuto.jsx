import React, {useEffect} from 'react';
import {ImCross} from "react-icons/im";
import Plot from 'react-plotly.js';
import ReactAudioPlayer from "react-audio-player";

const Tuto = () => {

    function closeModal() {
        document.getElementById("modal3").style.display = "none";
    }


    return <div className="modal" id="modal3" style={{display: "none"}}>
        <div className="modal-back"></div>
        <div className="modal-container"
             style={{"background-image": `url(${process.env.PUBLIC_URL}/background.png)`}}>
            <ImCross onClick={closeModal} className="RedCrossIcon"/>

            <ul>
                Version textuelle:
                <li>Entre ton pseudo pour charger tes niveaux de métier, tes bâtiments, tes améliorations.</li>
                <li>Tout est sauvegardé dans le cache de ton navigateur pas besoin de l'exporter à chaque fois.</li>
                <li>Reimport ton données de temps en temps pour ne pas être désynchronisé avec Paladium.</li>
                <li>Les informations importées depuis Paladium ne sont pas en temps réelle ! Il est donc inutile de reimporter ses informations toutes les 5 minutes.</li>
                <li>Le site te propose un historique quotidien du top 14.</li>
                <li>Il est mis à jour régulièrement avec les nouvelles améliorations</li>
                <li>Les patchnotes s'affichent automatiquement s'il y a eu un changement depuis la dernière fois</li>
            </ul>


            <br/>
            <div>Version musicale:</div>
            <div style={{color: "#FF5C00"}}>
                (Couplet 1)<br/>
            </div>
            <div>
                Sur Paladium, dans cette quête du classement,<br/>
                Chaque clic, chaque bâtiment, compte encore.<br/>
                Le site, un allié, pour nos ambitions,<br/>
                Calculs précis, pour des gains sans friction.<br/>
            </div>
            <br/>
            <div style={{color: "#FF5C00"}}>
                (Couplet 2)<br/>
            </div>
            <div>
                Niveaux de métier, bâtiments améliorés,<br/>
                Le site dévoile, ce qu'il faut améliorer.<br/>
                Optimisation, au cœur des données,<br/>
                Pour une progression, jamais entachée.<br/>
            </div>
            <br/>
            <div style={{color: "#FF5C00"}}>
                (Refrain)
            </div>
            <div>
                Optimise ton clic, sur Paladium c'est magique,<br/>
                Le site t'assiste, dans chaque choix stratégique.<br/>
                Renseigne tes niveaux, tes bâtiments, tes améliorations,<br/>
                Les maths font le reste, pour une évolution exponentielle.<br/>
            </div>
            <br/>
            <ReactAudioPlayer
                src={process.env.PUBLIC_URL + "/Presentation_site.mp3"}
                controls
            />
            <div style={{color: "gray"}}>Musique générée avec suno.ai</div>
        </div>
    </div>
};


function csvJSON(csv) {

    var lines = csv.split("\n");

    var result = [];
    var headers = lines[0].split(";");
    for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(";");
        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }
    return result;
}

export default Tuto;
