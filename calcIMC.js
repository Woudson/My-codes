function Individuo (nome, sobrenome, a, p){

    return{
        nome,
        sobrenome,
        altura: a,
        peso: p,
        calculoIMC(){
            const indice = this.peso/(this.altura ** 2).toFixed(1)
            if(indice < 18.5){
                console.log("Abaixo do peso");
            } else if(indice >=18.5 && indice <24.9){
                console.log("Peso normal");
            } else if (indice >= 25 && indice< 29.9){
            console.log("Acima do peso");
            } else if (indice >=30 && indice < 34.9){
                console.log("Obesidade");
            }else if (indice >=35 && indice < 39.9){
                console.log("Obesidade 2");
            }else if (indice >=40){
                console.log("Obesidade");
            }
        } 
    }
}
// Altere as informações abaixo com os dados desejados.
const p1 = Individuo("Woudson", "Henrique", 1.67, 70)
p1.calculoIMC();
