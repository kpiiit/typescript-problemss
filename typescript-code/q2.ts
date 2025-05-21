export function findDuplicates(arr: string[]): string[]{
    let final_string:string[]=[];
    let myMap = new Map<string, number>();
    for(let i:number=0;i<arr.length;i++){
        if(myMap.has(arr[i])){
           let Value = myMap.get(arr[i]);
           if(Value==1){
           myMap.set(arr[i],2);
           final_string.push(arr[i]);
           }
           
        }
        else{
            myMap.set(arr[i], 1);
        }
    }

    
    return final_string;
} 
