(()=>{

    // No aplicando el principio de responsabilidad única.

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
        gender:Gender,
        name:string,
        birthDate:Date,
    }

    class User extends Person{
      
        public email:string;
        public role:string
        public lastAccess:Date;
        constructor({
            birthDate,
            email,
            gender,
            name,
            role,
        }:UserProps){
            super({name,gender,birthDate})
            this.lastAccess = new Date()
            this.email = email;
            this.role = role;
        }

        checkCredentials(){
            return true
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
    class UserSettings extends User{
        public workingDirectory:string;
        public lastOpenFolder:string;
        constructor(
           { workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthDate}:UserSettingsProps){
            super({email, role,name,gender,birthDate})
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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