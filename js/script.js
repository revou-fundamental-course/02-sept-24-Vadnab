/* SEGITIGA */

console.log("UDAH JALAN JS NYA")


function startSegitiga() {
    var element = document.getElementsByClassName('segitiga')[0];
    element.style.display = "block";
    var element = document.getElementsByClassName('jajargenjang')[0];
    element.style.display = "none";
    console.log("udah start, pindah ke segitiga")
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

    let rumuss_L = "L = 1/2 x a x t <br> L = 1/2 x " + alas_segitiga + " x " + tinggi_segitiga;

    document.getElementById("hasilL_segitiga").innerHTML = 
    rumuss_L + "<br> L = " + luas_segitiga + " cm<sup> 2 </sup>"
    
}

function resetLuasSegitiga() {
    document.getElementsByName('alas_segitiga')[0].value = ""
    document.getElementsByName('tinggi_segitiga')[0].value = ""
    document.getElementById("hasilL_segitiga").innerHTML = " "
    console.log("Sudah Terreset!")
}

function hitungKelilingSegitiga() {
    let sisi1_segitiga = parseInt(document.getElementsByName('sisi1_segitiga')[0].value);
    let sisi2_segitiga = parseInt(document.getElementsByName('sisi2_segitiga')[0].value);
    let sisi3_segitiga = parseInt(document.getElementsByName('sisi3_segitiga')[0].value);

    if (isNaN(sisi1_segitiga) || isNaN(sisi2_segitiga) || isNaN(sisi3_segitiga)) {
        alert("Nilai sisi tidak valid!");
        return;
    }

    let keliling_segitiga = sisi1_segitiga + sisi2_segitiga + sisi3_segitiga;
    console.log("Sisi 1 Segitiga: ", sisi1_segitiga)
    console.log("Sisi 2 Segitiga: ", sisi2_segitiga)
    console.log("Sisi 3 Segitiga: ", sisi3_segitiga)

    let rumuss_K = "K = s1 + s2 + s3 <br> K = " + sisi1_segitiga + " + " + sisi2_segitiga + " + " + sisi3_segitiga;
    
    document.getElementById("hasilK_segitiga").innerHTML = 
    rumuss_K + "<br> K = " + keliling_segitiga + " cm"
}

function resetKelilingSegitiga() {
    document.getElementsByName('sisi1_segitiga')[0].value = ""
    document.getElementsByName('sisi2_segitiga')[0].value = ""
    document.getElementsByName('sisi3_segitiga')[0].value = ""
    document.getElementById("hasilK_segitiga").innerHTML = " "
    console.log("Sudah Terreset!")
}

/* JAJAR GENJANG */

function startJajarGenjang() {
    var element = document.getElementsByClassName('jajargenjang')[0];
    element.style.display = "block";
    var element = document.getElementsByClassName('segitiga')[0];
    element.style.display = "none";
    console.log("udah start, pindah ke jajargenjang")
}

function hitungLuasJajarGenjang() {
    let alas_jg = parseInt(document.getElementsByName('alas_jajargenjang')[0].value);
    let tinggi_jg = parseInt(document.getElementsByName('tinggi_jajargenjang')[0].value);
    
    if (isNaN(alas_jg) || isNaN(tinggi_jg)) {
        alert("Nilai alas atau tinggi tidak valid!");
        return;
    }

    let luas_jg = alas_jg * tinggi_jg;
    console.log("Alas Jajar Genjang:", alas_jg);
    console.log("Tinggi Jajar Genjang:", tinggi_jg);
    console.log("Hasil Luas:", luas_jg);

    let rumusjg_L = "L = a x t <br> L = " + alas_jg + " x " + tinggi_jg;

    document.getElementById("hasilL_jajargenjang").innerHTML = 
    rumusjg_L + "<br> L = " + luas_jg + " cm<sup> 2 </sup>"
    
}

function resetLuasJajarGenjang() {
    document.getElementsByName('alas_jajargenjang')[0].value = ""
    document.getElementsByName('tinggi_jajargenjang')[0].value = ""
    document.getElementById("hasilL_jajargenjang").innerHTML = " "
    console.log("Sudah Terreset!")
}

function hitungKelilingJajarGenjang() {
    let alastutup_jg = parseInt(document.getElementsByName('alastutup_jajargenjang')[0].value);
    let sisimiring_jg = parseInt(document.getElementsByName('sisimiring_jajargenjang')[0].value);

    if (isNaN(alastutup_jg) || isNaN(sisimiring_jg)) {
        alert("Nilai a dan c atau b dan d tidak valid!");
    }

    let keliling_jg = 2 * (alastutup_jg + sisimiring_jg)
    console.log("A dan C ", alastutup_jg)
    console.log("B dan D", sisimiring_jg)

    let rumusjg_K = "K = a + b + c + d <br> K = " + alastutup_jg + " + " + sisimiring_jg + " + " + alastutup_jg + " + " + sisimiring_jg;
    
    document.getElementById("hasilK_jajargenjang").innerHTML = 
    rumusjg_K + "<br> K = " + keliling_jg + " cm"
}

function resetKelilingJajarGenjang() {
    document.getElementsByName('alastutup_jajargenjang')[0].value = ""
    document.getElementsByName('sisimiring_jajargenjang')[0].value = ""
    document.getElementById("hasilK_jajargenjang").innerHTML = " "
    console.log("Sudah Terreset!")
}
