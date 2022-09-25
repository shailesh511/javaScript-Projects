const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    
})

generateEl.addEventListener('click', () => {
    let strongPass="";
    let length=0;

    strongPass = generatePassword(randomFunc.lower, randomFunc.upper, randomFunc.number, randomFunc.symbol, length);
    document.getElementById("result").innerText=strongPass;
})

function generatePassword(lower, upper, number, symbol, length) {
    let v1=lower();
    let v2=upper();
    let v3=number();
    let v4=symbol();

    let pass="";
    pass=v1+v2+v3+v4;

   return pass;
}

function getRandomLower() {
   let l="";
  let str="abcdefghijklmnopqrstuvwxyz";

  for(let i=0;i<5;i++)
  {
    l+=str[Math.floor(Math.random()*26)]
  }

   return l;
}

function getRandomUpper() {
    let u="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i=0;i<5;i++)
    {
      u+=str[Math.floor(Math.random()*26)]
    }
    return u;
}

function getRandomNumber() {
    let n="";
    let str="0123456789"

    for(let i=0;i<5;i++)
    {
        n+=str[Math.floor(Math.random()*10)]
    }
    return n;
}

function getRandomSymbol() {
    let s="";
    let str="~@#$%^&*<>?,./';";

    for(let i=0;i<5;i++)
    {
        s+=str[Math.floor(Math.random()*16)]
    }
    return s;
}