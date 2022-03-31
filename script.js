// Variables
const   peonBlack_1 = document.querySelector(".peon-black-1"),
        peonBlack_2 = document.querySelector(".peon-black-2"),
        peonBlack_3 = document.querySelector(".peon-black-3"),
        peonBlack_4 = document.querySelector(".peon-black-4"),
        peonBlack_5 = document.querySelector(".peon-black-5"),
        peonBlack_6 = document.querySelector(".peon-black-6"),
        peonBlack_7 = document.querySelector(".peon-black-7"),
        peonBlack_8 = document.querySelector(".peon-black-8");

const   peonWhite_1 = document.querySelector(".peon-white-1"),
        peonWhite_2 = document.querySelector(".peon-white-2"),
        peonWhite_3 = document.querySelector(".peon-white-3"),
        peonWhite_4 = document.querySelector(".peon-white-4"),
        peonWhite_5 = document.querySelector(".peon-white-5"),
        peonWhite_6 = document.querySelector(".peon-white-6"),
        peonWhite_7 = document.querySelector(".peon-white-7"),
        peonWhite_8 = document.querySelector(".peon-white-8");

// Piezas negras
peonBlack_1.addEventListener("click",()=>{
    document.querySelector(".a6").classList.add("green"); 
    document.querySelector(".a5").classList.add("green");
});
peonBlack_2.addEventListener("click",()=>{
    document.querySelector(".b6").classList.add("green"); 
    document.querySelector(".b5").classList.add("green");
});
peonBlack_3.addEventListener("click",()=>{
    document.querySelector(".c6").classList.add("green"); 
    document.querySelector(".c5").classList.add("green");
});
peonBlack_4.addEventListener("click",()=>{
    document.querySelector(".d6").classList.add("green"); 
    document.querySelector(".d5").classList.add("green");
});
peonBlack_5.addEventListener("click",()=>{
    document.querySelector(".e6").classList.add("green"); 
    document.querySelector(".e5").classList.add("green");
});
peonBlack_6.addEventListener("click",()=>{
    document.querySelector(".f6").classList.add("green"); 
    document.querySelector(".f5").classList.add("green");
});
peonBlack_7.addEventListener("click",()=>{
    document.querySelector(".g6").classList.add("green"); 
    document.querySelector(".g5").classList.add("green");
});
peonBlack_8.addEventListener("click",()=>{
    document.querySelector(".h6").classList.add("green"); 
    document.querySelector(".h5").classList.add("green");
});

// Piezas blancas
peonWhite_1.addEventListener("click",()=>{
    console.log("Activado peon 1");
});
peonWhite_2.addEventListener("click",()=>{
    console.log("Activado peon 2");
});
peonWhite_3.addEventListener("click",()=>{
    console.log("Activado peon 3");
});
peonWhite_4.addEventListener("click",()=>{
    console.log("Activado peon 4");
});
peonWhite_5.addEventListener("click",()=>{
    console.log("Activado peon 5");
});
peonWhite_6.addEventListener("click",()=>{
    console.log("Activado peon 6");
});
peonWhite_7.addEventListener("click",()=>{
    console.log("Activado peon 7");
});
peonWhite_8.addEventListener("click",()=>{
    console.log("Activado peon 8");
});
