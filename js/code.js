function getBanner(id){
    if(id == 'naruto'){
        document.getElementById('imgBanner').src = 'imagens/bg_naruto.jpeg';
        document.getElementById('titulo').textContent = 'Naruto Shippuden'
    }
    if(id == 'ginny'){
        document.getElementById('imgBanner').src = 'imagens/bg_ginny.jpg';
        document.getElementById('titulo').textContent = 'GINNY E GEORGIA'
    }
    if(id == 'riverdale'){
        document.getElementById('imgBanner').src = 'imagens/bg_riverdale.jpg';
        document.getElementById('titulo').textContent = 'Riverdale'
    }
}