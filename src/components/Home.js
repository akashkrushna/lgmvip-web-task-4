import React, {useState} from 'react'
import classes from "./Home.module.css"
import Button from './Button'

function Home() {

    const [res, setRes] = useState("")  // Using the useState hook to create a state variable 'res' and its corresponding setter 'setRes'

    const buttons = ["AC","DEL","/","7","8","9","*","4","5","6","-","1","2","3","+","0",".","="];  // Defining an array of button values

    const findval = () =>{  // Defining a function named 'findval' to evaluate the expression and update the 'res' state

        // eslint-disable-next-line 
        let result = Function("return " +res)();  // Evaluating the expression using the Function constructor
        setRes(result.toString());  // Converting the result to a string and updating the 'res' state
    }

    const handler = (arg) => {  // Defining a function named 'handler' to handle button clicks
        if(res === "Infinity"){
            setRes("");
            return;
        }

        if(arg === "AC") setRes("");
        else if( arg === "=") findval();
        else if(arg === "DEL"){
            let n = res.length;  // Storing the length of the 'res' state value in a variable
            if(n>0)  // Checking if the length is greater than 0
            setRes(res.slice(0,n-1));  // Updating the 'res' state by removing the last character
        }
        else setRes(res.concat(arg))

    }

  return (
    <div className={classes.home}>
        <div className={classes.inner}>
            <div className={classes.result}>
                <div className={classes.resbox}>
                    {res}
                </div>
            </div>
        <div className={classes.btns}>
            {buttons.map((ele,index)=> {return <Button handler={handler} value={ele} key={index}/>})}
        </div>
        </div>
    </div>
  )
}

export default Home