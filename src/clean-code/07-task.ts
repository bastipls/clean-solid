(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        public id: string;
        public type: HtmlType;
        constructor({
            id,
            type
        }:{id:string,type:HtmlType}
        ) {
            this.id = id;
            this.type = type;
        }
    }

    class InputAttributes {
        public value: string;
        public placeholder: string;
        constructor({ 
            value,
            placeholder
        }:{value:string,placeholder:string}) {
            this.value = value
            this.placeholder = placeholder
        }
    }

    class InputEvents  {
        
        constructor() {}

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }
    class InputElement {
        public htmlElement:{id:string,type:HtmlType};
        public inputAttributes:{value:string,placeholder:string};
        public inputEvents:InputEvents;
        constructor({
            id,
            type,
            value,
            placeholder
        }:{
            id:string,
            type:HtmlType,
            value:string,
            placeholder:string
        }) {
            this.htmlElement = new HtmlElement({id,type});
            this.inputAttributes = new InputAttributes({value,placeholder});
            this.inputEvents = new InputEvents()
        }
    }

    //? Idea para la nueva clase InputElement

    const nameField = new InputElement({
        id: 'name',
        type: 'input',
        value: 'TEST',
        placeholder: 'Name'
    });

    console.log({ nameField });

})()