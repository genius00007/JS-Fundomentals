let a = 120, 
let i = 1, max = 0, last = 1;

if (a > 0) {
    max = a;
} else {
    max = b;
}

while (i <= max) {
    if (a % i === 0 && b % i === 0) {
        last = i;
    }
    i++;
}