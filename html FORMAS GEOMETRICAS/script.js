document.getElementById('figuras').addEventListener('change', function() {
    const inputsContainer = document.getElementById('inputs');
    inputsContainer.innerHTML = ''; // Limpa os inputs anteriores

    const selectedValue = this.value;

    if (selectedValue === 'cubo') {
        inputsContainer.innerHTML = `
            <input type="number" id="lado" name="lado" placeholder="Lado do cubo" required>
        `;
    } else if (selectedValue === 'esfera') {
        inputsContainer.innerHTML = `
            <input type="number" id="raio" name="raio" placeholder="Raio da esfera" required>
        `;
    } else if (selectedValue === 'piramide') {
        inputsContainer.innerHTML = `
            <input type="number" id="base" name="base" placeholder="Base da pirâmide" required>
            <input type="number" id="altura" name="altura" placeholder="Altura da pirâmide" required>
        `;
    } else if (selectedValue === 'cilindro') {
        inputsContainer.innerHTML = `
            <input type="number" id="raio" name="raio" placeholder="Raio do cilindro" required>
            <input type="number" id="altura" name="altura" placeholder="Altura do cilindro" required>
        `;
    }
});

document.getElementById('meuForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const figura = document.getElementById('figuras').value;

    const inputs = document.querySelectorAll('#inputs input');

    alert(`O volume da figura é: altoo kkkk`);

    const data = { figura };
    inputs.forEach(input => {
        data[input.name] = input.value;
    });

    console.log(data.lado);


    if (data.lado) {

        const response = fetch(`http:localhost:8080/${data.lado}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'no-cors',
        })
        .then(response => {
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error('Fetch error:', error));
    }
}); 