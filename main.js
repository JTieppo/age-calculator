function uneString() {
    var dataAtual = new Date(); 
    var outputAnos = document.getElementById("outputAnos");
    var outputMeses = document.getElementById("outputMeses");
    var outputDias = document.getElementById("outputDias");

    var anoNascimento = String(document.getElementById("anoNascimento").value);
    var mesNascimento = String(document.getElementById("mesNascimento").value);
    var diaNascimento = String(document.getElementById("diaNascimento").value);

    var inputYear = document.getElementById("inputYear");
    var inputMonth = document.getElementById("inputMonth");
    var inputDay = document.getElementById("inputDay"); 

    var futuro = false;

    if(anoNascimento > dataAtual.getFullYear() && mesNascimento > dataAtual.getMonth() && diaNascimento > dataAtual.getDate()){
        futuro = true;
    }
    if(anoNascimento > dataAtual.getFullYear()){
        futuro = true;
    }else if(anoNascimento == dataAtual.getFullYear()){
        if (mesNascimento > (dataAtual.getMonth() + 1)){
            futuro = true;
        }
        if (mesNascimento == (dataAtual.getMonth() + 1)){
            if(diaNascimento > dataAtual.getDate()){
                futuro = true;
            }
        }
    }
    
    if (anoNascimento.length < 4 || futuro || mesNascimento < 1 || mesNascimento > 12 || diaNascimento < 1 || diaNascimento > 31) {
        if (anoNascimento.length < 4 || anoNascimento > dataAtual.getFullYear()) {
            inputYear.classList.add('erro');
        } else {
            inputYear.classList.remove()
        }
        if (mesNascimento < 1 || mesNascimento > 12) {
            inputMonth.classList.add('erro');
        } else {
            inputMonth.classList.remove('erro');
        }
        if (diaNascimento < 1 || diaNascimento > 31){
            inputDay.classList.add('erro');
        } else {
            inputMonth.classList.remove('erro');
        }
        if(futuro){
            if (anoNascimento == dataAtual.getFullYear()){
                if (mesNascimento > (dataAtual.getMonth() + 1)){
                    inputMonth.classList.add("erro");
                    console.log((dataAtual.getMonth() + 1));
                }
                if (mesNascimento == dataAtual.getMonth() + 1){
                    if(diaNascimento > dataAtual.getDate()){
                        inputMonth.classList.add("erro");
                    }
                }
            }
        }
        console.log("");
    } else {
        inputYear.classList.remove('erro');
        inputDay.classList.remove('erro');
        inputMonth.classList.remove('erro');

        if(mesNascimento < 10){
            var temZero = mesNascimento.indexOf("0")
            if (temZero == -1){
                mesNascimento = "0" + mesNascimento;
            } 
        }

        if(diaNascimento < 10){
            var temZero = diaNascimento.indexOf("0")
            if (temZero == -1){
                diaNascimento = "0" + diaNascimento;
            } 
        }
        if (anoNascimento.length < 4){
            
        }

        var dataNascString = anoNascimento + "-" + mesNascimento + "-" + diaNascimento; 
        

        const idade = calcularIdade(dataNascString);
        console.log(`Idade: ${idade.anos} anos, ${idade.meses} meses e ${idade.dias} dias`);

        console.log(idade.anos, idade.meses, idade.meses);
        if(!idade.anos && !idade.meses && !idade.dias){
            if (!idade.anos){
                idade.anos = "put year";
            }
            if (!idade.meses){
                idade.meses = "put month";
            }
            if (!idade.dias){
                idade.dias = "put day";
            }
        } else {
            if (!idade.anos){
                idade.anos = "0";
            }
            if (!idade.meses){
                idade.meses = "0";
            }
            if (!idade.dias){
                idade.dias = "0";
            }
        }
        console.log(idade.anos);
        outputAnos.innerText = idade.anos;
        outputMeses.textContent = idade.meses;
        outputDias.innerText = idade.dias;
    }
}


function calcularIdade(dataNascimento) {
    const dataNasc = new Date(dataNascimento);
    const hoje = new Date();


    let anos = hoje.getFullYear() - dataNasc.getFullYear();
    let meses = hoje.getMonth() - dataNasc.getMonth();
    let dias = hoje.getDate() - dataNasc.getDate();


    if (meses < 0 || (meses === 0 && dias < 0)) {
        anos--;
        meses = (12 + meses) % 12;
    }

    if (dias < 0) {
        const diasNoMesAnterior = new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
        dias = diasNoMesAnterior + dias;
    }

    return { anos, meses, dias };
}

