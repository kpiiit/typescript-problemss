export function flattenArray(arr: any[]): any[]{
    let arr1 : any[]=new Array();
    function flattened(arr:any[]){
        for(let element of arr){
            if(Array.isArray(element)){
                flattened(element);
            }
            else{
                arr1.push(element);
            }
        }
    }
   flattened(arr);
   return arr1;
}
