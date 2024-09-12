function startSegitiga() {
    var element = document.getElementsByClassName('segitiga')[0];
    element.style.display = "block";
}

function hitungLuasSegitiga() {
    let alas_segitiga = parseInt(document.getElementsByName('alas_segitiga')[0].value);
    let tinggi_segitiga = parseInt(document.getElementsByName('tinggi_segitiga')[0].value);
    
    if (isNaN(alas_segitiga) || isNaN(tinggi_segitiga)) {
        alert("Nilai alas atau tinggi tidak valid!");
        return;
    }

    let luas_segitiga = 0.5 * alas_segitiga * tinggi_segitiga;
    console.log("Alas Segitiga:", alas_segitiga);
    console.log("Tinggi Segitiga:", tinggi_segitiga);
    console.log("Hasil Luas:", luas_segitiga);

    let rumus = "L = 1/2 x a x t <br> L = 1/2 x " + alas_segitiga + " x " + tinggi_segitiga;

    document.getElementById("hasil_segitiga").innerHTML = 
    rumus + "<br> L = " + luas_segitiga + " cm<sup> 2 </sup>"
    
}

function resetLuasSegitiga() {
    document.getElementsByName('alas_segitiga')[0].value = ""
    document.getElementsByName('tinggi_segitiga')[0].value = ""
    document.getElementById("hasil_segitiga").innerHTML = ""
    console.log("Sudah Terreset!")
}
