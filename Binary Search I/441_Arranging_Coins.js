var arrangeCoins = function(n) {
    let i = 1;
    let stairs = 1;
    while(n >= 0){
        console.log('n :', n);
        console.log('i :', i);
        console.log('==================');
        console.log('stairs :', stairs);
        n-=i;
        if(n > i){
            stairs++;
        }
        i++;
    }
    console.log('stairs :', stairs);
};


// let n = 5; //2
let n = 8; //3

arrangeCoins(n);