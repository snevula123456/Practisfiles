const sinking : Array<string> = [];

function merge <T extends object, U extends object> (A : T, B : U){
     return Object.assign(A,B)
}




interface Lengthy {
     length : number
}
function countAndDescribe <Y extends Lengthy> (element : Y) {

     let description = "Got No value";
     if(element.length ===1 ){
      description = "Got 1 Elements"
     }else if(element.length > 1){

          description = "Got " + element.length + " Elements"
     }
     return [element, description]
}

function extractAndConvert<L extends object, M extends keyof L> (obj : L, key : M) {

     return obj[key]
}

export {merge, countAndDescribe, extractAndConvert};