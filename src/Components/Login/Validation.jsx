const Validation = (inputData) =>{
    let errors = {}

    if(!inputData.email){
        errors.email= "Email Required"
    }
    else if(inputData.email.length<5){
        errors.email = "Email must be more than 10 char"
    }
    else if(inputData.email!=="shubhamkumar@gmail.com"){
        errors.email = "Email is not correct"
    }
    
    if(!inputData.password){
        errors.password= "Password Required"
    }
    else if(inputData.password.length<9){
        errors.password = "Password must be more than 8 char"
    }
    else if(inputData.password!=="kumar@1234"){
        errors.password = "Password is not correct"
    }
    return errors
}

export default Validation