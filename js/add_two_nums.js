function doSomething(){
    let a = document.getElementById('inputA').value; //id가 inputA, inputB인 요소를 가져와 변수 a,b에 저장
    let b = document.getElementById('inputB').value;
    document.getElementById('valueA').innerHTML = a; //id가 valueA,B,C인 요소의 텍스트를 a,b값으로 수정
    document.getElementById('valueB').innerHTML = b;
    document.getElementById('valueC').innerHTML = Number(a) + Number(b);          
}