document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("regEmail").value.trim();
  let password = document.getElementById("regPassword").value.trim();
  let confirmPassword = document.getElementById("regConfirmPassword").value.trim();
  let message = document.getElementById("regMessage");

  if (password !== confirmPassword) {
    message.classList.remove("text-success");
    message.classList.add("text-danger");
    message.textContent = "Password dan konfirmasi tidak cocok.";
    return;
  }

  // Simpan data ke localStorage
  let user = {
    email: email,
    password: password 
  };

  localStorage.setItem("registeredUser", JSON.stringify(user));

  message.classList.remove("text-danger");
  message.classList.add("text-success");
  message.textContent = "Registrasi berhasil! Mengalihkan ke halaman login...";

  setTimeout(() => {
    window.location.href = "login.html"; // ganti ke halaman login 
  }, 1500);
});