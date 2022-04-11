// BOTTONE GENERA
const getInfoBtn = document.getElementById('genera');
console.log(getInfoBtn);
getInfoBtn.addEventListener('click',
    function() {
    // Mostro Biglietto
        const ticketContainer = document.querySelector(".ticket");
        ticketContainer.classList.add("d-block");

    // Prelievo input utente

        const passengerName = document.getElementById('passenger-name').value;
        console.log(passengerName);

        const passengerDistance = document.getElementById('passenger-distance').value;
        console.log(passengerDistance);

        const ticketType = document.getElementById("passenger-age").value;
        console.log(ticketType);

    // Visualizzazione in HTML risposte utente
        // NOME PASSEGGERO
        const nameResponse = document.getElementById('passenger-name');
        console.log(nameResponse);
        nameResponse.innerHTML = `${passengerName}`;

        // OFFERTA
        const ageResponse = document.getElementById('ticket-type');
        console.log(ageResponse);
        ageResponse.innerHTML = `${ticketType}`;
        
        // CARROZZA
            const ticketWagon = Math.floor(Math.random() * (9) + 1)
            console.log(ticketWagon);

            const wagonResponse = document.getElementById('ticket-wagon');
            console.log(wagonResponse);
            wagonResponse.innerHTML = `${ticketWagon}`;

        // CODICE CP
            const ticketCpCode = Math.floor(Math.random() * (99999 - 90000 + 1) + 90000)
            console.log(ticketCpCode);

            const cpCodeResponse = document.getElementById('ticket-cp-code');
            console.log(cpCodeResponse);
            cpCodeResponse.innerHTML = `${ticketCpCode}`;

        // Qual'è il prezzo del biglietto del treno?
            const standardTicket = passengerDistance * 0.21;
            console.log(standardTicket, typeof(regularTicket));

            if (userAge <= 18) {
                ticketPrice *= 0.8;
                console.log(ticketPrice);
            } else if (userAge > 65) {
                ticketPrice *= 0.6;
                console.log(ticketPrice);
            }
            document.getElementById('ticket-price').innerHTML = ticketPrice.toFixed(2);
    }
);


// BOTTONE ANNULLA
        const backBtn = document.getElementById('annulla');
        console.log(backBtn);
        backBtn.addEventListener('click',
            function() {

                // Nascondo Biglietto
                const ticketContainer = document.querySelector(".ticket");
                ticketContainer.classList.add("d-none");

                // Nascondo i campi compilati
                const passengerName = document.getElementById('passenger-name');
                console.log(passengerName);
                passengerName.value = '';
            }
        )