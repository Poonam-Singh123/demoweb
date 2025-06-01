const ContactForm = () => {
  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form className="max-w-md mx-auto space-y-4">
        <p>Email : demo@gmail.com <br />Contact No: +91 XXXXX XXXXXS</p>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded"
        />
        <textarea
          placeholder="Message"
          className="w-full p-3 border rounded"
          rows={4}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded w-full"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
