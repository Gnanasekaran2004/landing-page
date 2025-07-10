const hamburger = document.getElementById("resbtn");
const nav = document.getElementById("navbar");
const blue=document.getElementById("blue");
const black=document.getElementById("black");
const shoeW=document.getElementById("shoeW");
const shoeB=document.getElementById("shoeB");
const countdown = document.getElementById("countdown");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
});


const addCart = document.getElementById("add");
addCart.addEventListener("click", () => {
  addCart.textContent = "✔ Added!";
  setTimeout(() => (addCart.textContent = "Add to cart"), 1000);
});
 
blue.addEventListener("click",()=>{
    shoeW.style.display="none";
    shoeB.style.display="block"
})
black.addEventListener("click",()=>{
    shoeW.style.display="block";
    shoeB.style.display="none"
})
const offerEnd = new Date();
offerEnd.setHours(offerEnd.getHours() + 12);
function updateCountdown() {
  const now = new Date();
  const diff = offerEnd - now;
  if (diff <= 0) {
    countdown.innerText = "Expired";
    return;
  }
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);
  countdown.innerText = `${hours}h ${mins}m ${secs}s`;
}
setInterval(updateCountdown, 1000);