import Header from "../../Molecules/Header/Header";
import PropTypes from "prop-types";

const TicketTemplate = ({ children, title }) => {
  return (
    <div>
      <Header
        title={title}
        buttonText="Más información"
        buttonOnClick={() => console.log("Botón de Más Información presionado")}
      />
      {children}
    </div>
  );
};

TicketTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default TicketTemplate;
