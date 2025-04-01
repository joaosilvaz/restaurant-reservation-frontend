const Location = () => {
    return (
      <section id="localizacao" className="bg-[#294056] text-center py-16 px-6">
        <h2 className="font-bold text-white mb-8 text-4xl">LOCALIZAÇÃO</h2>
        <p className="text-white mb-6 text-2xl">
          Alameda Lorena, 2101 – Jardim Paulista, São Paulo - SP, 01424-007
        </p>
        <div className="w-full max-w-3xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.621488501872!2d-46.665775284469!3d-23.5835319846701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c9b1a3e1e1e1%3A0x6e6b1f3e1e1e1e1e!2sAlameda+Lorena%2C+2101+-+Jardim+Paulista%2C+S%C3%A3o+Paulo+-+SP%2C+01424-007!5e0!3m2!1sen!2sbr!4v1610000000000!5m2!1sen!2sbr"
            width="100%"
            height="300"
            loading="lazy"
            className="rounded-lg shadow-lg w-full"
            aria-hidden="false"
          ></iframe>
        </div>
      </section>
    );
  };
  
  export default Location;
  