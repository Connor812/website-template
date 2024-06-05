import React from "react";

function Footer() {
    return (
        <footer>
            <center>
                Address
                <div style={{ width: "100%", padding: "10px" }} >
                    <iframe width="100%" height="300" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        <a href="https://www.gps.ie/">gps vehicle tracker</a>
                    </iframe>
                </div>
                <a href="https://www.maps.ie/create-google-map/">Click Here to Create a map</a>
            </center>
        </footer>
    );
}

export default Footer;