let val=document.querySelector(".btn");

let arr=["What do Alexander the Great and Winnie the Pooh have in common? Same middle name.","I was horrified when my wife told me that my six-year-old son wasn't actually mine. Apparently I need to pay more attention during school pick-up.","What is the opposite of a croissant? A happy uncle.","If April showers bring May flowers, what do May flowers bring? Pilgrims","Which branch of the military accepts toddlers? The infantry","Did you know you can actually listen to the blood in your veins? You just have to listen varicosely.","Though I enjoy the sport, I could never date a tennis player. Love means nothing to them.","I have a joke about time travel, but I'm not gonna share it. You guys didn't like it.","What's the opposite of irony? Wrinkly.","I was kidnapped by mimes once. They did unspeakable things to me."]
document.querySelector(".joke").innerText="Click the button to get the joke...";
val.addEventListener("click",()=>{
    document.querySelector(".joke").innerText=arr[Math.floor(Math.random()*10)];
})
