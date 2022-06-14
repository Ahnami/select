
    let res=[10,50,100,1000]
    var point=0;
    for(i=0; i<=3;i++ ){
        point = res[i];
    
    if(point<50){
        console.log("fail");
       }else if( point<80){
           console.log("pass");
       }else if(point<=100){
           console.log("Distinction");
        }else {
           console.log("error");
       }
    }