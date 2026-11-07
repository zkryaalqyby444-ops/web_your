
let card=document.getElementById("prant");
card.addEventListener("click",function addtext(){
 if(!card.querySelector("p")){
    let a=document.createElement("p");
    a.textContent="نستخدم مكونات عالية الجوده ونكهات طازجه";
    card.appendChild(a);
 }
})

let card2=document.getElementById("parn2");
card2.addEventListener("click", function BBB(){
    if(!card2.querySelector("p")){
let e=document.createElement("p");

e.textContent="نسعى لتقديم افضل تجربه لجميع عملائنا";
card2.appendChild(e);
}

})

let card3=document.getElementById("parnt3")
card3.addEventListener("click" , function SSS(){
    if(!card3.querySelector("p")){
    let s=document.createElement("p");
    s.textContent=" تتوفر لدينا خدمة توصيل لجميع انحاء المدينه";
    card3.appendChild(s);
    }
})