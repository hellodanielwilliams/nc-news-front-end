const ErrorNotFound = ({ type }) => {
    return (
        <section>
            <h3>
                404 - {type ? type[0].toUpperCase() + type.slice(1) : ""} Not
                found!
            </h3>
            <p>
                Sorry, the requested {type ? type : "URL"} was not found on this
                server.
            </p>
        </section>
    );
};

export default ErrorNotFound;
