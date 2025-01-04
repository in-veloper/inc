import Notiflix from "notiflix";

export const showBlock = (target: string, message: string = '') => {
    if(target) {
        Notiflix.Block.standard(target, message)
    }
}

export const hideBlock = (target: string) => {
    Notiflix.Block.remove(target)
}