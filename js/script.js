// Ini File Javascript

// Bagian function sapa nama user
function replaceName() {
    let welcome = prompt("Hai, nama kamu siapa?", "");  // Menampilkan pop up isi nama
    document.getElementById("welcome").innerHTML = welcome  // Bagian DOM (menampilkan nama sesuai dengan yang di input)
}

// Memanggil funtion sapa nama
replaceName();

// Fungsi untuk bagian button Ganti Nama
document.getElementById("tombol")
tombol.addEventListener("click", function() {
    replaceName();
})

// Bagian fungsi validasi pada form input
function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        // alert("Mohon Isi dengan Lengkap");   // Bisa diaktifkan jika di html tidak menggunakan required
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);

    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}