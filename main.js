function Squar(){
    let a = +document.getElementsByName("a")[0].value;
    let b = +document.getElementsByName("b")[0].value;
    let result = document.getElementById("result");
    let s = a * b;
    result.innerHTML = "Площадь прямоугольника = " + s;
}

function courseSale(){
    const courseName = document.getElementById("courseName").value;
    const PYTHON_PRICE = 12000000
    const FRONTEND_PRICE = 14000000
    const UX_UI_PRICE = 9000000
    let price 
    if(courseName == ""){
        price = 0;
    }else if(courseName == "py"){
        price = PYTHON_PRICE
    }else if(courseName == "fr"){
        price = FRONTEND_PRICE
    }else if(courseName == "ux"){
        price = UX_UI_PRICE
    }else {
        price = "???"
    }

    const discountRange = document.getElementById("discountRange").value
    const discountValue = document.getElementById("discountValue")
    discountValue.innerHTML = discountRange +"%"
    const sum = price/100*(100-discountRange)
    const resultValue = document.getElementById("sale")
    resultValue.value = sum + " сум"

}

function tel(){
    const code = document.getElementById("code").value;
    const UZ = "+998";
    const KZ = "+7";
    const US = "+1";

    let tel
    if( code == ""){
        tel =  "Вы не выбрали код"
    }else if( code == "Uz"){
        tel = UZ;
    }else if( code == "Kz"){
        tel = KZ;
    }else if( code == "Us"){
        tel = US;
    }else {
        tel = "Надо же было умудриться вызвать эту команду"
    }
    
    const codeNumber = document.getElementById("codeNumber");
    codeNumber.value = tel;

}


function Send(){
    const name = document.getElementById("name").value;
    const code = document.getElementById("code").value;
    const codeNumber = document.getElementById("codeNumber").value;
    const agree = document.getElementById("agree").checked;
    const buttonSend = document.getElementById("buttonSend");

    if(name.length != 0 && code.length != 0 && codeNumber.length != 0 && agree == true){
        buttonSend.disabled = false;
    } else{
        buttonSend.disabled = true;
    }


}

