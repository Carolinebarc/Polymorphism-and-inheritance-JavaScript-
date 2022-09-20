import { Animal } from "./animal";
import { IMakeNoise } from "./IMakeNoise";
import { IRun } from "./IRun";



class cavalo extends Animal implements IMakeNoise, IRun {
  
   constructor (name: string, lifeTime:number) {
   
    super (name, lifeTime );

   this.lifeTime = lifeTime
   this.name = name
   
 

   } 
   public run (): void {
       console.log(`${this.name} pode correr. `); 
   }
   public noise(): void {
       console.log(`${this.name} emite som`)
   
   }

}

export { cavalo };