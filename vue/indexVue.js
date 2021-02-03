console.log('hello woo');


var handler = () => {
    
        setTimeout(() => {
            $("#myButton").attr("class","btn btn-success");
            console.log("done");
        }, 5000)
}


