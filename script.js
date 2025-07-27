let cvList = [];
let formFields = [
  "firstName",
  "lastName",
  "birthDate",
  "latestEducation",
  "gpa",
  "workExperienceOne",
  "workExperienceOneDesc",
  "workExperienceTwo",
  "workExperienceTwoDesc",
  "skillList",
  "certAndLicenses",
  "certAndLicenses2",
  "languageOne",
  "languageOneProficiency",
  "languageTwo",
  "languageTwoProficiency",
];

document.getElementById("submitBtn").addEventListener("click", function (e) {
  e.preventDefault();

  let newCV = {};
  formFields.forEach((id) => {
    newCV[id] = document.getElementById(id).value;
  });

  cvList.push(newCV);
  alert("CV berhasil disimpan!");
  displayCVs();
  clearForm();
});

function displayCVs() {
  let container = document.getElementById("cvDisplay");
  container.innerHTML = "";

  cvList.forEach((cv, index) => {
    let card = document.createElement("div");
    card.classList.add("card", "mb-2", "p-3");

    card.innerHTML = `
      <h5>${cv.firstName} ${cv.lastName}</h5>
      <p><strong>Pendidikan:</strong> ${cv.latestEducation}</p>
      <p><strong>Pengalaman 1:</strong> ${cv.workExperienceOne} - ${cv.workExperienceOneDesc}</p>
      <p><strong>Pengalaman 2:</strong> ${cv.workExperienceTwo} - ${cv.workExperienceTwoDesc}</p>
      <p><strong>Skills:</strong> ${cv.skillList}</p>
      <button class="btn btn-warning btn-sm" onclick="editCV(${index})">Edit</button>
      <button class="btn btn-danger btn-sm" onclick="deleteCV(${index})">Delete</button>
    `;
    container.appendChild(card);
  });
}

function editCV(index) {
  let cv = cvList[index];
  formFields.forEach((id) => {
    document.getElementById(id).value = cv[id];
  });

  document.getElementById("submitBtn").style.display = "none";
  let updateBtn = document.createElement("button");
  updateBtn.id = "updateBtn";
  updateBtn.className = "btn btn-success";
  updateBtn.textContent = "Update";
  updateBtn.onclick = function () {
    formFields.forEach((id) => {
      cvList[index][id] = document.getElementById(id).value;
    });
    displayCVs();
    clearForm();
    updateBtn.remove();
    document.getElementById("submitBtn").style.display = "inline-block";
    alert("CV berhasil diperbarui!");
  };
  document.querySelector("form").appendChild(updateBtn);
}

// 🗑️ Delete
document.getElementById("deleteBtn").addEventListener("click", function () {
  let confirmDelete = confirm("Yakin ingin menghapus semua data CV?");
  if (confirmDelete) {
    let allFields = document.querySelectorAll("input, textarea");
    allFields.forEach((field) => (field.value = ""));
    alert("CV telah dihapus.");
  } else {
    alert("Penghapusan dibatalkan.");
  }
});

