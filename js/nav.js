// Este método é disparado após o mouse passar pelo corpo do navbar
// afastando o conteúdo da página.
function navbarHover(){
    document.getElementById('principal').style.marginLeft = '250px';
}
// Este métode é ativado quando o mouse sai do navbar, desfazendo o
// feito do método anterior 
function fecharNavbar(){
    document.getElementById('principal').style.marginLeft = '79px';
}