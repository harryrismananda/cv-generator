
function readData(biodataJSON) {

    let data = localStorage.getItem("biodataJSON")
    let obj = JSON.parse(data)
    
    let template=""

    for (let i = 0; i < obj.length; i++) {
        let elemen = obj[i];
        
        template +=
        `<div>
            <div>
                <h1>${elemen.firstName}</h1>
                <h2>${elemen.lastName}</h2>
            </div>
            <div>
                <p>${elemen.birthDate}</p>
            </div>
            <div>
                <p>${elemen.latestEducation}</p>
                <p>${elemen.gpa}</p>
            </div>
            <div>
                <h1>${elemen.workExperienceOne}</h1>
                <p>${elemen.workExperienceOneDesc}</p>
                <h1>${elemen.workExperienceTwo}</h1>
                <p>${elemen.workExperienceTwoDesc}</p>
            </div>
            <div>
                <h1>${elemen.skillList}</h1>
                <p>${elemen.certAndLicenses}</p>
                <p>${elemen.certAndLicenses2}</p>
            </div>
            <div>
                <h1>${elemen.languageOne}</h1>
                <p>${elemen.languageOneProficiency}</p>
                <h1>${elemen.languageTwo}</h1>
                <p>${elemen.languageTwoProficiency}</p>
            </div>
        </div>`
        
    }

    document.getElementsByClassName("inputData").innerHTML = template
return template
}


readData()