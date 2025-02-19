
        //promises
        //promises is an object returned by an asynchronus function which represent the current 
        //state of the operation.
        // promises based api the asynchronus funtion start the operation  and return promise object.
        // we can attach the handler to this promise object and this handler will be executed when 
        // operation is succed or failed
        
        //promise object support two properties 1,state 2.result but cannot acccess
        //states of promises 1. fulfill 2. pending 3. rejected
        // handler types 1.then() , catch() , finally()

        //then method taeks two function one for successful execution and other for error
        
        const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

        //console.log(fetchPromise);

        fetchPromise.then( (response) =>{
            console.log(response);
            console.log(`Received response : ${response.status}`);
        });

        console.log("Started request...")

        // new Promise( (resoleOuter) =>{
        //     resoleOuter(
        //         new Promise ( (resloveInner) => {
        //             setTimeout(resloveInner , 1000);
        //         }),
        //     );
        // });

        const myPromise = new Promise ( (resolve ,reject ) =>{
            setTimeout( ()=>{ 
                    fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
                    .then( (response)=>{
                        resolve(response);
                    } )
                    .catch( (error) => {
                        console.log('got error');
                        reject(error);
                    }) 
            } , 3000 )
        });

        myPromise.then( (response)=>{
            console.log(response);
        })
        .catch( (error)=>{
            console.log(error);   
        })
        


        const promise2  = new Promise( (resolve , reject) =>{

            let a = true;

            setTimeout( ()=>{
                if(a){
                    resolve("Promise resolve sucessfully");
                }
                else{
                    reject("Promise rejected");
                }
            } ,3000 )
        } );
        console.log("promise 2 " , promise2);

        promise2.then( (response)=>{
            console.log(response);
        } )
        .catch( (error)=>{
            console.log(error);
        })
        .finally( ()=>{
            console.log("Promise completed");
            console.log("promise 2" , promise2);
        })


        //function return a  promise 
        //fetching API
        function fetch_API(){
            return new Promise ( (resolve, reject) =>{

                setTimeout( ()=>{
                    fetch('https://jsonplaceholder.typicode.com/posts/1')
                    .then( (response)=>{
                        let data = response.json();
                        resolve(data);
                    })
                    .catch( (error)=>{
                        reject(error);
                    })
                }, 300 )
            })
        }

        fetch_API()
                    .then((response)=>{
                        console.log(response);
                    } )
                    .catch((error)=>{
                        console.log(error)
                    })
                    .finally(()=>{
                        console.log(`JSON API final value`);
                    })




    // chaining Promises 
    
    function firstTask(){
        return new Promise( (resolve, reject)=>{
            setTimeout(()=>{
                console.log("First task completed with ")
                resolve("data from first Task")
            }, 1000)
        })
    }
    function SecondTask(data){
        return new Promise( (resolve, reject)=>{
            setTimeout(()=>{
                console.log("Second task completed with",data)
                resolve("data from second Task")
            }, 1000)
        })
    }

    firstTask()
                .then((response)=>{
                        //console.log(resolve);
                        let data = response;
                         SecondTask(data)
                                        .then((finalResponse)=>{
                                            console.log("Final response " , finalResponse);
                                        })
                                        .catch((error)=>{
                                            console.log("error from 2 ",error);
                                        })
                                        .finally(()=>{
                                            console.log("Whole execution of chaining is done!!!")
                                        })
                })
                .catch((error)=>{
                    console.log("error form 1 ", error)
                })
                .finally(()=>{
                    console.log("Finally First task over ")
                })
    
        // Promise.all() -> multiple independent promises need to be resolved
        Promise.all([firstTask() , SecondTask(), myPromise , promise2])
                .then((result)=>{
                    console.log("ALL PROMISED RESOLVED !!");
                })
                .catch((error)=>{
                    console.log("ERROR IN ONE OF THE PROMISES", error);
                })

        //promise.race() -> resolve or reject as soon as the first promise settles.
        //  Promise.race([firstTask() , SecondTask()])
        // .then((result)=>{
        //             console.log("ALL PROMISED RESOLVED !!");
        //         })
        //         .catch((error)=>{
        //             console.log("ERROR IN ONE OF THE PROMISES", error);
        //         })