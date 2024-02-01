import axios from "axios";
import { useState } from "react";



const Search = () => {
     const [rollno, setrollno]=useState("");
     const [mydata, setMydate]=useState([]);
     const submithandle=()=>{
     let url=`http://localhost:3000/student/?rollno=${rollno}`; 
      axios.get(url).then((res)=>{
         if(res.data.length>=1){
            setMydate(res.data)
            document.getElementById('searcherr').innerHTML="";
            // console.log()
         }
         else{
            document.getElementById('searcherr').innerHTML="No Data Found!!!";
         }
      })
    }

    const myans=mydata.map((key)=>{
        return(
            <>
            <div>
                <h3>Rollno :{key.rollno} </h3>
                <h3>Name :{key.name} </h3>
                <h3>Class :{key.class} </h3>
                <h3>Fees : {key.fee}</h3>
            </div>
            </>
        );
    })
    return (

        <>
            <div id="search_body">
                <div id="sear_box">
                    <div id="searchtitle">Search Record!!</div><br />
                    <div id="searchdiv">
                    <input type="text" name="search" id="searchinput" placeholder="Search Details by id" onChange={(e)=>setrollno(e.target.value)}/>
                    <button type="button" id="searchsubmit" onClick={submithandle}>Search</button>
                    </div>
                    <div id="searcherr"></div>
                    {myans}
                </div>
            </div>
        </>
    );
}
export default Search;