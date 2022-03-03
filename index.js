const search=document.getElementById('search');
const submit=document.getElementById('submit');
const mealEl=document.getElementById('mealp');
const resultHeading=document.getElementsByClassName('result-heading');
const singleMeal=document.getElementById('single-meaL');

//search meal parameter . 
function searchMeal(e)
{
    e.preventDefault();  //to clear the search section 

    //get search meal

    console.log(search.value);

    const calories=search.value;

    if(calories)
    {
        fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=234df877100a4ae0b183c067f0be6ecd&timeFrame=day&targetCalories=${calories}`)
        
        .then((res)=>res.json())
       
        .then((mealData)=>{
            resultHeading.innerHTML=`<h2>Search Result for ${calories}`
            mealEl.innerHTML=mealData.meals.map(
                    meal=>`
                    <div class="meal" >
                    <img src="${meal.id}">
                    </div>`
                )  })
    }
}

//EVENTLISTERNERS

//ADD EVENT LISTERNER FOR SUBMIT BUTTON

submit.addEventListener('submit',searchMeal);