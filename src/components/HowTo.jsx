import Image1 from '../assets/1.jpg';
import Image3 from '../assets/3.jpg';
import Image4 from '../assets/4.jpg';
import Image5 from '../assets/5.jpg';

export default function HowTo() {
    return (
      <section id="how-to" className="bg-gray-50 p-6 rounded-md shadow">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Prosess</h2>
        <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical timeline-centered">
          {/* <!-- timeline item 1--> */}
          <li>
            <div class="timeline-start me-4 mt-8 max-md:pt-2">
              <div class="text-base-content/50 text-sm font-normal text-gray-400">Steg 1</div>
            </div>
            <div class="timeline-end ms-4 mb-8">
              <div class="card">
                <div class="card-body gap-4">
                  <h5 class="card-title text-lg">Plukking av epler</h5>
                  <p className="text-gray-600">
                    Alle eplene er håndplukket fra epletrærne på Trovåg, landstedet Turid og Gunnar. Trærne bugnet av frukt, og arbeidet startet med å samle inn alle eplene til dette prosjektet.
                  </p>
                  <div class="flex flex-wrap gap-4">
                    <img src={Image1} alt="Plukking av epler" class="w-32 rounded" />
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </li>
          {/* <!-- timeline item 2--> */}
          <li>
          <div class="timeline-start me-4 mt-8 max-md:pt-2">
              <div class="text-base-content/50 text-sm font-normal text-gray-400">Steg 2</div>
            </div>
            <div class="timeline-end me-4 mb-8">
              <div class="card">
                <div class="card-body gap-4">
                  <h5 class="card-title text-lg">Fermentering</h5>
                  <p className="text-gray-600">
                    Eplene ble skåret i biter og lagt i vann for å starte fermenteringsprosessen. Denne fasen varte i omtrent én uke, der naturen fikk gjøre sitt for å skape ciderens unike smak. Fermenteringen ga en frisk, naturlig base med litt syrlighet.
                  </p>
                </div>
              </div>
            </div>
            <hr />
          </li>
          {/* <!-- timeline item 3--> */}
          <li>
            <div class="timeline-start me-4 mt-8 max-md:pt-2">
              <div class="text-base-content/50 text-sm font-normal text-gray-400">Steg 3</div>
            </div>
            <div class="timeline-end ms-4 mb-8">
              <div class="card">
                <div class="card-body gap-4">
                  <h5 class="card-title text-lg">Tilsette smak og starte gjæringen</h5>
                  <p className="text-gray-600">
                  Etter at væsken var silt ut fra eplemassen, ble sukker, kanelstenger og fersk ingefær tilsatt. Dette gjorde ikke bare cideren rik på smak, men startet også en aktiv gjæringsprosess. Gjæren fra epleskallet fikk nå tilstrekkelig mat (sukker) til å produsere bobler og alkohol. Denne blandingen sto over natten slik at smakene fikk utvikle seg, og gjæringsprosessen kunne ta skikkelig fart.
                  </p>
                  <div class="flex flex-wrap gap-4">
                    <img src={Image3} alt="Tilsette smak og starte gjæringen" class="w-32 rounded" />
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </li>
          {/* <!-- timeline item 4--> */}
          <li>
            <div class="timeline-start me-4 mt-8 max-md:pt-2">
              <div class="text-base-content/50 text-sm font-normal text-gray-400">Steg 4</div>
            </div>
            <div class="timeline-end ms-4 mb-8">
              <div class="card">
                <div class="card-body gap-4">
                  <h5 class="card-title text-lg">Sile og flaske</h5>
                  <p className="text-gray-600">
                    Neste dag ble blandingen silt igjen for å fjerne resterende biter, og væsken ble tappet over på flasker.
                  </p>
                  <div class="flex flex-wrap gap-4">
                    <img src={Image4} alt="Sile og flaske" class="w-32 rounded" />
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </li>
          {/* <!-- timeline item 5--> */}
          <li>
          <div class="timeline-start me-4 mt-8 max-md:pt-2">
              <div class="text-base-content/50 text-sm font-normal text-gray-400">Steg 5</div>
            </div>
            <div class="timeline-end ms-4 mb-8">
              <div class="card">
                <div class="card-body gap-4">
                  <h5 class="card-title text-lg">«Burping»</h5>
                  <p className="text-gray-600">
                    For å unngå for mye trykk i flaskene måtte de «rapes» – eller slippes litt luft ut ved behov. Dette er spesielt viktig siden cideren fortsatt utvikler seg på flasken.
                  </p>
                </div>
              </div>
            </div>
            <hr />
          </li>
          {/* <!-- timeline item 6--> */}
          <li>
          <div class="timeline-start me-4 mt-8 max-md:pt-2">
              <div class="text-base-content/50 text-sm font-normal text-gray-400">Steg 6</div>
            </div>
            <div class="timeline-end ms-4 mb-8">
              <div class="card">
                <div class="card-body gap-4">
                  <h5 class="card-title text-lg">Modning</h5>
                  <p className="text-gray-600">
                    Flaskene ble oppbevart kjølig, mellom 5 og 10 grader, i minst fire uker. Dette gir cideren tid til å utvikle enda rikere og mer komplekse smaker. Tålmodighet er nøkkelen til den beste smaken!
                  </p>
                  <div class="flex flex-wrap gap-4">
                    <img src={Image5} alt="Modning" class="w-32 rounded" />
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </li>
          {/* <!-- timeline item 7--> */}
          <li>
          <div class="timeline-start me-4 mt-8 max-md:pt-2">
              <div class="text-base-content/50 text-sm font-normal text-gray-400">Steg 7</div>
            </div>
            <div class="timeline-end ms-4 mb-8">
              <div class="card">
                <div class="card-body gap-4">
                  <h5 class="card-title text-lg">Nyt!</h5>
                  <p className="text-gray-600">
                    Når cideren er klar, kan den nytes – gjerne avkjølt og i godt selskap. Hver flaske er et lite stykke Trovåg-historie, laget med kjærlighet og omtanke.
                  </p>
                </div>
              </div>
            </div>
            <hr />
          </li>
        </ul>
      </section>
    );
  }