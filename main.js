'use struct';

let valueN, valuePi, N = new Array(), resShennon = 0;

function getResHartley(){
  valueN = +document.getElementById('value_N').value;
  if ((valueN < 1)||(!valueN)){
    alert("Количество это цифры и оно врегда больше 1 :)");
  } else {
    let resHartley = Math.log2(valueN);
    document.getElementById("value_I").innerHTML = resHartley;
  }
}

function getCalcSh(){
  valuePi = +document.getElementById('value_Pi').value;
  if ((valuePi <= 0)||(valuePi > 1)||(!valuePi)){
    alert("Вероятность должна быть меньше или равно 1 и больше 0.");
  } else {
    N.push(valuePi);
    document.getElementById('result_n').innerHTML = N.length;
    document.getElementById('value_arr').innerHTML = N;
    for (let i = 0; i < N.length; i++){
      resShennon += (N[i] != 0) ? N[i] * Math.log2(N[i]) : 0;
    }
    document.getElementById('result_i_sh').innerHTML = "I = " + -resShennon;
  }
}