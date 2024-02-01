import { Link, Outlet } from "react-router-dom";




const Layout = () => {
    return (
        <>
            <div id="navbar">
                <Link to="home" id="homebtn">Home</Link>
                <Link to="insert" id="Insertbtn">Insert</Link>
                <Link to="display" id="disbtn">Display</Link>
                <Link to="update" id="updatbtn">Update</Link>
                <Link to="search" id="searchbtn">Search</Link>
            </div>
            <hr size="2" bgcolor="red" />
            <Outlet />
            <div id="footer">
                <ul id="footdiv1">
                    <li>Company</li>
                    <li><Link to="one2" id="btn1">Link1</Link></li>
                    <li><Link to="one3" id="btn1">Link2</Link></li>
                    <li><Link to="one4" id="btn1">Link3</Link></li>
                </ul>
                <ul id="footdiv1">
                    <li>Services</li>
                    <li><Link to="two2" id="btn1">Link4</Link></li>
                    <li><Link to="two3" id="btn1">Link5</Link></li>
                    <li><Link to="two4" id="btn1">Link6</Link></li>
                </ul>
                <ul id="footdiv1">
                    <li>Quick</li>
                    <li><Link to="thre2" id="btn1">Link7</Link></li>
                    <li><Link to="thre3" id="btn1">Link8</Link></li>
                    <li><Link to="thre4" id="btn1">Link9</Link></li>
                </ul>
                <ul id="footdiv1">
                    <li>Social Link</li>
                    <li><Link to="four2" id="btn1">Link10</Link></li>
                    <li><Link to="four3" id="btn1">Link11</Link></li>
                    <li><Link to="four4" id="btn1">Link12</Link></li>
                </ul>
            </div>
            <div id="developer">Developer : Indrajeet Yaduwanshi</div>
        </>

    );
}

export default Layout;