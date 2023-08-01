exports.getNumberTable = (num) => {
    let table = ``
    for (let index = 1; index < 11; index++) {
        table = table + `${num} X ${index} = ${index * num}
        `
    }
    return table
}