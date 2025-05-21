export function groupAnagrams(words: string[]): string[][]{
    const myMap: Map<string, string[]> = new Map();
    for(let element of words){
        let key=element.split('').sort().join('');
        if (!myMap.has(key)) {
            myMap.set(key, []);

        }
       
       myMap.get(key)!.push(element);
      
    }
    
    return Array.from(myMap.values());
}
