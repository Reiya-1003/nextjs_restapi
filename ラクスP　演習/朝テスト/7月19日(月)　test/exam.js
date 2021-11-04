for(let hyaku = 1 ; hyaku <= 100 ; hyaku++){

    
    
    
    if(hyaku%15 === 0){
        console.log(hyaku+'は15の倍数です')
      }else if(hyaku%5 === 0){
        console.log(hyaku+'は5の倍数です')
      }else if(hyaku%3 === 0){
         console.log(hyaku+'は3の倍数です')
          } else if(!hyaku%15===0 && !hyaku%5 === 0 && !hyaku%3 === 0){
            console.log(hyaku)
        }
    }