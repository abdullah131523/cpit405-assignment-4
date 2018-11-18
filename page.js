doClick();
function doClick() {
  var searchTerm = document.getElementById('search').value;
  var xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var resObj = JSON.parse(xhttp.responseText);

       
    
       var ulElement = document.createElement("ul");
        ulElement.id = "list";
        var i;
    
        for(i =0; i < resObj.data.length; i++){
    
    

        var liElement = document.createElement("li");
    
        var imgElement = document.createElement("img");
         imgElement.style.width="10%";
         imgElement.style.height="10%";

        imgElement.src = resObj.data[i].link;
        if(imgElement.src.endsWith("jpg")||imgElement.src.endsWith("jpeg")){
            ulElement.appendChild(liElement);
    
            liElement.appendChild(imgElement);
            
        }
        
      }
      document.body.appendChild(ulElement);

    }
  }
  console.log("https://api.imgur.com/3/gallery/search/top/all/1?q=" + searchTerm)
  // Send an asynchronous HTTP GET request to the given end point (url)
  xhttp.open("GET", "https://api.imgur.com/3/gallery/search/top/all/1?q=" + searchTerm, true);
  xhttp.setRequestHeader("Authorization",
    "Client-ID 4f4bca364590c7b")
  xhttp.send();
}













