import {useEffect, useState} from "react";

const Signup = () => {

    const [userInfo,setUserInfo]= useState( { 
        fname: "",
        lname: "",
        email:"",
        pass:""
    }
    );

    const onChange = (e) => {
        setUserInfo( {...userInfo,[e.target.id]:e.target.value});
    };
    const [post, setPost] = useState(null);
    const [myerror,setError]=useState("");
    useEffect(()=>{
        if(myerror!="")
            document.getElementById("error").innerHTML="Error Occured. User already Exists!!!"
    },myerror)
    
const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(userInfo);
    let {fname,lname,email,pass} = userInfo;    
    console.log(fname);  
    console.log(lname);  
    console.log(email);  
    console.log(pass);
    console.log("Before Fetch");
    
    try{
        let check = await fetch('http://localhost:5000/usercheck?email='+email, {
            method: "get",
            headers: {
                'Content-Type': 'application/json',
                    'Accept': 'application/json'
            }
        })
        check =await check.json();
        console.log("Check: "+check.length)
        if(check.length === 0){
            let result = await fetch('http://localhost:5000/signup', {
                method: "post",
                body: JSON.stringify({fname,lname,email,pass}),
                headers: {
                    'Content-Type': 'application/json',
                        'Accept': 'application/json'
                }
            })
            console.log("After Fetch");
            result = await result.json();
            console.warn(result);
            if (result) {
                alert("User created successfully");        
            }
        }
        else{
            alert("User already exists!!");  
        }
    } catch(error){
        console.log(error)
    }
}

    return (
        <form className="mt-2" action="">
            <div className="form-group">
                <label htmlFor="fname"> First Name </label>
                <input  id="fname" type="text" 
                placeholder="First Name"
                value={userInfo.fname}
                onChange={onChange}
                className="form-control"
                name="fname"
                />
            </div>
            <div className="form-group">
                <label htmlFor="lname"> Last Name </label>
                <input  id="lname" type="text" 
                placeholder="Last Name"
                value={userInfo.lname}
                onChange={onChange}
                className="form-control"
                name="lname"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">  Email </label>
                <input id="email" type="email"
                value={userInfo.email}
                placeholder="Email"
                className="form-control"
                name="email"
                onChange={onChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="pass"> Password  </label>
                <input id="pass" type="password"
                value={userInfo.pass}
                className="form-control"
                placeholder="Password"
                name="pass"
                onChange={onChange}/>
            </div>
            <button type="submit" className="btn btn-primary mt-2"
            disabled={ !userInfo.fname || !userInfo.lname || !userInfo.email ||!userInfo.pass }
            value="submit" onClick={handleOnSubmit}>  Submit </button>
            <h3 id="error"></h3>
           
            
        </form>
    );
};

export default Signup;