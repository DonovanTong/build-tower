function tower(num) {
    let arr = []
    for (let i = 0; i < num; i++) {
        let str1 = ' '
        let str2 = '*'
        console.log("'" + str1.repeat(num - (i + 1)) + str2.repeat(i + 1) + str2.repeat(i) + str1.repeat(num - (i + 1)) + "'")
        // arr.push("'" + str1.repeat(num - (i + 1)) + str2.repeat(i + 1) + str2.repeat(i) + str1.repeat(num - (i + 1)) + "'")
        // console.log(arr[i])
    }
    
    console.log(' ')
}

tower(4)
tower(2)
tower(7)
tower(3)