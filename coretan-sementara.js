// lets starttttt

/*
 READ DATA
=========
1. buat function readData
2. di dalam function, buat 1 variabel (template) dengan nilai awal ""
3. looping database untuk dapat perObj => {id, namaTugas, tanggal, status}
4. di dalam looping, concate variabel template dengan <tr> </tr>
5. di luar looping, get elemen container (#containerBody) kemudian innerHTML dengan variabel template
*/


function readData(inputData) {
    
    let template=""

    for (let i = 0; i < inputData.length; i++) {
        let elemen = inputData[i];
        
        template +=
            `<tr>
                <td>${elemen.firstName}</td>
                <td>${elemen.lastName}</td>
                <td>${elemen.birthDate}</td>
                <td>${elemen.latestEducation}</td>
                <td>${elemen.gpa}</td>
                <td>${elemen.workExperienceOne}</td>
                <td>${elemen.workExperienceOneDesc}</td>
                <td>${elemen.workExperienceTwo}</td>
                <td>${elemen.workExperienceTwoDesc}</td>.  
                <td>${elemen.skillList}</td>
                <td>${elemen.certAndLicenses}</td>
                <td>${elemen.certAndLicenses2}</td>
                <td>${elemen.languageOne}</td>
                <td>${elemen.languageOneProficiency}</td>.  
                <td>${elemen.languageTwo}</td>
                <td>${elemen.languageTwoProficiency}</td>
            </tr>`
    }

    document.getElementsByClassName("mb-3").innerHTML = template
return template
}

readData()


//========================

function readData(inputData) {


    
    let template=""

    for (let i = 0; i < inputData.length; i++) {
        let elemen = inputData[i];
        
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

    document.getElementsById("mb-3").innerHTML = template
return template
}


localStorage.getItem(readData())