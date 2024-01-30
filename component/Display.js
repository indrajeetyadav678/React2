import { useState, useEffect } from "react";
import axios from "axios";


const Display = () => {
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
    const ans = mydata.map((key) => {
        return (
            <>
                <tr id="data">
                    <td>{key.rollno}</td>
                    <td>{key.name}</td>
                    <td>{key.class}</td>
                    <td>{key.fee}</td>
                </tr>
            </>
        );
    })
    return (
        <>

            <div id="Displaysect">

                <table id="Datatable" >
                    <tr>
                        <td id="header" colSpan="4">Display My Records</td>
                    </tr>
                    <tr id="head">
                        <th id="head1">RollNo</th>
                        <th id="head2">Name</th>
                        <th id="head3">Class</th>
                        <th id="head4">Fees</th>
                    </tr>
                    {ans}
                    <tr id="Datafoot">
                        <td id="total" colSpan="3">Total Sum of Amount</td>
                        <td id="sum">2</td>
                    </tr>
                </table>
            </div>

        </>
    );

}
export default Display;