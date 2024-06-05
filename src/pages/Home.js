import React from "react";
import ProgressiveLoadImage from "../helpers/ProgressiveLoadImage.js";

function Home() {

    return (
        <main className="main-section">
            <div>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, cupiditate iusto tenetur est eligendi nemo commodi nihil? Fugiat aspernatur modi necessitatibus sit placeat, ipsum debitis esse natus doloremque veniam blanditiis.</p>

            <center>
                <h1>Progressive Loaded Images</h1>
                <hr />
            </center>

            <div className="d-flex align-items-start gap-2">
                <ProgressiveLoadImage src="https://via.placeholder.com/150" alt="Placeholder" className="img-fluid" height="150px" width="150px" />
                <ProgressiveLoadImage src="https://via.placeholder.com/350" alt="Placeholder" className="img-fluid" height="350px" width="350px" />
                <ProgressiveLoadImage src="https://via.placeholder.com/500" alt="Placeholder" className="img-fluid" height="500px" width="500px" />
            </div>
        </main>
    );
}

export default Home;