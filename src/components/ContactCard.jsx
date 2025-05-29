import "./ContactCard.css";

function ContactCard({ contactLink, contactIcon, contactText }) {

    function handleContactClick() {
        window.location.href = contactLink;
    }

    return (
        <>
            <div className="col social-links text-center">
                <h2 className="display-1 fw-bold icon-link text-center" onClick={handleContactClick}>
                    {contactIcon}
                </h2>
                {window.innerWidth > 768 ? <p className="lead">{ contactText }</p> : null}
            </div>
        </>
    )
}

export default ContactCard;