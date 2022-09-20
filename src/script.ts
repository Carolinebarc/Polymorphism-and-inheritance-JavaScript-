import { cavalo } from "./cavalo";
import { IMakeNoise } from "./IMakeNoise";
import { IRun } from "./IRun";
import { IClimbTree } from "./IClimbTree";

const cavalo = new Cavalo ('preto',true, 'patolino' , 7 , 50, 2);

function takeoff (animal: ICanFly) {
    animal.fly();    
}
function takeoff1 (animal: ICanSwim) {
    animal.swim();    
}
function takeoff2(animal: ICanWalk) {
    animal.walk();    
}


takeoff(duck); 
takeoff1(duck); 
takeoff2(duck); 

