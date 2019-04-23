var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var cal = document.querySelector('button.cal');

cal.onclick = function() {
    var num1 = parseInt(document.querySelector('.num1').value); 
    var num2 = parseInt(document.querySelector('.num2').value);
    var result = document.querySelector('.result');
    if(!num1 || !num2) {
        alert('请输入需要运算的数字');
        document.querySelector('.num1, .num2').value = '';
        result.value = '';
    }else {
        result.value = multiply(num1, num2);
    }
    
}
function multiply(num1, num2) {
    var num3 = num1 * num2;
    return num3;
}

// document.querySelector('section').addEventListener('copy',function(){
//     alert('请登录后操作');
//     return false;
// });
//禁止复制
document.querySelector('section').oncontextmenu=function(e){
    e.preventDefault();
    return false;
}
document.querySelector('section').onselectstart=function(e){
    e.preventDefault();
    return false;
};
var myImage = document.querySelector('img.img1');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '../images/1.jpg') {
        myImage.setAttribute('src', '../images/2.jpg');
    } else {
        myImage.setAttribute('src', '../images/1.jpg');
    }
}

var h2 = document.querySelector('h2');
function content(){
    h2.textContent = localStorage.getItem('content');
}
h2.onclick = function() {
    setContent();
}

function setContent() {
    var myContent = prompt('请输入新的标题');
    if (myContent){
        localStorage.setItem('content', myContent);
        h2.textContent = localStorage.getItem('content');     
    } else {
        return false;
    }
    
}

