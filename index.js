let salario = 2000;
let metaSalarial = 10000;
let periodoMesesParaAumento = 6;
let reajusteSalarial = .10;

let meses = 1;

while (salario < metaSalarial) {
	if (meses !== 0 && meses % periodoMesesParaAumento === 0) {
		salario += reajusteSalarial * salario;
	}
	console.log(`Meses: ${meses} mes(es).`);
	console.log(`Salário: R$${salario.toFixed(2)}`);
	meses++;
}
console.log(`O tempo necessário para alcançar o a meta salarial de R$${metaSalarial} foi de ${Math.floor(meses/12)} ano(s) e ${meses%12} mes(es).`)