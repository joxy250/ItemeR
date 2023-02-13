
const data = {
    customer:{
        name:"Josiane NYIRARUKUNDO",
        customerTin:"112212323",
        customerReferenceNo: "234",
    },
    agent:{
        agentName:"Joxy",
        agentContact:"0780202567",
        agentId:"764565",
    }

}


document.addEventListener("DOMContentLoaded", () => {
const customerName = document.getElementById("customerName");
const customerTin = document.getElementById("customerTin");
const customerReferenceNo = document.getElementById("customerReferenceNo");
const agentName = document.getElementById("agentName");
const agentContact = document.getElementById("agentContact");
const agentId = document.getElementById("agentId");





customerName.textContent = data.customer.name;
customerTin.textContent = data.customer.customerTin;
customerReferenceNo.textContent=data.customer.customerReferenceNo;
agentName.textContent=data.agent.agentName;
agentContact.textContent=data.agent.agentContact;
agentId.textContent=data.agent.agentId;



})
