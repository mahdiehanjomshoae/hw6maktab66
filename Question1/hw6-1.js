function comper(s1, s2) {
    let count = 0;
    const arr1 = s1.split('');
    const arr2 = s2.split('');
    for (let i = 0; i < arr1.length; i++) {
        let index = arr2.indexOf(arr1[i]);
        if (index !== -1) {
            arr2.splice(index, 1);
            count += 1
        }
    }

    return count
}
console.log(comper("aabcc", "adcaa")) 