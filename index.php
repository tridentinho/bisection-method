<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Testes</title>
    <script src="/calc/scripts/calc.js"></script>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
</head>
<body>
    <div class="col infos">
        <form>
            <label>Formula</label>
            <div class="col">
            X
            ^
            <input type="number" id="form-1" value="3">
            <input type="text" id="sig-1" value="-">
            <input type="number" id="form-2" value="8">
            .
            X
            <input type="text" id="sig-2" value="-">
            <input type="number" id="form-3" value="2">
            </div>
            <label>Numeros</label>
            <div class="col">
            <input type="number" id="n1" value="2.5">
            <input type="number" id="n2" value="3">
            <button id="submit">Calcular</button>
            </div>
        </form>
    </div>
    <textarea id="result" readonly="true"></textarea>
    <script>
        var btn = document.getElementById('submit').addEventListener(
            "click", (e)=>{
                form1 = document.getElementById('form-1').value;
                s1 = document.getElementById('sig-1').value;
                form2 = document.getElementById('form-2').value;
                s2 = document.getElementById('sig-2').value;
                form3 = document.getElementById('form-3').value;
                //alert('X^'+form1+s1+form2+'.X'+s2+form3);
                n1 = document.getElementById('n1').value;
                n2 = document.getElementById('n2').value;

                var numeros = [parseFloat(n1), parseFloat(n2)];
                var f = new formula(form1, form2, form3);
                var pm = pontoMedio(numeros);
                var polos = definirPolos(polos, numeros, f);
                resolver(f, polos, pm);

                document.getElementById('result').scrollTop = document.getElementById('result').scrollHeight;
                e.preventDefault();
            },
            false
        );
    </script>
</body>
</html>