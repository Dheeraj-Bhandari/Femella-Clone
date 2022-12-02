
const Validation = (data) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if(!data.fullname){
        errors.fullname= "Name is requiers!"
    }

    if(!data.email){
        errors.email = "Email is required!"
    }else if (!regex.test(data.email)) {
        errors.email = "This is not a valid email format!";
      }

    if(!data.password){
        errors.password="Password is required!"
    }
    else if(data.password.length < 4){
        errors.password = "Password must be more than 4 characters!"
    }

    return errors;
}

export default Validation;