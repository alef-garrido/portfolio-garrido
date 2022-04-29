function ContactBox() {
  return (
    <div className="contact--container animate__animated animate__fadeIn">
      <a href="#footer" className="bttn-nav nav--link">
        RRSS
      </a>
      <button type="button" className="chatBtn">
        <a href="#footer">
          CONNECT
          <br />
          {' '}
          WITH ME
        </a>
      </button>
    </div>
  );
}

export default ContactBox;
