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