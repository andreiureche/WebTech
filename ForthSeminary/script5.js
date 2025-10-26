const vector = [1000,2500,3500,1500];
const procent = 10;

const increaseSalary = (array, number) => {
    if(!Array.isArray(array)){
        throw new Error("Not an array!");
    }
    if(typeof(number)!=="number"){
        throw new Error("Not a number!");

    }
    for(let i=0;i<array.length;i++){
        array[i] += array[i] * (number / 100);
        console.log(array[i]);
    }
}

try{
    increaseSalary(vector,procent);
    increaseSalary(vector,"Ana are mere.");
}
catch(error){
    console.warn(error);
}