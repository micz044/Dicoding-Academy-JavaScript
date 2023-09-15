class Developer{
    constructor (name){
        this.name = name;
    }

    commitChanges() {
        console.log(`${Developer.name} is commiting changes ...`);
    }
}

    function canBuildUI (Developer){
        return{
            buildUI : () => {
                console.log(`${Developer.name} is buliding UI ...`);
            }
        }
    }

    function canBuildAPI (Developer){
        return{
            buildAPI : () => {
                console.log(`${Developer.name} is building API ...`);
            }
        }
    }

    function canDeployApp(Developer) {
        return{
            DeployApp : () => {
                console.log(`${Developer.name} is deploying App ...`);
            }
        }
    }

function createBackEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildAPI(developer));
}

function createFrontEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer));
}

function createDevOps(name) {
    const developer = new Developer(name);
    return Object.assign(developer,canDeployApp(developer));
}

function createFullStackDeveloper(name) {
    const developer =new Developer(name);
    return Object.assign(developer, canBuildAPI(developer),canBuildUI(developer),canDeployApp(developer));
}


const frontEndDeveloper = createFrontEndDeveloper('Fulan');
frontEndDeveloper.commitChanges();
frontEndDeveloper.buildUI();
console.log(`is ${frontEndDeveloper.name} developer? `, frontEndDeveloper instanceof Developer);
 
const backEndDeveloper = createBackEndDeveloper('Fulana');
backEndDeveloper.commitChanges();
backEndDeveloper.buildAPI();
console.log(`is ${backEndDeveloper.name} developer? `, backEndDeveloper instanceof Developer);
 
const devOpsDeveloper = createDevOps('Fulani');
devOpsDeveloper.commitChanges();
devOpsDeveloper.DeployApp();
console.log(`is ${devOpsDeveloper.name} developer? `, devOpsDeveloper instanceof Developer);
 
const fullStackDeveloper = createFullStackDeveloper('Fulanah');
fullStackDeveloper.buildUI();
fullStackDeveloper.buildAPI();
fullStackDeveloper.DeployApp();
console.log(`is ${fullStackDeveloper.name} developer? `, fullStackDeveloper instanceof Developer);
 