import '../../App.css';
import React from "react";

export default function AsyncScreen() {

    function callAPI(payload) {

        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                try{
                    resolve({ isSuccess: true })
                }
                catch(error){
                    reject(error)
                }
            }, payload.delay)
        })
    }

    // 1
    function fetchUser(){

        return new Promise((resolve, reject)=> {
            console.log("fetchUser:Called");
            let payload = {
                delay: 2000
            }
    
            const res = callAPI(payload);
            res.then((response)=> {
                console.log("fetchUser:Then: ", response);
                resolve(response)
            });
            res.catch(error=> {
                console.log("fetchUser:catch: ", error);
                reject(error)
            })
        })
    }

    // 2
    function fetchLabs() {

        return new Promise((resolve, reject)=> {
            console.log("fetchLabs:Called");
            let payload = {
                delay: 5000
            }
    
            let res = callAPI(payload);
            res.then((response) => {
                console.log("fetchLabs:Then: ", response);
                resolve(response);
            });
            res.catch(error => {
                console.log("fetchLabs:catch: ", error);
                reject(error);
            })
        })
    }

    // 3
    function fetchDoctorList() {
        return new Promise((resolve, reject)=> {
            console.log("fetchDoctorList:Called");
            let payload = {
                delay: 10000
            }
    
            callAPI(payload).then((response) => {
                console.log("fetchDoctorList:Then: ", response);
                resolve(response);
            }).catch(error => {
                console.log("fetchDoctorList:catch: ", error);
                reject(error)
            })
        })
    }

    async function appStart(){

        console.log("App Start");
        // try {
            
        //     let userResponse = await fetchUser();
        //     let labsRes = await fetchLabs(userResponse);
        //     let doctorRes = await fetchDoctorList(labsRes);

        // } catch (error) {
        //     console.log("error==", error);
        // }
            
        Promise.all([fetchUser(), fetchLabs(), fetchDoctorList()]).then((response)=> {

            console.log("Promise.all:then==", response[0]);
        }).catch(error=> {
            console.log("Promise.all:catch==", error);
        })

        // fetchUser().then((response)=> {
        //     fetchLabs().then((response)=> {
        //         fetchDoctorList().then((response)=> {

        //         }).catch(error=> {
        //             console.log("error==", error);
        //         });
        //     }).catch(error => {
        //         console.log("error==", error);
        //     });
        // }).catch(error => {
        //     console.log("error==", error);
        // });

        console.log("App Stopped");
    }

    function test(){

        console.log("Test Start");
        appStart();
        console.log("Test End");
    }


    return (
        <div className="App">
            <header className="App-header">
                Async Screen
                <button onClick={() => fetchUser()}>Fetch User</button>
                <button onClick={() => fetchDoctorList()}>Fetch List</button>
                <button onClick={() => fetchLabs()}>Fetch Labs</button>

                <button onClick={() => test()}>App Start</button>
            </header>
        </div>
    );
}