const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', `i`],
        [
            ['Giulia', 'Well'],
            ['Vitu', 'Giovanna']
        ]
    ]
];

console.table(arr);
console.log(arr[0]);
console.log(arr[0][0]);
//console.log(arr[x][y]);
console.log(arr[3][0]);
console.log(arr[3][1][2]);