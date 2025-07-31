window.addEventListener("DOMContentLoaded", (event) => {
  let allData = localStorage.getItem("allDataJSON");
  let allDataObj = JSON.parse(allData); // {}

  if(!allDataObj){
    // allDataObj = JSON.parse(localStorage.getItem("backup"))
    document.getElementById('kumpulanBtn').innerHTML= `<button onclick="restoreData(event)">Restore Data</button>`
  }


  //  console.log(allDataObj.personalData.firstName);
  document.getElementById(
    "firstName"
  ).textContent = `${allDataObj.personalData.firstName}`;
  document.getElementById(
    "lastName"
  ).textContent = `${allDataObj.personalData.lastName}`;
  document.getElementById(
    "email"
  ).textContent = `${allDataObj.personalData.email}`;
  document.getElementById(
    "telepon"
  ).textContent = `${allDataObj.personalData.phoneNumber}`;
  document.getElementById("birthDate").textContent = `${splitDate(
    allDataObj.personalData.birthDate
  )}`;
  document.getElementById(
    "workExperienceOne"
  ).innerHTML = `<strong class="lead">${allDataObj.workExperience.workExpEmployer}</strong> &mdash;  <strong class="lead">${allDataObj.workExperience.workExpTitle}</strong> <br/> <p class="lead mb-0">${allDataObj.workExperience.workLocation}</p>`;
  document.getElementById(
    "workExperienceOneDesc"
  ).textContent = `${allDataObj.workExperience.workExperienceDesc}`;
  // document.getElementById(
  //   "latestEducation"
  // ).innerHTML = `${allDataObj.educationData.selectEducation}`;
  document.getElementById(
    "gpa"
  ).innerHTML = `<p class="lead">GPA: ${allDataObj.educationData.gpa}</p>`;
  document.getElementById(
    "skillList"
  ).textContent = `${allDataObj.skillsAndLanguage.skillList}`;
  document.getElementById(
    "certAndLicenses"
  ).textContent = `${allDataObj.educationData.certAndLicenses}`;
  document.getElementById(
    "languageOne"
  ).textContent = `${allDataObj.skillsAndLanguage.language}`;
  document.getElementById(
    "languageOneProficiency"
  ).textContent = `${allDataObj.skillsAndLanguage.languageProficiency}`;
  // document.getElementById(`major`).textContent = allDataObj.educationData.major;
  document.getElementById(`schoolName`).innerHTML = `
    ${allDataObj.educationData.schoolName} &mdash; ${allDataObj.educationData.major}, ${allDataObj.educationData.selectEducation}`;
  document.getElementById(`socialMedia`).textContent =
    allDataObj.personalData.socialMedia;
  document.getElementById(`address`).textContent =
    allDataObj.personalData.address;
  document.getElementById(
    `workStartDate`
  ).innerHTML = `<p class ="lead my-auto py-auto">${splitDate(
    allDataObj.workExperience.workExpStart
  )} &mdash; ${splitDate(allDataObj.workExperience.workExpEnd)}</p>`;
  document.getElementById(
    `orgName`
  ).innerHTML = `<p class="lead">${allDataObj.orgExperience.orgName} &mdash; ${allDataObj.orgExperience.orgRole}</p>`;
  document.getElementById(`orgStart`).innerHTML = `<p class="lead">${splitDate(
    allDataObj.orgExperience.orgStart
  )} &mdash; ${splitDate(allDataObj.orgExperience.orgEnd)}</p>`;
  document.getElementById("orgExpDesc").textContent =
    allDataObj.orgExperience.orgExpDesc;
  // document.getElementsByClassName("inputData").innerHTML = template
  // return template
});

const downloadData = () => {
  document.getElementById("btn-download").style.visibility = "hidden";
  document.getElementById("btn-edit").style.visibility = "hidden";
  document.getElementById("btn-delete").style.visibility = "hidden";
  print();
  document.getElementById("btn-download").style.visibility = "visible";
  document.getElementById("btn-edit").style.visibility = "visible";
  document.getElementById("btn-delete").style.visibility = "visible";
};

const splitDate = (date) => {
  let inputDate = new Date(date);
  const obj = { day: "numeric", month: "long", year: "numeric" };
  const splittedDate = inputDate.toLocaleDateString("id-ID", obj);

  return splittedDate;
};

