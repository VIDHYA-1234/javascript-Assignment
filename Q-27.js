// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included)

    for(var i=2; i<=100; i++){
        var flag=0;
        for(var j=2; j<=i/2;j++ ){
            if(i%j==0){
            flag=1;
            break;

            }
        }
        if(flag===0){
            console.log(i)
        }
    }