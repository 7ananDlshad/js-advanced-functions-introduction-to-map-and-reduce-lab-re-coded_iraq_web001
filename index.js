// Your code here
let array = [1, 2, 3, -9];
let dune = ["paul", "gurney", "vladimir", "jessica", "chani"]
let  smallArr = [1,2,3]
<<<<<<< HEAD
let boolArr =  [1, 2, true, "razmatazz"]
let boolSecond = [ false, null, null, null, true]
=======
let boolArr = [ false, null, null, null, true]
>>>>>>> cf7e0ed3744eb049e4f379056e87a0741b35efad

function mapToNegativize(sourceArray){
let newArr=[]
  for(let i = 0; i < sourceArray.length; i++){
    let result = sourceArray[i] * -1;
        newArr.push(result)
    }
 return newArr
}
mapToNegativize(array);


let notchange = dune.map(mapToNoChange);
function  mapToNoChange(sourceArray){
  return sourceArray;
}

function mapToDouble(sourceArray){
  let newArr=[]
  for(let i = 0; i < sourceArray.length; i++){
    let result = sourceArray[i] * 2;
        newArr.push(result)
    }
 return newArr
}
mapToDouble(array)

function mapToSquare(sourceArray){
    let newArr=[]
  for(let i = 0; i < sourceArray.length; i++){
    let result = sourceArray[i] ** 2;
        newArr.push(result)
    }
 return newArr
}
mapToSquare(array)

function reduceToTotal(sourceArray, startingPoint = 0){
  
  for (let i = 0; i < sourceArray.length; i++){
    startingPoint = sourceArray[i] + startingPoint
  }
  return startingPoint
}

reduceToTotal(smallArr)


function reduceToAllTrue(sourceArray){
  for(let i = 0; i < sourceArray.length; i++){
<<<<<<< HEAD
    if(sourceArray[i] === false || sourceArray[i] === null || !sourceArray[i]){
      return false;
    }
  }
  return true;
}
reduceToAllTrue(boolArr);


function reduceToAnyTrue(sourceArray){
    for(let i = 0; i < sourceArray.length; i++){
    if(sourceArray[i] === true ){
      return true;
    }
  }
  return false;
}
reduceToAnyTrue(boolSecond)
=======
    
    if(sourceArray[i] === false || null){
      return true
    }
    
    if(sourceArray[i] === true ){
      return true
    }
    
  }
}
reduceToAllTrue(boolArr);
>>>>>>> cf7e0ed3744eb049e4f379056e87a0741b35efad
