const container = document.querySelector('#container');
const body = document.querySelector("body");
const btn = document.createElement("button");
btn.textContent= "Change Size!";
btn.addEventListener("click", ()=>{
  const x = prompt("How many Squares? one side tell me!");
  if (x == null) return;
  const size = Number(x);
  if (!Number.isInteger(size)||size<1||size>100){
    alert("Enter a whole number between 1 and 100:");
    return;
  }
  createGrid(size);
});
body.insertBefore(btn, container);
function createGrid(size){
  container.innerHTML="";
  const squareSize = 320/size;
  const y=size*size;
  for (let i=0; i<y; i++){
    const div = document.createElement("div");
    div.classList.add("square");
    div.style.width=`${squareSize}px`;
    div.style.height=`${squareSize}px`;
    let interactions = 0;
    div.addEventListener("mouseenter", ()=>{
      const r = Math.floor(Math.random()*256);
      const g = Math.floor(Math.random()*256);
      const b = Math.floor(Math.random()*256);
      interactions++;
      const opacity=Math.min(interactions/10, 1);
      div.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
  });
  container.appendChild(div);
  }
}
createGrid(16);
