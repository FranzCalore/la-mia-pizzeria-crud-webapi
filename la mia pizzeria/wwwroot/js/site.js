function loadAPizze(search) {
    axios.get("/api/Pizze", {
        params: { search: search }
    }).then((res) => {
        console.log("Risultato ok", res);

        if (res.data.length == 0) {
            document.querySelector(".js_no_pizze").classList.remove("d-none");
            document.querySelector(".js_pizza_table").classList.add("d-none");
        }
        else {
            let col;
            let lunghezza = res.data.length;
            if (res.data.length > 3) {
                col = 3;
            }
            else {
                col = 12 / lunghezza;
            }


            document.querySelector('.js_pizza_table').classList.remove('d-none');
            document.querySelector('.js_no_pizze').classList.add('d-none');

            document.querySelector('.js_pizza_table').innerHTML = '';

            res.data.forEach(pizza => {
                console.log("pizza", pizza);
                document.querySelector(".js_pizza_table").innerHTML +=
                    `
            <div class="col-lg-${col} d-flex align-items-stretch">
                <div class="card mb-3">
                    <img src="${pizza.immagine}" class="card-img-top" alt="..." width="600" height="300">
                    <div class="card-body">
                        <h5 class="card-title">${pizza.nome}</h5>
                        <p class="card-text">${pizza.descrizione}</p>
                        <a href="/Pizza/Dettagli/${pizza.id}">Vedi i dettagli</a>
                    </div>
                </div>
            </div>
                    `
            });
        }
    }).catch((error) => {
        console.log(error);
    });
}

function loadAMenu(search) {
    axios.get("/api/Pizze", {
        params: { search: search }
    }).then((res) => {
        console.log("Risultato ok", res);

        if (res.data.length == 0) {
            document.querySelector(".js_no_pizze_menu").classList.remove("d-none");
            document.querySelector(".js_pizza_table_menu").classList.add("d-none");
        }
        else {

            document.querySelector('.js_pizza_table_menu').classList.remove('d-none');
            document.querySelector('.js_no_pizze_menu').classList.add('d-none');

            document.querySelector('.js_pizza_table_menu').innerHTML = '';

            res.data.forEach(pizza => {
                console.log("pizza", pizza);
                document.querySelector(".js_pizza_table_menu").innerHTML +=
                    `
            <div class="col-lg-4 d-flex align-items-stretch">
                <div class="card mb-3">
                    <img src="${pizza.immagine}" class="card-img-top" alt="..." width="600" height="300">
                    <div class="card-body">
                        <h5 class="card-title">${pizza.nome}</h5>
                        <p class="card-text">${pizza.descrizione}</p>
                            <a href="/Pizza/Dettagli/${pizza.id}">Vedi i dettagli</a>
                    </div>
                </div>
            </div>
                    `
            });
        }
    }).catch((error) => {
        console.log(error);
    });
}
