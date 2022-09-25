function convertFunction(){
     let val="";
     val=document.getElementById("text").value.toString();
     let strArr =  val.split(" ");
    
     let camelCase="";
     let pascalCase="";
     let snakeCase="";
     let screemingSnake="";
     let kebabCase="";
     let screemingKebabCase="";

    //shaileshTripathi (Camel Case)
    for(let i=0;i<strArr.length;i++)
     {
        if(i==0){
            camelCase=strArr[0];
        }

        else{
        let str=strArr[i];
        camelCase+=str[0].toUpperCase()+str.slice(1);
        }
     }
    document.getElementById("camel-case").innerText=camelCase;


    //ShaileshTripathi (Pascal Case)
    for(let i=0;i<strArr.length;i++)
    {
       let str=strArr[i];
       pascalCase+=str[0].toUpperCase()+str.slice(1);
    }
   document.getElementById("pascal-case").innerText=pascalCase;



  // this_is_a_very_long_variable_name (snakecase)
    for(let i=0;i<strArr.length;i++)
     {
        let str=strArr[i];
        if(i==strArr.length-1)
        {
            snakeCase+=str.toLowerCase();
        }
        else{
            snakeCase+=str.toLowerCase()+"_";
        }
     }
    document.getElementById("snake-case").innerText=snakeCase;

  
    // THIS_IS_A_VERY_LONG_VARIABLE_NAME screamingsnakeCase
    for(let i=0;i<strArr.length;i++)
     {
        let str=strArr[i];
        if(i==strArr.length-1)
        {
            screemingSnake+=str.toUpperCase();
        }
        else{
            screemingSnake+=str.toUpperCase()+"_";
        }
     }
    document.getElementById("screaming-snake-case").innerText=screemingSnake;
   
  // this-is-a-very-long-variable-name (kebab case)
  for(let i=0;i<strArr.length;i++)
  {
     let str=strArr[i];
     if(i==strArr.length-1)
     {
         kebabCase+=str.toLowerCase();
     }
     else{
         kebabCase+=str.toLowerCase()+"-";
     }
  }
 document.getElementById("kebab-case").innerText=kebabCase;


  // THIS-IS-A-VERY-LONG-VARIABLE-NAME (screaming kebab case)
  for(let i=0;i<strArr.length;i++)
  {
     let str=strArr[i];
     if(i==strArr.length-1)
     {
         screemingKebabCase+=str.toUpperCase();
     }
     else{
         screemingKebabCase+=str.toUpperCase()+"-";
     }
  }
 document.getElementById("screaming-kebab-case").innerText=screemingKebabCase;


}





