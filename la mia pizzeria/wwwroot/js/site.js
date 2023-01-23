function LoadApiPizze() {
    axios.get("/api/Pizze").then((res) => {
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
