(()=>{

    // No aplicando el principio de responsabilidad única.

    type Gender = 'M'|'F';
    class Person {
       
        constructor(
            public name:string,
            public gender:Gender,
            public birthDate:Date,

        ){}
    }
    class User extends Person{
        public lastAccess:Date;
        constructor(
            public email:string,
            public role:string,
         
            name:string,
            gender:Gender,
            birthDate:Date,

        ){
            super(name,gender,birthDate)
            this.lastAccess = new Date()
        }

        checkCredentials(){
            return true
        }

    }

    class UserSettings extends User{
        constructor(
            public workingDirectory:string,
            public lastOpenFolder:string,
            email:string,
            role:string,
            name:string,
            gender: Gender,
            birthDate:Date
        ){
            super(email, role,name,gender,birthDate)
        }
    }
    const userSettings = new UserSettings(
        '/user/home',
        '/home',
        'bastian@gmail.com',
        'Admin',
        'Bastian',
        'M',
        new Date('1998-11-22')
    )
    console.log(userSettings)

})();