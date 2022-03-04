import { Imprimivel } from "../utils/imprimivel.js";
import { Comporavel } from "./comporavel.js";

export interface Modelo<T> extends Imprimivel, Comporavel<T>{
    
}