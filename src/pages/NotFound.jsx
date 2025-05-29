import LinkButton from "../components/Common/LinkButton";

export default function NotFound() {
    return (
        <div className="container">
            <h1 className="mt-5">404 - Page Not Found</h1>
            <p className="mt-3">The page you're looking for doesn't exist.</p>
            <LinkButton to="/" className="btn btn-primary mt-3">
                Go to Home
            </LinkButton>
        </div>
    );
}