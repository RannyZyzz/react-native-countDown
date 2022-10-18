export function convertDate(atualDate: number, futureDate: Date){
    const data1 = atualDate
    const data2 = futureDate
    const diffInMs = new Date(data2) - new Date(data1)
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24)
    const seconds = diffInDays * 24 * 60 * 60;
    return(seconds)
}


