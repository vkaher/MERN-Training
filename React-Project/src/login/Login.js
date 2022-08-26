import { useState} from "react";

const Login = () => {

    const [loginInfo,setLoginInfo]= useState( { 
        email:"",
        pass:""
    }
    );

    const onChange = (e) => {
        setLoginInfo( {...loginInfo,[e.target.id]:e.target.value});
    };

const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(loginInfo);
    let {email,pass} = loginInfo;    
    console.log(email);  
    console.log(pass);
    console.log("Before Fetch");
    
    try{
        let result = await fetch('http://localhost:5000/login', {
            method: "post",
            body: JSON.stringify({email,pass}),
            headers: {
                'Content-Type': 'application/json',
                    'Accept': 'application/json'
            }
        })
        console.log("After Fetch");
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Login successful");        
        }
    } catch(error){
        console.log(error)
    }
}

    return (
        <form className="mt-2" action="">
            <div className="form-group">
                <label htmlFor="email">  Email </label>
                <input id="email" type="email"
                value={loginInfo.email}
                placeholder="Email"
                className="form-control"
                name="email"
                onChange={onChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="pass"> Password  </label>
                <input id="pass" type="password"
                value={loginInfo.pass}
                className="form-control"
                placeholder="Password"
                name="pass"
                onChange={onChange}/>
            </div>
            <button type="submit" className="btn btn-primary mt-2"
            disabled={ !loginInfo.email ||!loginInfo.pass }
            value="submit" onClick={handleOnSubmit}>  Submit </button>
            <h3 id="error"></h3>
           
           
        </form>
    );
};

export default Login;