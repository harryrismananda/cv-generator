document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let data = localStorage.getItem("registeredUser");
  if (!data) {
    return alert(
      `Email atau password tidak cocok, silahkan register terlebih dahulu.`
    );
  }

  function readData() {
    let data = localStorage.getItem("registeredUser");
    let obj = JSON.parse(data); // {}

    let regEmail = obj.email;
    let regPassword = obj.password;

    return [regEmail, regPassword];
  }
  let user = readData();

  let email = document.getElementById("regEmail").value.trim();
  let password = document.getElementById("regPassword").value;

  let message = document.getElementById("regMessage");

  if (password !== user[1] || email !== user[0]) {
    message.classList.remove("text-success");
    message.classList.add("text-danger");
    message.textContent = "Email atau password tidak cocok.";
    return;
  }

  message.classList.remove("text-danger");
  message.classList.add("text-success");
  message.textContent = "login berhasil...";

  setTimeout(() => {
    window.location.href = "./cv-generator.html"; // ganti ke halaman login
  }, 1000);
});
