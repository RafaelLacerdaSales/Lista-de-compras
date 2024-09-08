import { verificarListaVazia } from "./verificarListaVazia.js";
import { verificarListaComprados } from "./verificarListaComprados.js";

const listaDeCompras = document.getElementById('lista-de-compras');
const listaComprados = document.getElementById('lista-comprados');

const excluirItem = (elememto) =>{
    let confirmacao = confirm('Tem certeza que deseja excluir eese item?');

    if(confirmacao){
        elememto.remove();

        verificarListaVazia(listaDeCompras);
        verificarListaComprados(listaComprados);
    } 
}
export { excluirItem };