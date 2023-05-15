import Header from "../../Molecules/Header/Header";
import PropTypes from "prop-types";

const InfoTemplate = ({ children, title }) => {
  return (
    <div>
      <Header
        title={title}
        buttonText="Comprar Boletos"
        buttonOnClick={() => console.log("Botón de Comprar Boletos presionado")}
      />
      {children}
    </div>
  );
};

InfoTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default InfoTemplate;
