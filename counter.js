let section1=document.querySelector(".row")
let display_value=document.querySelectorAll(".column .card .num");
let interval=5000 
display_value.forEach((display_value)=>{
let startvalue=0;
let endvalue=parseInt(display_value.getAttribute("data-val"));
let duration = Math.floor(interval/endvalue);
let counter=setInterval(function(){
    startvalue+=1;
    display_value.textContent=startvalue;
    if(startvalue==endvalue){
        clearInterval(counter);
    }

},duration);});



        // Attach the scroll event listener]
// let nums = document.querySelectorAll(" .card span");
// let section = document.querySelector(" .three");
// let started = false; // Function Started ? No

// window.onscroll = function () {
//   if (window.scrollY >= section.offsetTop) {
//     if (!started) {
//       nums.forEach((num) => startCount(num));
//       console.log("open");
//       started = true;
//     }
//     console.log("not open");
//     started = true;
//   }
// };

// function startCount(el) {
//   let goal =parseInt(nums.getAttribute("data-val"));
//   // let goal1=el.dataset.goal1;
//   console.log(goal);
//   let count = setInterval(() => {
//     el.textContent++;
//     if (el.textContent == goal) {
//       clearInterval(count);
//     }
//   }, 2000 / goal);
// }








