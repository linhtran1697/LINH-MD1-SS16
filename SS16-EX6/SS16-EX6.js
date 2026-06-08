// Tạo hàm tính tổng các phần tử trong mảng, với các mảng như sau:
// (Gợi ý: có thể dùng reduce() trong javascript)

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [10, 20, 30, 40, 50];
const arr3 = [1, 3, 5, 7, 9]; 

function sumArray(arr) {
     return arr.reduce((sum, current) => sum + current, 0);
}
console.log("sum arr1 =", sumArray(arr1));
console.log("sum arr2 =", sumArray(arr2));
console.log("sum arr3 =", sumArray(arr3));
