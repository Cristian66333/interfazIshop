
async function loadItems(){
    try{
        const items = await fetch("http://localhost:8081/api/products",
        {
            method:"GET",
            headers: {
                "Accept":"application/json"
            }
        }
        )
        if (items.ok){
            console.log("La peticion se ejecutó")
        }
        
        const data = await items.json();
        var tbody = document.getElementById("tabla-objetos")
        for(const element of data){
            var tr = document.createElement("tr")
            var tdId = document.createElement("td")
            tdId.innerText = element.id;
            var tdName = document.createElement("td")
            tdName.innerText = element.name;
            var tdPrice = document.createElement("td")
            tdPrice.innerText = element.price;
            var tdStock = document.createElement("td")
            tdStock.innerText = element.stock;
            tr.append(tdId)
            tr.append(tdName)
            tr.append(tdPrice)
            tr.append(tdStock)
            tbody.append(tr)
        }
    }catch(e){
        console.log("La peticion no se pudo ejecutar")
    }
    
}