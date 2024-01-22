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

    if (anoNascimento > dataAtual.getFullYear() && mesNascimento > dataAtual.getMonth() && diaNascimento > dataAtual.getDate()) {
        futuro = true;
    }
    if (anoNascimento > dataAtual.getFullYear()) {
        futuro = true;
    } else if (anoNascimento == dataAtual.getFullYear()) {
        if (mesNascimento > (dataAtual.getMonth() + 1)) {
            futuro = true;
        }
        if (mesNascimento == (dataAtual.getMonth() + 1)) {
            if (diaNascimento > dataAtual.getDate()) {
                futuro = true;
            }
        }
    }

    if (anoNascimento.length < 4 || futuro || mesNascimento < 1 || mesNascimento > 12 || diaNascimento < 1 || diaNascimento > 31) {
        if (anoNascimento.length < 4 || anoNascimento > dataAtual.getFullYear()) {
            inputYear.classList.add('erro');
        }
        if (mesNascimento < 1 || mesNascimento > 12) {
            inputMonth.classList.add('erro');
        }
        if (diaNascimento < 1 || diaNascimento > 31) {
            inputDay.classList.add('erro');
        }
        if (futuro) {
            if (anoNascimento == dataAtual.getFullYear()) {
                if (mesNascimento > (dataAtual.getMonth() + 1)) {
                    inputMonth.classList.add("erro");
                }
                if (mesNascimento == dataAtual.getMonth() + 1) {
                    if (diaNascimento > dataAtual.getDate()) {
                        inputMonth.classList.add("erro");
                    }
                }
            }
        }

    } else {
        outputAnos.innerText = "--";
        outputMeses.innerText = "--";
        outputDias.innerText = "--";
        inputYear.classList.remove('erro');
        inputDay.classList.remove('erro');
        inputMonth.classList.remove('erro');

        if (mesNascimento < 10) {
            var temZero = mesNascimento.indexOf("0")
            if (temZero == -1) {
                mesNascimento = "0" + mesNascimento;
            }
        }

        if (diaNascimento < 10) {
            var temZero = diaNascimento.indexOf("0")
            if (temZero == -1) {
                diaNascimento = "0" + diaNascimento;
            }
        }
        if (anoNascimento.length < 4) {

        }

        var dataNascString = anoNascimento + "-" + mesNascimento + "-" + diaNascimento;


        const idade = calcularIdade(dataNascString);

        if (!idade.anos && !idade.meses && !idade.dias) {
            if (!idade.anos) {
                idade.anos = "put year";
            }
            if (!idade.meses) {
                idade.meses = "put month";
            }
            if (!idade.dias) {
                idade.dias = "put day";
            }
        } else {
            if (!idade.anos) {
                idade.anos = "0";
            }
            if (!idade.meses) {
                idade.meses = "0";
            }
            if (!idade.dias) {
                idade.dias = "0";
            }
        }

        const delay = (delayInms) => {
            return new Promise(resolve => setTimeout(resolve, delayInms));
        };

        const sample = async () => {
            for (let x = 1; x < idade.anos; x++){
                let delayres = await delay(100);
                outputAnos.innerText = x;
            }
            for (let y = 1; y < idade.meses; y++){
                let delayres = await delay(200);
                outputMeses.innerText = y;
            }
            for (let z = 1; z < idade.dias; z++){
                let delayres = await delay(230);
                outputDias.innerText = z;
            }
            
        };
        sample();
        console.log(diaNascimento, dataAtual.getDate(), Number(mesNascimento), dataAtual.getMonth());
        if(diaNascimento == dataAtual.getDate() && Number(mesNascimento) == (dataAtual.getMonth()+1)){
            felizAniversario();
        }
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

function felizAniversario() {
    var x = document.getElementById("confetti");
    x.classList.remove("confetti");
    x.classList.add("confetti-visible");
}