const editData = (e) => {
  e.preventDefault();
  let allData = localStorage.getItem("allDataJSON");
  let allDataObj = JSON.parse(allData);
  // console.log(`Hello`);
  document.getElementById(
    `edit-data`
  ).innerHTML = `<h3 class="text-center">Personal Data</h3>
        <hr class="" />
        <div class="row">
          <div class="mb-3 col">
            <label for="firstName" class="form-label">First Name</label>
            <input type="text" class="form-control-md" id="firstName" />
          </div>
          <div class="mb-3 col px-auto mx-auto">
            <label for="lastName" class="form-label">Last Name</label>
            <input type="text" class="form-control-md" id="lastName" />
          </div>
        </div>
        <div class="row">
          <div class="mb-3 col">
            <label for="birthDate" class="form-label">Birth Date</label>
            <input type="date" class="form-control-md" id="birthDate" />
          </div>
          <div class="mb-3 col">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control-md" id="email" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="social-media" class="form-label">Social Media</label>
            <input type="text" class="form-control-md" id="socialMedia" />
          </div>
          <div class="col">
            <label for="phone-number" class="form-label">Phone Number</label>
            <input type="text" class="form-control-md" id="phoneNumber" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="address" class="form-label">Address</label>
            <textarea
              type="text"
              class="form-control"
              id="address"
              rows="3"
            ></textarea>
          </div>
        </div>
        <br/>
        <h3 class="text-center">Education and Certification</h3>
        <hr />
        <div class="row">
          <div class="mb-3 col">
            <label for="latestEducation" class="form-label"
              >Latest Education</label
            >
            <select
              class="form-select-sm"
              aria-label=".form-select-sm latestEducation"
              id="selectEducation"
            >
              <option selected>Latest Education</option>
              <option value="S3">S3</option>
              <option value="S2">S2</option>
              <option value="S1">S1</option>
              <option value="SMA">SMA</option>
            </select>
          </div>
          <div class="mb-3 col">
            <label for="schoolName" class="form-label"
              >University / School</label
            >
            <input type="text" class="form-control-md" id="schoolName" />
          </div>
        </div>
        <div class="row">
          <div class="mb-3 col">
            <label for="gpa" class="form-label"
              >GPA / National Exam Score</label
            >
            <input type="number" class="form-control-md" id="gpa" />
          </div>
          <div class="col">
            <label for="major" class="form-label">Major</label>
            <input type="text" class="form-control-md" id="major" />
          </div>
        </div>
        <div class="mb-3">
          <label for="certAndLicenses" class="form-label">Certification</label>
          <input type="text" class="form-control-md" id="certAndLicenses" />
        </div>
        <br />
        <h3 class="text-center">Work Experience</h3>
        <hr />
        <div class="row">
          <div class="mb-3 col">
            <label for="workExpEmployer" class="form-label">Employer</label>
            <input type="text" class="form-control-md" id="workExpEmployer" />
          </div>

          <div class="col">
            <label for="workExpTitle" class="form-label">Job Title</label>
            <input type="text" class="form-control-md" id="workExpTitle" />
          </div>
        </div>

        <div class="row">
          <div class="mb-3 col">
            <label for="workExpStart" class="form-label">Start Date</label>
            <input type="date" class="form-control-md" id="workExpStart" />
          </div>
          <div class="mb-3 col">
            <label for="workExpEnd" class="form-label">End Date</label>
            <input type="date" class="form-control-md" id="workExpEnd" />
          </div>
        </div>
        <div class="mb-3 col">
          <label for="workLocation" class="form-label">Location</label>
          <input type="text" class="form-control-md" id="workLocation" />
        </div>
        <div class="mb-3">
          <label for="workExperienceDesc" class="form-label">Description</label>
          <textarea
            class="form-control"
            id="workExperienceDesc"
            rows="3"
          ></textarea>
          <br/>
           <h3 class="text-center">Organization Experience</h3>
        <hr />
        <div class="row">
          <div class="col">
            <label for="orgName" class="form-label">Organization Name</label>
            <input type="text" class="form-control-md" id="orgName" />
          </div>
          <div class="mb-3 col">
            <label for="orgRole" class="form-label">Role</label>
            <input type="text" class="form-control-md" id="orgRole" />
          </div>
        </div>

        <div class="row">
          <div class="mb-3 col">
            <label for="orgStart" class="form-label">Start Date</label>
            <input type="date" class="form-control-md" id="orgStart" />
          </div>
          <div class="mb-3 col">
            <label for="orgEnd" class="form-label">End Date</label>
            <input type="date" class="form-control-md" id="orgEnd" />
          </div>
        </div>

        <div class="mb-3">
          <label for="orgExpDesc" class="form-label">Description</label>
          <textarea class="form-control" id="orgExpDesc" rows="3"></textarea>
        </div>

          <br/>
          <h3 class="text-center">Skills and Language</h3>
        <hr />
        <div class="mb-3">
          <label for="skillList" class="form-label">Skills</label>
          <textarea class="form-control" id="skillList" rows="3"></textarea>
        </div>

        <div class="mb-3">
          <label for="language" class="form-label">Language</label>
          <input type="text" class="form-control-md" id="language" />
        </div>
        <div class="mb-3">
          <label for="languageProficiency" class="form-label"
            >Language Proficiency</label
          >
          <select
            class="form-select-sm"
            aria-label=".form-select-sm languageProficiency"
            id="languageProficiency"
          >
            <option selected>Language Proficiency</option>
            <option value="Native">Native</option>
            <option value="Fluent">Fluent</option>
            <option value="Advanced">Advanced</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Beginner">Beginner</option>
          </select>
        </div>
          <button
            class="btn btn-primary mb-3 mt-3"
            onclick="updateData(event)"
          >
            Save
          </button>
          
        </div>

        `;
  document.getElementById(`orgName`).value = allDataObj.orgExperience.orgName;
  document.getElementById(`orgRole`).value = allDataObj.orgExperience.orgRole;
  document.getElementById(`orgStart`).value = allDataObj.orgExperience.orgStart;
  document.getElementById(`orgEnd`).value = allDataObj.orgExperience.orgEnd;
  document.getElementById(`orgExpDesc`).value =
    allDataObj.orgExperience.orgExpDesc;
  document.getElementById(`language`).value =
    allDataObj.skillsAndLanguage.language;
  document.getElementById(`languageProficiency`).value =
    allDataObj.skillsAndLanguage.languageProficiency;
  document.getElementById(`skillList`).value =
    allDataObj.skillsAndLanguage.skillList;
  document.getElementById(`workExpTitle`).value =
    allDataObj.workExperience.workExpTitle;
  document.getElementById(`workLocation`).value =
    allDataObj.workExperience.workLocation;
  document.getElementById(`workExpEmployer`).value =
    allDataObj.workExperience.workExpEmployer;
  document.getElementById(`workExpStart`).value =
    allDataObj.workExperience.workExpStart;
  document.getElementById(`workExpEnd`).value =
    allDataObj.workExperience.workExpEnd;
  document.getElementById(`workExperienceDesc`).value =
    allDataObj.workExperience.workExperienceDesc;
  document.getElementById("selectEducation").value =
    allDataObj.educationData.selectEducation;
  document.getElementById("schoolName").value =
    allDataObj.educationData.schoolName;
  document.getElementById("gpa").value = allDataObj.educationData.gpa;
  document.getElementById("certAndLicenses").value =
    allDataObj.educationData.certAndLicenses;
  document.getElementById(`major`).value = allDataObj.educationData.major;
  document.getElementById("firstName").value =
    allDataObj.personalData.firstName;
  document.getElementById("lastName").value = allDataObj.personalData.lastName;
  document.getElementById("birthDate").value =
    allDataObj.personalData.birthDate;
  document.getElementById("email").value = allDataObj.personalData.email;
  document.getElementById(`socialMedia`).value =
    allDataObj.personalData.socialMedia;
  document.getElementById(`phoneNumber`).value =
    allDataObj.personalData.phoneNumber;
  document.getElementById(`address`).value = allDataObj.personalData.address;
};

