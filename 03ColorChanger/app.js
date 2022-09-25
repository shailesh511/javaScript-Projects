function changeColor(){
    let color="#";

    let arr=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    for(let i=0;i<6;i++)
    {
        color+=arr[Math.floor(Math.random()*16)];
    }
    document.getElementById("canvas").style.backgroundColor=color;
}