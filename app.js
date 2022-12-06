let main = document.getElementById('main');
let search = document.getElementById('search');
search.addEventListener("keyup",createCards)

function createCards(){
    fetch(`https://rickandmortyapi.com/api/character/?name=${search.value}`)
    .then(a=>a.json())
    .then(data=>{
  
      
      const {info,results}=data
      let items=``
      for(let item of results){
        items+=`
      <article id="container" class="container-personajes>
      <div class="image-container">
          <img src="${item.image}" alt="Personaje">
      </div>
      
      <h2>${item.name}</h2>
      <h3>${item.species}</h3>
      <h4>${item.gender}</h4>
      <span>${item.status}</span>
      
      </article>`     
    }
    main.innerHTML=items
    })
      
  }

createCards();