// alert("Boas vindas");

let listaGenerica = ["a", "e", "i", "o", "u"];
let listaCodificada = ["ai", "enter", "imes", "ober", "ufat"];
let botao_criptografar = document.getElementsByClassName("botao_criptografar");
let mensagem = document.getElementById("mensagem");
let texto = document.getElementById("texto");

function criptografar() {
  mensagem.innerText = texto.value
    .split("")
    .map((e) => {
      if (listaGenerica.includes(e)) {
        return e.replace(
          listaGenerica[listaGenerica.indexOf(e)],
          listaCodificada[listaGenerica.indexOf(e)]
        );
      } else {
        return e;
      }
    })
    .join("");
}
function descriptografar() {
  let descriptografada = texto.value;
  listaCodificada.map((e) => {
    descriptografada = descriptografada.replaceAll(e, listaGenerica[listaCodificada.indexOf(e)]);
  });
  mensagem.innerText = descriptografada
}

// pairaibenterns poberr enterncairair enterssenter dentersaifimesober enter tenterr fimesnailimeszaidober enterlenter coberm sufatcenterssober
// gaibrimesenterllai