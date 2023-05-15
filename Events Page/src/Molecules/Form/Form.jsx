import PropTypes from "prop-types";

import { useState } from "react";
import Label from "../../Atoms/Label/Label";
import Input from "../../Atoms/Input/Input";
import Button from "../../Atoms/Button/Button";

const Form = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, email, message });
  };

  return (
    <div className="flex flex-col">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <Label htmlFor="name">Nombre</Label>
        <Input
          type="text"
          placeholder="Ingresa tu nombre completo"
          value={name}
          className="mb-2"
          onChange={(e) => setName(e.target.value)}
        />
        <Label htmlFor="email">Correo electrónico</Label>
        <Input
          type="email"
          placeholder="Ingresa tu correo electrónico"
          value={email}
          className="mb-2"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label htmlFor="message">Mensaje</Label>
        <textarea
          id="message"
          name="message"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 h-32 resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit" onClick={() => console.log("Datos enviados")}>
          Enviar
        </Button>
      </form>
    </div>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
