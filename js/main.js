const check = (e) =>{
  if(e.target.value.toLowerCase() == "rhododendron"){
    document.getElementById("hint").innerHTML = `
      <h1>  
        gg well play
      </h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/gJLs0PRFy2w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
  }
}


document.getElementById("feild").addEventListener("keyup", (e) => check(e))