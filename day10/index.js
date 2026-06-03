const userDetails = {
    "name": "username321",
    "email": "myEmail123@gmail.com",
    "message": "iLoveYouMessage"
}

//const userJson = JSON.parse(userDetails);
const printMessage = () => {
    try{
        console.log(`Message Recieved From ${userDetails.name}`)
    }
    catch(e) {
        console.error(e)
    }
    
}

printMessage()