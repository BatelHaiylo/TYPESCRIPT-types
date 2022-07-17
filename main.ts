let num : htmlElement = document.getElementById("userInput")
function greatherThenTen(): void{
    let userNum : number  = num.value
    userNum>10 ? console.log("greater then ten") : console.log("less then 10")
}

function Ten(): void{
    let userNum : number = num.value
    switch(userNum > 10){
        case false:
            console.log("less then 10");
            break;
        case true:
            console.log("greater then ten")
            break;
        default:
           console.log("equal to ten");
           break;

    }
}

function get(num1 : number , num2 : number) :void{
    let first : number = num1;
    let second : number= num2;
    if(first !== second){
    console.log(`bigger: ${Math.max(first,second)} smaller: ${Math.min(first,second)}`);
    }
    if(first === second){
        console.log("values are equal")
    }
}

function getMinNum(num1 : number , num2 : number):number {
  return Math.min(num1,num2)
}

function getMinNumOutOf3(num1 : number , num2 : number, num3 : number):number {
  return Math.min(num1,num2,num3)
}

function getAvgNumOutOf3(num1 : number , num2 : number, num3 : number):number {
  return (num1+num2+num3)/3
}

function getArrAvg(numArray :[] ):number{
  const initialValue = 0;
  const sumWithInitial = numArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,initialValue);
    return sumWithInitial/ numArray.length;
}

function getArrAvgOutOf4(numArray :[] ):number{
    const initialValue = 0;
    const sumWithInitial = numArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue,initialValue);
      return sumWithInitial;
  }

  function getSecArrOrgin(strArray:string[] ):string{
    return strArray[1];
}
// console.log(getSecArrOrgin(["asos","shein","prada"]))

function getFirstWordWhitA(strArray:string[]):string{
    for (let i = 0; i < strArray.length; i++){
       if (strArray[i][0] === 'A') {
         return strArray[i]
       }
  }
  return "hi"
}
// console.log(getFirstWordWhitA(["Batel","Ariel","Ditch","Avigail","ananas"]))

function evenMassage(numArray:number[]){
    let nums : number[] = [];
        numArray.forEach(item =>{
            if (item %2 == 0) {
              alert(item)
              nums.push(item)
           }
       })
  return nums 
}
// console.log(evenMassage([1,2,23,46,5]))

function getDate(str : string) :Date{
    let userDate : Date = new Date(str)
        return userDate
}
// console.log(getDate("20-08-1997"))

function getTextNumTimes(text : string, num : number):void{
    for(let i=0; i<num+1; i++){
        console.log(i,text)
    }
    return "Love you"
}
// console.log(getTextNumTimes("Batel",20))

function ageCheack(name:string, age : number) :string{
    let answer : string ;
    age > 18 ? answer = `welcome ${name}`: answer = `No entry ${name}`
   return answer
}
// console.log(ageCheack("Batel",24))

// function cheackFullNameFirstLetter(fName:string, lName:string) :string{
//     let answer : string ;
//     fName.charAt(0) === lName.charAt(0) ? answer = fName.charAt(0) : answer = "0";
//     return answer
// }
// // console.log(cheackFullNameFirstLetter("Batel","Haiylo"))

function cheackFullNameFirstLetter(fName:string, lName:string) :string{
    let answer : string = fName.charAt(0) === lName.charAt(0) ? fName.charAt(0) : "0";
    return answer
}
// console.log(cheackFullNameFirstLetter("Batel","Haiylo"))

function cheackArrLength(arr:any[]):string {
    switch(arr.length){
        case 0 :
        return "no data";
        case 1 : 
        return "singel data";
        case 2:
        return "cuple data";
        default:
        return "many data"
    }
}
// console.log(cheackArrLength([]))

function cheackOrder(numArr:number[], text:string) : number[] {
    switch(text){
        case [...text].reverse().join(''):
        return numArr.reverse();
        case [...text].sort().join(''):
        return numArr.sort((a,b)=>a-b);
        case [...text].sort().reverse().join(''):
        return numArr.sort((a,b)=>b-a);
        case "text":
        return numArr.join('');
        default:
        return numArr
    }
}
// console.log(cheackOrder([8,77,84,85,5],"text"))

function compareNumbers(arr:any[]):any{
    arr.forEach(item =>{
        switch(typeof(item)){
            case "string":
            let strArr:string[] = [] ;
            strArr.push(item)
            break;
            case "boolean":
            let bolArr:boolean[] = [] ;
            bolArr.push(item)
            break;
            case "number":
            let numsArr:number[] = [] ;
            numsArr.push(item)
            break;
            case "object":
            let objArr:object[] = [] ;
            objArr.push(item)
            break;
        }
    })
    let sortArr:any[] = [...strArr, ...bolArr, ...numsArr, ...objArr]
    return sortArr
}
console.log(compareNumbers([8,"77",84,"85",5,"ast",true]))

