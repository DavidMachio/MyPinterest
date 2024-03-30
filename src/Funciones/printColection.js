import { createColections } from "./createColections"
import { getCollections } from "./getCollections"

export const printColection = async () => {
    getCollections('random')
    .then((colectionList) => {
        createColections(colectionList)
    })
    
}