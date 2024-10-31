const navItems = document.querySelectorAll('.nav-item')
const list=document.getElementById("list")
navItems[0].classList.add('active')

navItems.forEach(item => {
    item.addEventListener('click', function(event) {
        navItems.forEach(item => item.classList.remove('active'))
        event.currentTarget.classList.add('active')
        fetchData(event.currentTarget.id)
    })
})

async function fetchData(id) {
      try{
            const response = await fetch(`https://thecocktaildb.com/api/json/v1/1/filter.php?c=${id}`)
            const Cocktaildata=await response.json()
            console.log(Cocktaildata)
            addItems(Cocktaildata.drinks)
      }catch(error){
      console.log(error)
      }
}

function addItems(drinks){
      list.innerHTML=""
      drinks.forEach(drink => {
            const container=document.createElement("div")
            container.classList.add("list-item", "col-12", "col-sm-3")
            const title=document.createElement("h3")
            title.textContent=drink.strDrink
            const thumbnail=document.createElement("img")
            thumbnail.src=drink.strDrinkThumb
            thumbnail.classList.add("thumbnail")
            container.appendChild(thumbnail)
            container.appendChild(title)
            list.appendChild(container)
      })
}
async function fetchInstruct(id) {
      try{
            const response = await fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            const instrucData=await response.json()
            console.log(instrucData)
            addInstruct(instrucData.drinks)
      }catch(error){
      console.log(error)
      }
}

function addInstruct(drinks){
      list.innerHTML=""
      drinks.forEach(drink => {
            const modal=document.createElement("div")
            const modalContent= document.createElement("div")
            const drinkImage= document.createElement("img")
            const drinkInfo= document.createElement("div")
            const drinkName=document.createElement("h3")
            const drinkIngredients=document.createElement("ul")
            const contentIngredients=document.createElement("li")
            const drinkInstructions=document.createElement("p")
            drinkName.textContent=drink.strDrink

            contentIngredients.classList.add()
            drinkImage.classList.add("drink-image")

            modal.appendChild(modalContent)
            modalContent.appendChild(drinkImage)
            modalContent.appendChild(drinkInfo)
            drinkInfo.appendChild(drinkName)
            drinkInfo.appendChild(drinkIngredients)
            drinkInfo.appendChild(drinkInstructions)
      })
}
fetchData("Cocktail")
