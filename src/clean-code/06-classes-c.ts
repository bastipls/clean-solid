(()=>{

    // Aplicando el principio de responsabilidad única.
    // Priorizar la composicion frente a la herencia
    type Gender = 'M'|'F';

    interface PersonProps{
        name     :string;
        gender   :Gender;
        birthDate:Date;
    }

    class Person {
        public name:string;
        public gender:Gender;
        public birthDate:Date;
        constructor( {name, gender, birthDate}:PersonProps){
            this.name = name;
            this.gender = gender;
            this.birthDate = birthDate;
        }
    }
    interface UserProps{
        email:string,
        role:string,
    }

    class User {
      
        public email:string;
        public role:string
        public lastAccess:Date;
        constructor({
            email,
            role,
        }:UserProps){
            this.lastAccess = new Date()
            this.email = email;
            this.role = role;
        }

        checkCredentials(){
            return true
        }

    }
    interface SettingsProps{
        lastOpenFolder:string,
        workingDirectory:string,
    }
    class Settings{
        public workingDirectory:string;
        public lastOpenFolder:string;
        constructor(
           { workingDirectory,
            lastOpenFolder,
          }:SettingsProps){
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }
    interface UserSettingsProps{
        birthDate:Date
        email:string,
        gender: Gender,
        lastOpenFolder:string,
        name:string,
        role:string,
        workingDirectory:string,
    }
    class UserSettings{
        public person:Person;
        public user:User;
        public settings:Settings;
        constructor({
            name,
            gender,
            birthDate,
            email,
            role,
            lastOpenFolder,
            workingDirectory

        }:UserSettingsProps){
            this.person = new Person({name,gender,birthDate})
            this.user = new User({email,role})
            this.settings = new Settings({lastOpenFolder,workingDirectory})
        }
    }

    const userSettings = new UserSettings(
      {  
        birthDate:new Date('1998-11-22'),
        workingDirectory:'/user/home',
        lastOpenFolder:'/home',
        email:'bastian@gmail.com',
        role:'Admin',
        name:'Bastian',
        gender:'M'}
    )
    console.log(userSettings)

})();