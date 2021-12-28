document.body.innerHTML = `<div class = "hedding-container">
<h1>Brewery List</h1>
<img class="icon" src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20200821124720/iStock-923418792-1024x683.jpg" width="300" height="100" aly="icon">
</div>
<div id = "mainContainer" class ="main-container"></div>;`;

const getData = async () => {

    try{
        const data = await fetch("https://api.openbrewerydb.org/breweries")
        const breweries = await data.json();

        mainContainer.innerHTML = "";
        breweries.forEach((brewery) => {
        displayData(brewery)
            });

    }catch(error){
        console.log(error);
    }
};

getData();


const displayData = (obj) => {
    mainContainer.innerHTML +=`
    <div class="container">
    <h3 class="blue">brewery name:<span>${obj.name}</span></h3>
    <p class="para blue"> Brewery Type:<span>${obj.brewery_type}</span></p>
    <p class="para blue"> Brewery phone:<span>${obj.phone}</span></p>
    <p class="para blue"> Brewery website:<span>${obj.website_url}</span></p>
    <p class="para blue"> Brewery Address:<span>${obj.street}</span></p>


    
    
    </div>`;
};

