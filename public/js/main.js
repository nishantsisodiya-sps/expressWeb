const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp');
const temp_status = document.getElementById('temp_status'); 
const datahide = document.querySelector('.middle_layer');


const getInfo = async (event)=>{
    event.preventDefault()
    let cityVal = cityName.value;
    console.log(cityVal);
    if(cityVal === ""){
        city_name.innerHTML = 'Please Enter City to search';
        datahide.classList.add('data_hide');
    }else{
        try{
     
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=ff1bc4683fc7325e9c57e586c20cc03e`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const arrData = [data];
            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;

            let tempMod = arrData[0].weather[0].main;

            //Condition to check weather sunny or cloudy ==============>>>>>>

            if(tempMod == "Clear"){
                temp_status.innerHTML = " <i class='fas fa-sun' style='color : #eccc68'></i>";
            }else if(tempMod == "Clouds"){
                temp_status.innerHTML = " <i class='fas fa-cloud' style='color : #f1f2f6'></i>";
            }else if(tempMod == "Rain"){
                temp_status.innerHTML = " <i class='fas fa-rain' style='color : #a4b0be'></i>";
            }else{
                temp_status.innerHTML = " <i class='fas fa-sun' style='color : #eccc68'></i>";
            }

            datahide.classList.remove('data_hide');

        }
        catch(err){
            console.log(err);
            city_name.innerHTML = 'Please Enter Correct city';
            datahide.classList.add('data_hide')
        }
    }
};

submitBtn.addEventListener('click' , getInfo);


