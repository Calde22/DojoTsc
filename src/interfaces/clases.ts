(()=> {

    interface Xmen {
        name: string;
        realName: string;
        mutantPower( id: number ):string;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human {
        public age: number = 10;
        public name: string = 'Nombre';
        public realName: string = 'Nombre Real';
        
        mutantPower( id: number ) {
            return this.name + ' ' + this.realName;
        }
    }


})()