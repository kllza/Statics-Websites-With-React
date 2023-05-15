import Form from "../../Molecules/Form/Form";

const Contact = () => {
  const handleSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-yellow-500">
        <h1 className="text-4xl font-bold mb-6">Contáctanos</h1>
        <p className="text-lg mb-4">
          Si tienes alguna pregunta, no dudes en ponerte en contacto con
          nosotros.
        </p>
        <Form onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Contact;
