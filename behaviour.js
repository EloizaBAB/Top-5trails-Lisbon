//selected the select form and added an adventlistenner to it for a change in the value
let selectedLevel = document.getElementById("selection");
selectedLevel.addEventListener("change", displayOptions);
//this function selets the container where the cards are and as the user chooses the level of physical challenge he/she wants
// the function displays the cards that have the same value option
// to display the correct cards with the same value, I copied the HTML code that corresponds to the same value of physical chanllenge that was attributed by me
function displayOptions(event) {
  console.log(selectedLevel);
  let selectValue = selectedLevel.value;
  let cardContainer = document.getElementById("cards");

  if (selectedLevel.value === "beginner") {
    cardContainer.innerHTML = `   <div class="card" id="option14">
              <div class="card-header grid-2-columns">
                <img
                  src="images/peninha_01.webp"
                  alt="cabo da roca"
                  class="image-responsive"
                /><iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.7882373294456!2d-9.463199124456068!3d38.768560754296566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1edb21650cb401%3A0xe5ebfeb1a33b956e!2sSanctuary%20of%20Peninha!5e0!3m2!1sen!2spt!4v1684513364724!5m2!1sen!2spt"
                  class="embed"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div class="card-body">
                <h4>Peninha sanctuary</h4>
                <p>
                  here, up above, at 488 metres in altitude, the Sanctuary of
                  Peninha bedazzles for its magic and impenetrable mystique.
                  Built by popular devotion, the Chapel of Our Lady of Penha
                  (Peninha) emerged after a poor shepherd claimed to have seen
                  an apparition of Our Lady there.
                </p>
                <h5>39.3 km from Lisbon</h5>
                <h5 class="op1">Beginner</h5>
                <a
                  href="https://www.parquesdesintra.pt/en/parks-monuments/sanctuary-of-peninha/"
                  class="btn"
                  target="_blank"
                  >Learn more</a
                >
              </div>
            </div>
               <div class="card" id="option1">
              <div class="card-header grid-2-columns">
                <img
                  src="images/guincho.jpg"
                  alt=" guincho beach "
                  class="image-responsive"
                /><iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.3611120213704!2d-9.475052024457803!3d38.73247485641916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ec35c1c80428d%3A0x6ada5b05a918719e!2sPraia%20do%20Guincho!5e0!3m2!1sen!2spt!4v1684512216305!5m2!1sen!2spt"
                  class="embed"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div class="card-body">
                <h4>Guincho</h4>
                <p>
                  Part of the Sintra-Cascais Natural Park, Guincho Beach is
                  endowed with a surrounding landscape of great beauty in which
                  the white sand dunes contrast with the deep tones of the Serra
                  de Sintra hills, looming in the background.
                </p>
                <h5>34.1 km from Lisbon</h5>
                <h5 class="op1">Beginner</h5>
                <a
                  href="https://lisbonlisboaportugal.com/lisbon-beaches/Praia-Guincho-beach-lisbon.html"
                  class="btn"
                  target="_blank"
                  >Learn more</a
                >
              </div>
            </div>
               <div class="card" id="option12">
              <div class="card-header grid-2-columns">
                <img
                  src="images/magoito.jpeg"
                  alt="Magoito"
                  class="image-responsive"
                /><iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6213.475011394072!2d-9.455935456497286!3d38.86136524113568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ed953d8cb5d1f%3A0x522a6dcac4810225!2sMagoito%20beach!5e0!3m2!1sen!2spt!4v1684513135580!5m2!1sen!2spt"
                  class="embed"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div class="card-body">
                <h4>Magoito Beach</h4>
                <p>
                  ccessed through a ramp, this beach is a destination for those
                  living in the Sintra region, and has yet to be discovered by
                  tourists. It’s way off the beaten path, but offers a scenery
                  of consolidated dunes from 10,000 years ago and classified as
                  geomonuments, as they were found to contain archaeological
                  traces of human activity from the Paleolithic era.
                </p>
                <h5>44.2 km from Lisbon</h5>
                <h5 class="op1">Beginner</h5>
                <a
                  href="https://www.lisbonbeachesguide.com/sintra/praia-do-magoito-beach.html"
                  class="btn"
                  target="_blank"
                  >Learn more</a
                >
              </div>
            </div>
             <div class="card" id="option13">
              <div class="card-header grid-2-columns">
                <img
                  src="images/monserrate.jpeg"
                  alt="monserrate palace"
                  class="image-responsive"
                /><iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24877.662665248048!2d-9.44010890840687!3d38.793331690817496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1edb225cf6b71b%3A0xcac69f824f7ec505!2sMonserrate%2C%202710-405%20Sintra!5e0!3m2!1sen!2spt!4v1684513202823!5m2!1sen!2spt"
                  class="embed"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div class="card-body">
                <h4>Monserrate Palace</h4>
                <p>
                  Francis Cook put his dream into practice in transforming
                  Monserrate into what we know today, with its exuberant gardens
                  capable of amazing visitors with the exotic species sourced
                  from every corner of the world, and a palace that represents a
                  true ode to romantic architecture, the refined taste of
                  Francis Cook and the genius of its architect James Knowles
                  Jr., who combined various different influences here.
                </p>
                <h5>39.9 km from Lisbon</h5>
                <h5 class="op1">Beginner</h5>
                <a
                  href="https://www.parquesdesintra.pt/en/parks-monuments/park-and-palace-of-monserrate/"
                  class="btn"
                  target="_blank"
                  >Learn more</a
                >
              </div>
            </div>`;
  } else if (selectedLevel.value === "intermediate") {
    cardContainer.innerHTML = `<div class="card" id="option2">
              <div class="card-header grid-2-columns">
                <img
                  src="images/castelo-dos-mouros-em-sintra.webp"
                  alt="castelo dos mouros"
                  class="image-responsive"
                /><iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.741493170075!2d-9.3919125244549!3d38.79256015288378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1edac752cb070d%3A0x24f7fbfe228323e0!2sCastelo%20dos%20Mouros!5e0!3m2!1sen!2spt!4v1684511962042!5m2!1sen!2spt"
                  class="embed"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div class="card-body">
                <h4>Castelo dos Mouros</h4>
                <p>
                  Isolated on its lofty perch, one of the peaks in the Sintra
                  Hills, the Moorish Castle is a fortification founded in the
                  10th century during the period the Moors occupied the Iberian
                  Peninsula.
                </p>
                <h5>30.7 km from Lisbon</h5>
                <h5 class="op2">Intermediate</h5>
                <a
                  href="https://www.parquesdesintra.pt/en/parks-monuments/the-moorish-castle/"
                  class="btn"
                  target="_blank"
                  >Learn more</a
                >
              </div>
            </div>
            <div class="card" id="option21">
              <div class="card-header grid-2-columns">
                <img
                  src="images/pena.jpg"
                  alt="cabo da roca"
                  class="image-responsive"
                /><iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.9583459199985!2d-9.393183824455184!3d38.78758925317657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1edabff29c5a67%3A0x77271a7dcb673b58!2sPark%20and%20National%20Palace%20of%20Pena!5e0!3m2!1sen!2spt!4v1684513266139!5m2!1sen!2spt"
                  class="embed"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div class="card-body">
                <h4>Pena's Palace</h4>
                <p>
                  The National Palace of Pena stands out as the renowned jewel
                  in the crown of the Sintra Hills. The surrounding park, in
                  close harmony with the magical character of the palace,
                  triggers emotions of mystery and discovery. In its nooks and
                  corners, our gaze gets lost amongst its charms.
                </p>
                <h5>33.2 km from Lisbon</h5>
                <h5 class="op2">intermediate</h5>
                <a
                  href="https://www.parquesdesintra.pt/en/parks-monuments/park-and-national-palace-of-pena/"
                  class="btn"
                  target="_blank"
                  >Learn more</a
                >
              </div>
            </div>`;
  } else if (selectedLevel.value === "expert") {
    cardContainer.innerHTML = ` <div class="card" id="option32">
              <div class="card-header grid-2-columns">
                <img
                  src="images/caboroca.jpg"
                  alt="cabo da roca"
                  class="image-responsive"
                /><iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12441.084760971271!2d-9.51690944458003!3d38.780417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1edac0235d438d%3A0x953ad8a898fcb3af!2sCabo%20da%20Roca!5e0!3m2!1sen!2spt!4v1684508823401!5m2!1sen!2spt"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="embed"
                ></iframe>
              </div>
              <div class="card-body">
                <h4>Cabo da Roca</h4>
                <p>
                  From the top of a sheer cliff, 140 meters (460ft) above the
                  roaring sea, they see “where land ends and the sea begins,” as
                  16th-century poet Camões put it, and as inscribed on a plaque
                  placed here in 1979.
                </p>
                <h5>40.2 km from Lisbon</h5>
                <h5 class="op3">Expert</h5>
                <a
                  href="https://www.sintraportugaltourism.com/guide/cabo-da-roca.html"
                  class="btn"
                  target="_blank"
                  >Learn more</a
                >
              </div>
            </div>
            <div class="card" id="option3">
              <div class="card-header grid-2-columns">
                <img
                  src="images/lousa.jpeg"
                  alt="Lousã"
                  class="image-responsive"
                /><iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6103.504273996524!2d-8.26068912229006!3d40.10323890000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd22ef4fa62a63d7%3A0x83295905b006491b!2sTrilho%20dos%20Moleiros!5e0!3m2!1sen!2spt!4v1684512796114!5m2!1sen!2spt"
                  class="embed"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div class="card-body">
                <h4>Moleiros trail</h4>
                <p>
                  Explore this 9.5-km out-and-back trail near Lousã, Coimbra.
                  Generally considered a moderately challenging route, it takes
                  an average of 3 h 47 min to complete. This is a popular trail
                  for hiking, mountain biking, and running.
                </p>
                <h5>210km from Lisbon</h5>
                <h5 class="op3 >Expert</h5>
                <a
                  href="https://www.alltrails.com/trail/portugal/coimbra/pr6-lsa-trilho-dos-moleiros--2"
                  class="btn"
                  target="_blank"
                  >Learn more</a
                >
              </div>
            </div>
             <div class="card" id="option31">
              <div class="card-header grid-2-columns">
                <img
                  src="images/ursa.jpg"
                  alt="cabo da roca"
                  class="image-responsive"
                /><iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.822822783477!2d-9.495223074455028!3d38.790695902993654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1edcc6a318990b%3A0x629a9db069fbc2de!2sUrsa%20Beach!5e0!3m2!1sen!2spt!4v1684513414319!5m2!1sen!2spt"
                  class="embed"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div class="card-body">
                <h4>Ursa Beach</h4>
                <p>
                  t’s one of Portugal’s most beautiful beaches, but it’s often
                  nearly deserted. It’s right by Cabo da Roca, which means that
                  it's the westernmost beach in mainland Europe.
                </p>
                <h5>41.6 km from Lisbon</h5>
                <h5 class="op3">Expert</h5>
                <a
                  href="https://www.lisbonbeachesguide.com/sintra/praia-da-ursa-beach.html"
                  class="btn"
                  target="_blank"
                  >Learn more</a
                >
              </div>
            </div>`;
  }
}
displayOptions();
