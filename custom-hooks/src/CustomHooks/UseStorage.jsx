export default function useStorage(){
    let setStorage = (val) => {
        localStorage.setItem("data",val)
        sessionStorage.setItem("data",val)
    }
    return {setStorage};
}