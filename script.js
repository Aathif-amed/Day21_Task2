let div = document.createElement("div");
div.classList.add("container");

let row = document.createElement("div");
row.classList.add("row","d-flex","justify-content-center");

//appending to document
div.append(row);
document.body.append(div);

let col = document.createElement("div");
col.classList.add("col-6","my-5");



async function getData() {
  try {
    const fetchData = await fetch("https://api.chucknorris.io/jokes/random?category=history");
    const data = await fetchData.json()

        col.innerHTML = `
    
        <div class="card text-white bg-light mb-3 h-100 mt-3 shadow-lg" >
        <div class="card-header bg-dark">
        <h4 class="text-center">ChuckNorris</h4>
   
        </div>
        <div class="card-body text-center bg-transparent">
            <div class="card-text text-dark">${data.value}</div>

        <a onclick="load()" class="btn btn-lg btn-transparent d-flex justify-content-end "><i class="fa-solid fa-rotate-right"></i></a>

          </div>
    
     </div>`;
        row.append(col);
    console.log(data);

  } catch (error) {
    col.innerHTML = `
        
    <div class="card text-white bg-light mb-3 h-100 mt-3 shadow-lg" >
    
    <div class="card-body text-center bg-transparent">
    <div class="card-text text-dark">Something Went Wrong</div>
    <a onclick="load()" class="btn btn-lg btn-transparent"><i class="fa-solid fa-rotate-right"></i> Click to Refresh</a>
    
  </div>

</div>`;
row.append(col);
    console.log(error);
  }
}
getData()

function load(){
    return location.reload()
}