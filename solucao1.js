class Hero{
	constructor(name, age, archetype){
    this.name = name
    this.age = age
    this.archetype = archetype
    }
    
    attack(){
    let attackType;
    switch (this.archetype) {
    case 'Mago':
   		attackType = 'Magia';
        break;
    case 'Guerreiro':
    	attackType = 'Espada';
    	break;
    case 'Monge':
    	attackType = 'Artes Marciais';
        break;
    case 'Ninja':
    	attackType = 'Shuriken';
        break;
     default:
        console.log('Classe nao mapeada, por favor insira uma classe válida');
            break;
     } 
     
     if (attackType != null) {
         console.log(`O ${this.archetype} atacou usando ${attackType}`)
     }
     
    }
}

	let mago = new Hero ('Merlin', '99', 'Mago');
    mago.attack();
    
    let guerreiro = new Hero('Arthur', '30', 'Guerreiro');
    guerreiro.attack();
    
    let principe = new Hero('Pequeno', '15', 'Principe');
    principe.attack();