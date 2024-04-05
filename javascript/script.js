document.getElementById("judul").innerHTML = "JavaScript";


let desc = document.getElementById("deskripsi");
desc.innerHTML = "Belajar DOM, variable, perulangan";

let nama = document.getElementById("nama")
let btnSimpan = document.getElementById("simpan");

btnSimpan.addEventListener('click', function () {
    console.log("Tombol ditekan");
})