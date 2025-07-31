window.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  let allData = localStorage.getItem("allDataJSON");
  let allDataObj = JSON.parse(allData);
  let template = "";
  let today = new Date();
  template += `<div><h3>Personal Data</h3></div>
  <hr>
<div><p>Nama Lengkap: ${allDataObj.personalData.firstName} ${
    allDataObj.personalData.lastName
  }</p></div>
<div><p>Email: ${allDataObj.personalData.email}</p> </div>
<span>Umur: ${
    today.getFullYear() - allDataObj.personalData.birthDate.split("-")[0]
  } tahun  </span>
<hr>
<div><h3>Education</h3></div>
<hr>
<div><p>${allDataObj.educationData.schoolName} - ${
    allDataObj.educationData.selectEducation
  } | GPA: ${allDataObj.educationData.gpa}</p></div>
<div><p>Certification: ${allDataObj.educationData.certAndLicenses}</p></div>
<hr>
<div><h3>Work Experience</h3></div>
<hr>
<div><p class="my-0"><strong>${allDataObj.workExperience.workExpEmployer} - ${
    allDataObj.workExperience.workExpTitle
  }</strong></p>
<p class="my-0">${allDataObj.workExperience.workLocation}</p></div>
<div class="mx-0 px-0"><p>${allDataObj.workExperience.workExpStart} - ${
    allDataObj.workExperience.workExpEnd
  }</p></div>
<div><p>${allDataObj.workExperience.workExperienceDesc}</p></div>
<hr>
<div><h3>Skills and Languages</h3></div>
<hr>
<div><p><strong>Skills</strong></p>
<p>${allDataObj.skillsAndLanguage.skillList}</p></div>
<div><p><strong>Language</strong></p>
<p>${allDataObj.skillsAndLanguage.language} - ${
    allDataObj.skillsAndLanguage.languageProficiency
  }</p>
</div>
`;

  document.getElementById("output").innerHTML = template;
});

const addNewField = () => {
  const workExp = document.getElementById("workExpContainer");
  console.log(workExp);
};

const createDataExp = (e) => {
  e.preventDefault();
  let workExpObj = {};
  const startDate = document.getElementById("workExpStart");
  const endDate = document.getElementById("workExpEnd");
  const employer = document.getElementById("workExpEmployer");
  const workLocation = document.getElementById("workLocation");
  const jobTitle = document.getElementById("workExpTitle");
  const desc = document.getElementById("workExperienceDesc");

  workExpObj = {
    workExpTitle: jobTitle.value,
    workExpEmployer: employer.value,
    workLocation: workLocation.value,
    workExpStart: startDate.value,
    workExpEnd: endDate.value,
    workExperienceDesc: desc.value,
  };

  const experienceJSON = JSON.stringify(workExpObj);
  localStorage.setItem("workExperience", experienceJSON);
};


const createDataOrg = (e) => {
  e.preventDefault();
  let orgExpObj = {};
  const startDate = document.getElementById("orgStart");
  const endDate = document.getElementById("orgEnd");
  const role = document.getElementById("orgRole");
  const orgName = document.getElementById("orgName");
  const desc = document.getElementById("orgExpDesc");

  orgExpObj = {
    orgStart: startDate.value,
    orgEnd: endDate.value,
    orgRole: role.value,
    orgName: orgName.value,
    orgExpDesc: desc.value,
  };

  const experienceJSON = JSON.stringify(orgExpObj);
  localStorage.setItem("orgExperience", experienceJSON);
};




const createDataPD = (e) => {
  e.preventDefault();
  let personalDataObj = {};
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const birthDate = document.getElementById("birthDate");
  const email = document.getElementById("email");
  const phone = document.getElementById(`phoneNumber`)
  const address = document.getElementById(`address`)
  const socMed = document.getElementById(`socialMedia`)
  // console.log(email.value.split("@"));

  if (email.value.split("@").length < 2) {
    alert(`Gunakan @ dalam email anda!`);
  } else {
    personalDataObj = {
      firstName: firstName.value,
      lastName: lastName.value,
      birthDate: birthDate.value,
      email: email.value,
      phoneNumber: phone.value,
      socialMedia: socMed.value,
      address: address.value
    };
    const personaldataJSON = JSON.stringify(personalDataObj);
    localStorage.setItem("personalData", personaldataJSON);
  }
};



const createDataEducation = (e) => {
  e.preventDefault();
  let educationData = {};
  const latestEducation = document.getElementById("selectEducation");
  const schoolName = document.getElementById("schoolName");
  const gpa = document.getElementById("gpa");
  const certAndLicenses = document.getElementById("certAndLicenses");
  const major = document.getElementById(`major`)

  educationData = {
    selectEducation: latestEducation.value,
    schoolName: schoolName.value,
    gpa: gpa.value,
    certAndLicenses: certAndLicenses.value,
    major: major.value
  };

  const educationDataJSON = JSON.stringify(educationData);
  localStorage.setItem("educationData", educationDataJSON);
};

const createDataSL = (e) => {
  e.preventDefault();
  let skillsAndLanguage = {};
  const skillList = document.getElementById("skillList");
  const language = document.getElementById("language");
  const languageProficiency = document.getElementById("languageProficiency");

  skillsAndLanguage = {
    skillList: skillList.value,
    language: language.value,
    languageProficiency: languageProficiency.value,
  };

  const skillsAndLanguageJSON = JSON.stringify(skillsAndLanguage);
  localStorage.setItem("skillsAndLanguage", skillsAndLanguageJSON);
};

const AllData = (e) => {
  e.preventDefault();

  // let arrayData = ["personalData", "educationData", "skillsAndLanguage"];
  let data1 = localStorage.getItem("personalData");
  let personalDataObj = JSON.parse(data1);
  let data2 = localStorage.getItem("educationData");
  let educationDataObj = JSON.parse(data2);
  let data3 = localStorage.getItem("workExperience");
  let workExpObj = JSON.parse(data3);
  let data4 = localStorage.getItem("skillsAndLanguage");
  let skillsAndLangObj = JSON.parse(data4);
  let data5 = localStorage.getItem("orgExperience");
  let orgExpObj = JSON.parse(data5)

  if(!data1 || !data2 || !data3 || !data4 || !data5){
    alert(`Semua data harus terisi!`)
  }
else {


  let allData = {
    personalData: personalDataObj,
    educationData: educationDataObj,
    workExperience: workExpObj,
    skillsAndLanguage: skillsAndLangObj,
    orgExperience: orgExpObj
  };

  const allDataJSON = JSON.stringify(allData);
  localStorage.setItem("allDataJSON", allDataJSON);
  localStorage.setItem("backup", allDataJSON);
  window.location.href = "./output.html"
}
};



const downloadData = () => {

    
    document.getElementById("btn-download").style.visibility = "hidden";
    print();
    
    document.getElementById("btn-download").style.visibility = "visible";
   
};


