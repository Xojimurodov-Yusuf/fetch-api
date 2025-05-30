fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        function malumot(malumotlar) {
            let cardFather = document.querySelector(".cardfather");
            cardFather.innerHTML = ""; 
            malumotlar.forEach(element => {
                let createDiv = document.createElement("div");
                createDiv.innerHTML = `
                    <div class="card">
                        <h1>${element.name}</h1>
                        <p>${element.username}</p>
                        <p>${element.address.street}</p>
                        <p>${element.email}</p>
                    </div>
                `;
                cardFather.append(createDiv);
            });
        }

        malumot(data);

        let input = document.querySelector("input");
        input.addEventListener("input", () => {
            let inputvalue = input.value.toLowerCase();
            let qidirilganlar = data.filter(user => user.name.toLowerCase().includes(inputvalue));
            malumot(qidirilganlar);
        });
    });
