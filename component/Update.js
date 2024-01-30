import axios from "axios";
import { useState, useEffect } from "react";
import edit from "../image/edit.png";
import Delete from "../image/delete.png";




const Update = () => {
    const [mydata, setDate] = useState([]);
    const loadData = () => {
        let url = "http://localhost:3000/student";
        axios.get(url).then((resp) => {
            setDate(resp.data);
        });
    }

    useEffect(() => {
        loadData();
    }, [])

    const dataDelet = (myid) => {
        console.log(myid)
        let api = `http://localhost:3000/student/${myid}`
        axios.delete(api).then((res) => {
            alert("record Deleted!");
            loadData();
        });
    }

    const ans = mydata.map((key) => {
        return (
            <>
                <tr id="data">
                    <td>{key.rollno}</td>
                    <td>{key.name}</td>
                    <td>{key.class}</td>
                    <td>{key.fee}</td>
                    <td id="dataedit">
                        <img src={edit} alt="" />
                    </td>
                    <td id="datadelete">
                        <a href="#" onClick={() => {dataDelet(key.id)}}>
                            <img src={Delete} alt="" />
                        </a>
                    </td>
                </tr>
            </>
        );
    })
    return (
        <>

            <div id="Displaysect">

                <table id="Datatable" >
                    <tr>
                        <td id="header" colSpan="6">Display My Records</td>
                    </tr>
                    <tr id="head">
                        <th id="head1">RollNo</th>
                        <th id="head2">Name</th>
                        <th id="head3">Class</th>
                        <th id="head4">Fees</th>
                        <th id="head4" >Update</th>
                        <th id="head4">Delete</th>
                    </tr>
                    {ans}

                </table>
            </div>

        </>
    );
}

export default Update;