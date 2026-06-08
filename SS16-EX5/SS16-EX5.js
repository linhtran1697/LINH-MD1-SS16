// Cho người dùng nhập vào chuỗi ký tự và viết hàm kiểm tra xem đó có phải chuỗi ký tự đối xứng không:
// Người dùng nhập chuỗi bằng hàm prompt()
// Viết hàm isPalindrome() để kiểm tra chuỗi đối xứng
// Thực hiện thông báo cho người dùng bằng alert() có phải chuỗi đối xứng không.
let str = prompt("Nhập vào một chuỗi:");


function isPalindrome(text) {
   
    let newText = text.toLowerCase().replace(/\s/g, "");

  
    let reversed = newText.split("").reverse().join("");

    
    return newText === reversed;
}


if (isPalindrome(str)) {
    console.log("Đây là chuỗi đối xứng");
} else {
    console.log("Đây không phải chuỗi đối xứng");
}