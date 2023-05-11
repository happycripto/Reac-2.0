import MOCK_DATA from "../data/MOCK_DATA"

//Simil de bajar info de un servidor
export const pedirDatos = () => {   return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA)
            // if (bool) {
            //     resolve("Promesa resuelta")
            // } else {
            //     reject("Promesa rechazada")
            // }
        }, 1000)
    })
}