import { Animal } from "./animal";
import { IMakeNoise } from "./IMakeNoise";
import { IClimbTree } from "./IClimbTree";



class preguica extends Animal implements IMakeNoise, IClimbTree {
  
   constructor (name: string, lifeTime:number) {
   super (name, lifeTime );
   this.lifeTime = lifeTime
   this.name = name
   
 

   } 
   public climb(): void {
 
       console.log(`${this.name} pode subir em árvores. `); 
   }
  
   public noise(): void {
       console.log(`${this.name} emite som`)
   
   }

}

export { preguica };