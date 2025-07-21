function calculadoraDeNivelRankeada(vitorias, derrotas) {
    return vitorias - derrotas;
}

function classificarNivel(saldo) {
    if (saldo <= 10) return "Ferro";
    if (saldo <= 20) return "Bronze";
    if (saldo <= 50) return "Prata";
    if (saldo <= 70) return "Ouro";
    if (saldo <= 80) return "Diamante";
    if (saldo <= 90) return "Lendário";
    return "Imortal";
}

// Exemplo de uso:
let nomeDoHeroi = "mgl";
let vitorias = 110;
let derrotas = 100;

let saldoVitorias = calculadoraDeNivelRankeada(vitorias, derrotas);
let nivel = classificarNivel(saldoVitorias);

console.log(`O Herói ${nomeDoHeroi} tem um saldo de vitórias de ${saldoVitorias} e está no nível ${nivel}!`);
