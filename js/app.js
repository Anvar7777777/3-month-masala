// 1-masala
function convert(r){
    if(r == true){
        return "Yes"
    }
    else{
        return "No"
    }
}
let result = convert(true);
console.log(result);


// 2-masala
function sumOfNegatives(arr){
    const negatives = [];
    let s = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            negatives.push(arr[i]);
        }
    }
    for (let j = 0; j < negatives.length; j++){
        s+=negatives[j]
    }
    console.log(s);
}

sumOfNegatives([4, -5, -10, 6]);


// 3-masala
function sumOfTwoArrays(arr1,arr2){
    let arr = [arr1,arr2];
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length;j++){
            sum = sum + arr[i][j];
        }
    }
    console.log(sum);
}

sumOfTwoArrays([4, -5, -10, 6],[6, 9, 14, -1, 6]);

// 4-masala
let fillThisArray = [];
function generateAndSum(a){
    let sum = 0;
    for ( let i = 1; i <=a; i++){
        fillThisArray.push(i);
    }
    for (let i = 0; i < fillThisArray.length; i++){
        sum+=fillThisArray[i];
    }
    return console.log(sum);
}

generateAndSum(6);