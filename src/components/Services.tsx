const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-6">Our Services</h2>

      <p className="max-w-2xl mx-auto text-gray-600 mb-10 px-4">
        At <strong>PoonamVerse</strong> we offer reliable and modern web
        development solutions tailored to your needs. Our core services include:
      </p>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 text-left">
        <div>
          <h3 className="text-xl font-semibold mb-2">🔹 Web Development</h3>
          <p className="text-gray-600">
            Responsive and fast websites built using the latest technologies
            including HTML, CSS, JavaScript, and Tailwind CSS.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">🔹 React.js Frontend</h3>
          <p className="text-gray-600">
            Interactive and dynamic user interfaces built with React.js,
            ensuring a smooth user experience across all devices.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">🔹 Node.js Backend</h3>
          <p className="text-gray-600">
            Robust and scalable server-side applications powered by Node.js and
            Express for APIs and backend logic.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            🔹 Git & GitHub Workflow
          </h3>
          <p className="text-gray-600">
            We follow industry-standard version control practices using Git and
            GitHub, enabling smooth collaboration and project tracking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
