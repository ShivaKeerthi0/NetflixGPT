export const validateData = (email, password, name, isSignUpForm) => {

    let message = null;
    let  nameValid = "";

    if(!isSignUpForm) {

      nameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

    }

    const emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);


    if(!isSignUpForm && !nameValid){
        return message = "Name is invalid";
    } else if(!emailValid){
        return message = "Email is invalid";
    }else if(!passwordValid){
        return message = "Password is invalid";
    }

return message;


}