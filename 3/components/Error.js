import { Link, useRouteError } from "react-router-dom";

const Error = () => {

    const error = useRouteError();
    console.log(error);
    return(
        <div>
            <h1>Erroorr</h1>
            <h2>{error.error.message}</h2>
            <Link to="/">Go Back to Home</Link>
        </div>
    )
}

export default Error;