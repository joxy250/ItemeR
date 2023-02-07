
const data = {
    customer:{
        name:"Josiane NYIRARUKUNDO",
    }
}

document.addEventListener("DOMContentLoaded", () => {
const customerName = document.getElementById("customerName");




customerName.textContent = data.customer.name;

})