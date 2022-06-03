let saturate=document.querySelector("#saturate");
let contrast=document.querySelector("#contrast");
let brightness=document.querySelector("#brightness");
let sepia =document.querySelector("#spia");
let grayscale=document.querySelector("#grayscale");
let blur=document.querySelector("#blure");
let hueRotate=document.querySelector("#hue_rotate");
let upload=document.querySelector("input#upload");
let upload2=document.querySelector(".upload label");
let download=document.querySelector("#download");
let reset=document.querySelector("li span");
let img=document.querySelector(".imgcontainer .img img");
let imgcontainer=document.querySelector(".imgcontainer .img");
let filters=document.querySelectorAll("ul li input");
let canvas=document.querySelector("#canvas");
let ctx=canvas.getContext("2d");
// console.log(saturate,contrast,brightness,spia,grayscale,blure,hue_rotate,upload,download,reset,img)
function resetvalue(){
    img.style.filter='none';
    saturate.value='100';
    contrast.value='100';
    brightness.value='100';
    sepia.value='0';
    grayscale.value='0';
    blur.value='0';
    hueRotate.value='0';
}
   window.addEventListener("load",()=>{
       imgcontainer.style.display="none";
       download.style.display="none";
       reset.style.display="none";
       
   })
   upload.addEventListener("change",()=>{
    resetvalue();
    imgcontainer.style.display="block";
    download.style.display="block";
    reset.style.display="block";
    let file= new FileReader();
       file.readAsDataURL(upload.files[0]);
       file.addEventListener("load",()=>{
           img.src=file.result;
       })
       img.addEventListener("load",()=>{
           canvas.width=img.width;
           canvas.height=img.height;
           ctx.drawImage(img,0,0,canvas.width,canvas.height);
           img.style.display='none';
       })
   })
   filters.forEach(filter=>{
       filter.addEventListener("input",()=>{
           ctx.filter= `
               saturate(${saturate.value}%)
               contrast(${contrast.value}%)
               brightness(${brightness.value}%)
               sepia(${sepia.value}%)
               grayscale(${grayscale.value})
               blur(${blur.value}px)
               hue-rotate(${hueRotate.value}deg)   
           `
           ctx.drawImage(img,0,0,canvas.width,canvas.height);
       })
   })
   reset.addEventListener("click",()=>{
       resetvalue();
   })
   download.addEventListener("click",()=>{
       download.href=canvas.toDataURL();
   })