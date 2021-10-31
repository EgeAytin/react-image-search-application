import React from "react";

function Footer(props) {
    const {photos} = props;

    return (
        <footer>
            {photos.total !== 0 && (
                <div className="container">
                    <p className="float-end mb-4">
                        <a href="#">Back to top</a>
                    </p>
                </div>
            )}
        </footer>
    );
}

export default Footer;
