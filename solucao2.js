class Hero {
	constructor(name, age, archetype) {
    	this.name = name;
    	this.age = age;
    	this.archetype = archetype;
    }
    
    attack() {
    	const attackTypes = {
        	'Mago': 'Magia',
        	'Guerreiro': 'Espada',
        	'Monge': 'Artes Marciais',
        	'Ninja': 'Shuriken'
        };
        
        const attackType = attackTypes[this.archetype];
        
        if (attackType) {
        	console.log(`O ${this.archetype} atacou usando ${attackType}`);
        } else {
        	console.log('Classe não mapeada, por favor insira uma classe válida');
        }
    }
}

let ninja = new Hero('Alerquina', '50','Ninja');
ninja.attack();  

let monge = new Hero('Bruce Lee', '60', 'Monge');
monge.attack(); 