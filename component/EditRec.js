import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";



const EditRec = () => {
    const { myid } = useParams();
    const [mydata, setDate] = useState({});
    const myNavbar=useNavigate();

    const loadData = () => {
        let url = `http://localhost:3000/student/${myid}`;
        axios.get(url).then((res) => {
            setDate(res.data);
        });
    }
    useEffect(()=>{
        loadData();
    },[])
 const inputHnadle=(e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setDate(values=>({...values,[name]:value}));
 }

 const dataHandler=()=>{
    let api=`http://localhost:3000/student/${myid}`;
    axios.put(api,mydata).then((res)=>{
        alert("Data Update successfully");
        myNavbar("/update")
    })
 }

    return (
        <>
         <body id="formbody">
                <div id="inputbox">
                    <h3>Student Registration</h3>
                    <input type="text" name="rollno" placeholder="Enter your Rollnumber" value={mydata.rollno} onChange={inputHnadle} /><br /><br />
                    <input type="text" name="name" placeholder="Enter your Name" value={mydata.name} onChange={inputHnadle} /><br /><br />
                    <input type="text" name="class" placeholder="Enter your Class" value={mydata.class} onChange={inputHnadle} /><br /><br />
                    <input type="text" name="fee" placeholder="Enter your Fees" value={mydata.fee} onChange={inputHnadle} /><br /><br />
                    <button type="submit" id="sumbtn" onClick={dataHandler}>Submit</button>
                </div>
            </body>
        </>
    );
}
export default EditRec;