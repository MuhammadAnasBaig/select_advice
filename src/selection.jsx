import { useState } from "react";
import "./selection.css"

function SelectionApp(){

    const [counter,setCounter] = useState(1)
    const [advice, setAdvice] = useState([
        "Pick One Language....",
        "Build Something....",
        "Learn How to Debug....",
        "Understand How the code Actually Works...."
    ])


    function nextHandler() {
        if(counter <4){
            setCounter((c) => {
                console.log(c);
                return counter + 1
            })
        }
    }


    function previousHandler(){
        if(counter >1){
            setCounter((c)=>{
                console.log(c);
                return counter -1
            })
        }
    }

    return(
        <>
        <div style={{ width: "100vw", height: "100vh", background: "linear-gradient(to bottom right, #AE445A,#662549 )" }}>

        <h1 style={{ fontFamily:"cursive",textAlign: "center", padding: "15px 0px", fontSize: "2.5rem",color:"#ffff" }}>Software Engineer Advices</h1>

        <div style={{ margin: "25px 20px",color:"white", height: "350px", backgroundColor: "#E19898", borderRadius: "20px", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ display: "flex", justifyContent: "space-around", width: "100%",color:"#ffff" }}>
                {Array.from([1, 2, 3, 4], (x) => (

                    <div style={{
                        width: "50px", height: "50px", backgroundColor:
                            counter >= x ? "#451952" : "#F39F5A"
                        , borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center"
                    }}>
                        {x}
                    </div>

                ))}
            </div>

            <div style={{ width: "100%", textAlign: "center", padding: "10px", margin: "20px 0px", height: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h1>
                    {
                        advice[counter - 1]
                    }
                </h1>
            </div>

            <div style={{ display: "flex", justifyContent: "space-around" }}>
                {
                    Array.from(["Previous", "Next"], (btn) => (
                        <button className="btns" onClick={btn == "Previous" ? previousHandler : nextHandler} >
                            {
                                btn
                            }
                        </button>
                    ))
                }
            </div>

        </div>
    </div>
</>
)
    
}
export default SelectionApp;
