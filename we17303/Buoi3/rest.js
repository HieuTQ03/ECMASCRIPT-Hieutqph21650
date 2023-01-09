function tolal(...number) {
    let resault = 0;
    for (i = 0; i < number.length; i++) {
        resault += number[i];
    }
    return resault;
}
console.log(tolal(1, 2, 3, 4, 5, 6, 7, 8)); 