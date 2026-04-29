function sendWhatsApp(e){
e.preventDefault();

const name=document.getElementById("name").value;
const phone=document.getElementById("phone").value;
const msg=document.getElementById("msg").value;

const text=`Hello ENKS,%0AName: ${name}%0APhone: ${phone}%0ARequirement: ${msg}`;

window.open(`https://wa.me/?text=${text}`,"_blank");
}
