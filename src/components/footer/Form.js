import { FiArrowUpRight } from 'react-icons/fi';

function Form() {
  return (
    <>
      <h5 className="footer--title">NEWSLETTER</h5>
      <form
        name="contact"
        method="post"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="email" name="email" placeholder="Email address" />
        <button
          type="submit"
          className="form--arrow"
        >
          <FiArrowUpRight />
        </button>
      </form>
    </>
  );
}

export default Form;
