function apiPersonajes(){
    fetch("https://rickandmortyapi.com/api/character",{method: "GET"})
    .then((response)=>response.json())
    .then((data)=> {
        renderCharacter(data.results)

            }
        )
    .catch((error)=>console.log(error));
}
function renderCharacter(arr){
    for(let index=0; index < 5 ;index++){
                console.log(arr[index].name);
                document.querySelector(".items").innerHTML +=`
                <h2>${arr[index].name}</h2>
                <div class="card" style="width: 18rem;">
                    <img src="${arr[index].image}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${arr[index].name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                `
            }
}
function apiLocaciones(){
    fetch("https://rickandmortyapi.com/api/location",{method: "GET"})
    .then((response)=>response.json())
    .then((data)=> {
        locacion(data.results)
        
            }
        )
    .catch((error)=>console.log(error));
}
function locacion(arr){
        for(let index=0; index < 5 ;index++){
                console.log(arr[index].name);
                document.querySelector(".locaciones").innerHTML +=`
                <h2>${arr[index].name}</h2>
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-id"> ID: ${arr[index].id}</h5>
                    <h5 class="card-dimension"> Dimension: ${arr[index].dimension}</h5>
                    <h5 class="card-type"> TIPO: ${arr[index].type}</h5>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                `
        }
}
function apiEpisodios(){
    fetch("https://rickandmortyapi.com/api/episode",{method: "GET"})
    .then((response)=>response.json())
    .then((data)=> {
        episodios(data.results)
        
            }
        )
    .catch((error)=>console.log(error));
}
function episodios(arr){
    for(let index=0; index < 5 ;index++){
                console.log(arr[index].name);
                document.querySelector(".episodes").innerHTML +=`
                <h2>${arr[index].name}</h2>
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-air-date"> Fecha de transmicion: ${arr[index].air_date}</h5>
                    <h5 class="card-created">Fecha de creacion: ${arr[index].created}</h5>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                `
            }
}

apiPersonajes();
apiLocaciones();
apiEpisodios();