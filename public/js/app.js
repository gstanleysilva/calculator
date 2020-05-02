
const btn = document.querySelector('button');

btn.addEventListener('click', () => {

    const field1 = document.querySelector('#field1').value;
    const field2 = document.querySelector('#field2').value;
    const operador = document.querySelector('#operador').value;

    const service = '/calc?val1=' + encodeURIComponent(field1) + '&val2=' + encodeURIComponent(field2) + '&op=' + encodeURIComponent(operador);

    fetch(service).then((response) => {
        response.json().then((data) => {
            console.log(data)
        })
    })

})