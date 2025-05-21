export function sumEvenNumbers(arr: number[]): number {
    let n: number = arr.length;
    let sum_total: number = 0;
    for (let i:number = 0; i < n; i++) {
        if (arr[i] % 2 === 0) {
            sum_total += arr[i];
        }
    }
    return sum_total;
}
