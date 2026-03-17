
function api(){
    fetch("https://rickandmortyapi.com/api/character",{method: "GET"})
    .then((response)=>response.json())
    .then((data)=> {
        renderCharacter(data.results)
        //console.log(data.results)
            //for(let index=0; index < data.results.length ;index++){
            //    console.log(data.results[index].name);
            //    document.querySelector(".items").innerHTML +=`<li>${data.results[index].name}</li>`
            //}
            }
        )
    .catch((error)=>console.log(error));
}
function renderCharacter(arr){
    for(let index=0; index < arr.length ;index++){
                console.log(arr[index].name);
                document.querySelector(".items").innerHTML +=`
                <li>${arr[index].name}</li>
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
api();