const updateData = (e) => {
  // e.preventDefault();

  let allData = localStorage.getItem("allDataJSON");
  let allDataObj = JSON.parse(allData);

  const updateValues = (obj) => {
    for (let key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        updateValues(obj[key]);
      } else {
        const inputField = document.getElementById(key);
        console.log(inputField, ">>>>");

        if (inputField) {
          obj[key] = inputField.value;
        }
      }
    }

    // console.log(obj, "hiii"
  };

  updateValues(allDataObj);
  let updatedData = JSON.stringify(allDataObj);
  localStorage.setItem("allDataJSON", updatedData);
  // localStorage.setItem("backup", updatedData);
  location.reload();
};

const deleteData = (e) => {
  e.preventDefault();
  
  let msg = `Apakah kamu yakin akan menghapus seluruh data yang ada dalam akun kamu?`
  if(confirm(msg) === true){
    //data kehapus
    localStorage.removeItem(`allDataJSON`)
    document.getElementById(`edit-data`).innerHTML = `<h1>Seluruh data telah terhapus</h1>
    `
  } else {

    msg = `Data tidak terhapus`
  }

location.reload()
};

const restoreData = (e) => {
  e.preventDefault(e);
  let allDataObj = JSON.parse(localStorage.getItem("backup"));
  let msg = `Apakah kamu yakin akan mengembalikan seluruh data yang terhapus menggunakan data yang telah di back-up?`
  if(confirm(msg) === true){
  document.getElementById(
    "firstName"
  ).textContent = `${allDataObj.personalData.firstName}`;
  document.getElementById(
    "lastName"
  ).textContent = `${allDataObj.personalData.lastName}`;
  document.getElementById(
    "email"
  ).textContent = `${allDataObj.personalData.email}`;
  document.getElementById(
    "telepon"
  ).textContent = `${allDataObj.personalData.phoneNumber}`;
  document.getElementById("birthDate").textContent = `${splitDate(
    allDataObj.personalData.birthDate
  )}`;
  document.getElementById(
    "workExperienceOne"
  ).innerHTML = `<strong class="lead">${allDataObj.workExperience.workExpEmployer}</strong> &mdash;  <strong class="lead">${allDataObj.workExperience.workExpTitle}</strong> <br/> <p class="lead mb-0">${allDataObj.workExperience.workLocation}</p>`;
  document.getElementById(
    "workExperienceOneDesc"
  ).textContent = `${allDataObj.workExperience.workExperienceDesc}`;
  // document.getElementById(
  //   "latestEducation"
  // ).innerHTML = `${allDataObj.educationData.selectEducation}`;
  document.getElementById(
    "gpa"
  ).innerHTML = `<p class="lead">GPA: ${allDataObj.educationData.gpa}</p>`;
  document.getElementById(
    "skillList"
  ).textContent = `${allDataObj.skillsAndLanguage.skillList}`;
  document.getElementById(
    "certAndLicenses"
  ).textContent = `${allDataObj.educationData.certAndLicenses}`;
  document.getElementById(
    "languageOne"
  ).textContent = `${allDataObj.skillsAndLanguage.language}`;
  document.getElementById(
    "languageOneProficiency"
  ).textContent = `${allDataObj.skillsAndLanguage.languageProficiency}`;
  // document.getElementById(`major`).textContent = allDataObj.educationData.major;
  document.getElementById(`schoolName`).innerHTML = `
    ${allDataObj.educationData.schoolName} &mdash; ${allDataObj.educationData.major}, ${allDataObj.educationData.selectEducation}`;
  document.getElementById(`socialMedia`).textContent =
    allDataObj.personalData.socialMedia;
  document.getElementById(`address`).textContent =
    allDataObj.personalData.address;
  document.getElementById(
    `workStartDate`
  ).innerHTML = `<p class ="lead my-auto py-auto">${splitDate(
    allDataObj.workExperience.workExpStart
  )} &mdash; ${splitDate(allDataObj.workExperience.workExpEnd)}</p>`;
  document.getElementById(
    `orgName`
  ).innerHTML = `<p class="lead">${allDataObj.orgExperience.orgName} &mdash; ${allDataObj.orgExperience.orgRole}</p>`;
  document.getElementById(`orgStart`).innerHTML = `<p class="lead">${splitDate(
    allDataObj.orgExperience.orgStart
  )} &mdash; ${splitDate(allDataObj.orgExperience.orgEnd)}</p>`;
  document.getElementById("orgExpDesc").textContent =
    allDataObj.orgExperience.orgExpDesc;
  
    let restoredData = JSON.stringify(allDataObj);
  localStorage.setItem("allDataJSON", restoredData);
  location.reload()


  } else {
    alert(`Data tetap terhapus`)
  }

  

};
