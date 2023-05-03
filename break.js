// break

for(var i = 1; i < 10; i++){

    console.log(i)
    if (i > 5) {
        break;
    }
}

/* ans :-
1
2
3
4
5
6
*/ 

var nums = [10,40,50,60,70,]
for(var i = 0; i < nums.length; i++){

var element = nums[i];

if (element == 60) {
    break;
}
console.log(element)
}
/* ans :-
10
40
50
*/  


var friendNames = ["Tanvir", "sabit", "susan", "Susan", "aqib"]

for (let i = 0; i < friendNames.length; i++) {

    const element = friendNames[i];
if (element == "susan") {
    break;
}

    console.log(element)
}
/* ans :-
Tanvir
sabit
*/ 



var  i = 0;
while(i < 10){
    console.log("ami valo achi")

    i++
    if (i > 4) {
        break;
    }
}

/*
ami valo achi
ami valo achi
ami valo achi
ami valo achi
ami valo achi
*/ 


// continue

var points = [10, 15, 20, 25, 30, 35, 40, 45, 50, 56, 57, 60, 70, 44, 32];


for (let i = 0; i < points.length; i++) {

    const element = points[i];
    if (element > 50) {
        continue;
    }
    console.log(element)
}

/* ans :-
10
15
20
25
30
35
40
45
50
44
32

*/ 