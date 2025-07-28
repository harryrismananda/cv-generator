
localStorage.setItem("biodataJSON", JSON.stringify(
    {
    firstName: "Sabian",
    lastName: "Athallah",
    email : "sabian.athallah05@gmail.com",
    telepon : "085887799935",
    birthDate : "5 Januari 2001",
    workExperienceOne : "IDX",
    workExperienceOneDesc : "divisi keanggotaan",
    workExperienceTwo :"Arlindo",
    workExperienceTwoDesc: "Financial",
    latestEducation: "Diponegoro University",
    gpa: "3.5",
    skillList: "Math",
    certAndLicenses: "Ceritifcation one",
    certAndLicenses2: "Ceritifcation two",
    languageOne: "english",
    languageOneProficiency:"fluent",
    languageTwo:"chinnise",
    languageTwoProficiency:"intermediate"
    }
    )
)


function readData(biodataJSON) {

    let data = localStorage.getItem("biodataJSON")
    let obj = JSON.parse(data) // {}

    document.getElementById("firstName").textContent = `${obj.firstName}`;
    document.getElementById("lastName").textContent = `${obj.lastName}`;
    document.getElementById("email").textContent = `${obj.email}`;
    document.getElementById("telepon").textContent = `${obj.telepon}`;
    document.getElementById("birthDate").textContent = `${obj.birthDate}`;
    document.getElementById("workExperienceOne").textContent = `${obj.workExperienceOne}`;
    document.getElementById("workExperienceOneDesc").textContent = `${obj.workExperienceOneDesc}`;
    document.getElementById("workExperienceTwo").textContent = `${obj.workExperienceTwo}`;
    document.getElementById("workExperienceTwoDesc").textContent = `${obj.workExperienceTwoDesc}`; 
    document.getElementById("latestEducation").textContent = `${obj.latestEducation}`;
    document.getElementById("gpa").textContent = `${obj.gpa}`;
    document.getElementById("skillList").textContent = `${obj.skillList}`;
    document.getElementById("certAndLicenses").textContent = `${obj.certAndLicenses}`;
    document.getElementById("certAndLicenses2").textContent = `${obj.certAndLicenses2}`;
    document.getElementById("languageOne").textContent = `${obj.languageOne}`;
    document.getElementById("languageOneProficiency").textContent = `${obj.languageOneProficiency}`;
    document.getElementById("languageTwo").textContent = `${obj.languageTwo}`;
    document.getElementById("languageTwoProficiency").textContent = `${obj.languageTwoProficiency}`;
    
        

    // document.getElementsByClassName("inputData").innerHTML = template
// return template
}


readData()


// let template=`
//      <h1>${obj.firstName}</h1>

//     `

   
        
        // template +=
        // `<div>
        //     <div>
        //         <h1>${elemen.firstName}</h1>
        //         <h2>${elemen.lastName}</h2>
        //     </div>
        //     <div>
        //         <p>${elemen.birthDate}</p>
        //     </div>
        //     <div>
        //         <p>${elemen.latestEducation}</p>
        //         <p>${elemen.gpa}</p>
        //     </div>
        //     <div>
        //         <h1>${elemen.workExperienceOne}</h1>
        //         <p>${elemen.workExperienceOneDesc}</p>
        //         <h1>${elemen.workExperienceTwo}</h1>
        //         <p>${elemen.workExperienceTwoDesc}</p>
        //     </div>
        //     <div>
        //         <h1>${elemen.skillList}</h1>
        //         <p>${elemen.certAndLicenses}</p>
        //         <p>${elemen.certAndLicenses2}</p>
        //     </div>
        //     <div>
        //         <h1>${elemen.languageOne}</h1>
        //         <p>${elemen.languageOneProficiency}</p>
        //         <h1>${elemen.languageTwo}</h1>
        //         <p>${elemen.languageTwoProficiency}</p>
        //     </div>
        // </div>`