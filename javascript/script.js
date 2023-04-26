

const key = 'b4c26443b04321397e459191ff361cbc'// here we have our api key that we are going to use in the project




function exibirDadoNaTela(dados) {

        document.querySelector('.cyte').innerHTML = 'Tempo em ' + dados.name;
        document.querySelector('.p-temp').innerHTML = Math.floor(dados.main.temp) + '°C';
        document.querySelector('.nublado').innerHTML = dados.weather[0].description;
        document.querySelector('.nuvem').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
        document.querySelector('.umity').innerHTML = `Umidade : ${dados.main.humidity}%`

}



async function city(nowcity) {

        //I can modify the api to diversify ways using for example ${} which will contain the json value;

        const dadosApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nowcity}&appid=${key}&units=metric&lang=pt_br`).then(resulted => resulted.json())
        exibirDadoNaTela(dadosApi);
}



function inputsvalue() {
        const valueInput = document.querySelector('.cidade').value;
        if (valueInput.length > 0) {
          const minhabp = document.querySelector('.cidade');
          minhabp.style.border = 'none'      
          city(valueInput);

        } 
        else {
          const mnhinp = document.querySelector('.cidade');
          tcinp(mnhinp);
        }
      }
      
      function tcinp(element) {
              element.style.border = 'solid 2px red';
              
              setTimeout(() => {
                      alert('ação necessária')
                
              }, 100);
      }
      
// com a utilização da nossa crase, podemos modificar a nossa api como quisermos podendo colocar variáveis dentro da api;
//todas as vezes que precisamos receber informações de um servidor, temos que usar funções assíncronas
//pois não sabemos o tempo de retorno dessa nossa requisição;



