document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);
document.getElementById("cover-ctn-search").addEventListener("scroll", ocultar_buscador);




const bars_search = document.getElementById("ctn-bars-search");
const cover_ctn_search = document.getElementById("cover-ctn-search");
const inputSearch = document.getElementById("inputSearch");
const box_search = document.getElementById("box-search");


function mostrar_buscador(){
    bars_search.style.display = "block";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();
}


function ocultar_buscador(){
    bars_search.style.display = "none";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
}