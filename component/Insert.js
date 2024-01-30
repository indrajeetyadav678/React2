import { useState } from "react";
import axios from "axios"

const Insert = () => {
    const [input, setInput] = useState([]);
    const inputHnadle = (e) => {
        const name = e.target.name;
        const myvalue = e.target.value;
        setInput(values => ({ ...values, [name]: myvalue }))
    }

    const dataHandler = () => {
        let api = "http://localhost:3000/student";
        axios.post(api, input).then((res) => {
            alert("data saved!!!");
        })
    }

    return (
        <>
            <body id="formbody">
                <div id="inputbox">
                    <h3>Student Registration</h3>
                    <input type="text" name="rollno" placeholder="Enter your Rollnumber" value={input.rollno} onChange={inputHnadle} /><br /><br />
                    <input type="text" name="name" placeholder="Enter your Name" value={input.name} onChange={inputHnadle} /><br /><br />
                    <input type="text" name="class" placeholder="Enter your Class" value={input.class} onChange={inputHnadle} /><br /><br />
                    <input type="text" name="fee" placeholder="Enter your Fees" value={input.fee} onChange={inputHnadle} /><br /><br />
                    <button type="submit" id="sumbtn" onClick={dataHandler}>Submit</button>
                </div>
            </body>
        </>
    );
}

export default Insert;