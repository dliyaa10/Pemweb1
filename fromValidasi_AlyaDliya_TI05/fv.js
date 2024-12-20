document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah submit form
    let isValid = true;

    // Validasi Nama
    const name = document.getElementById('name').value.trim();
    const nameError = document.getElementById('nameError');
    if (!name) {
        nameError.textContent = 'Nama pelanggan wajib diisi.';
        isValid = false;
    } else if (name.length > 30) {
        nameError.textContent = 'Nama pelanggan tidak boleh lebih dari 30 karakter.';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Validasi Email
    const email = document.getElementById('email').value.trim();
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
        emailError.textContent = 'Email wajib diisi.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = 'Format email tidak valid.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Validasi Jam Keberangkatan
    const departureTime = document.getElementById('departureTime').value.trim();
    const departureTimeError = document.getElementById('departureTimeError');
    const timePattern = /^([01]?[0-9]|2[0-3])\.[0-5][0-9]$/;
    if (!departureTime) {
        departureTimeError.textContent = 'Jam keberangkatan wajib diisi.';
        isValid = false;
    } else if (!timePattern.test(departureTime)) {
        departureTimeError.textContent = 'Format jam keberangkatan tidak valid. Gunakan format 00.00 - 23.59.';
        isValid = false;
    } else {
        departureTimeError.textContent = '';
    }

    // Validasi Jumlah Tiket
    const ticketCount = document.getElementById('ticketCount').value.trim();
    const ticketCountError = document.getElementById('ticketCountError');
    if (!ticketCount) {
        ticketCountError.textContent = 'Jumlah tiket wajib diisi.';
        isValid = false;
    } else if (!Number.isInteger(+ticketCount) || ticketCount < 1 || ticketCount > 10) {
        ticketCountError.textContent = 'Jumlah tiket harus bilangan bulat antara 1-10.';
        isValid = false;
    } else {
        ticketCountError.textContent = '';
    }

    if (isValid) {
        alert('Form berhasil dikirim!');
        // Lakukan submit atau proses lainnya
    }
});
