type Size = '' | 'S' | 'M' | 'XL';
class Product{
    constructor(
        public name: string ='',
        public price: number = 0,
        public size: Size = '',

    ){}


    

    isProductReady():boolean{
        for(const key in this){
            switch(typeof this[key]){
                case 'string':
                    if((<string><unknown>this[key]).length <= 0) throw Error(`${key} is required`);
                    break;
                case 'number':
                    if((<number><unknown>this[key]) <= 0) throw Error(`${key} is zero`);
                    break;
                default:
                    throw Error(`${key} is not supported`);

            }
        }
        return true
    }

    toString(){
        // if(this.name.length <= 0) throw Error('name is required');
        // if(this.price <= 0) throw Error('Price is zero');
        // if(this.size.length <= 0) throw Error('size is required');
        if(!this.isProductReady()) throw Error('Product is not ready');

        return `${this.name} (${this.price}), size: ${this.size}`;
    }
}



(()=>{
    const bluePants = new Product('jeans azul',10,'M');
    console.log(bluePants.toString());
})();