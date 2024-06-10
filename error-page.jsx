import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Maaf, terjadi kesalahan!</p>
            <p>
                <i>Error {error.statusText || error.message}</i>
            </p>
            <Link to={'/'}>Home</Link>
        </div>
    )
}

export default ErrorPage;