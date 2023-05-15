import Tickets from "../../Organisms/Tickets/Tickets";
import TicketTemplate from "../../Templates/TicketTemplate/TicketTemplate";

const TicketsPage = () => {
  return (
    <TicketTemplate title={'Compra tus boletos'}>
      <Tickets />
    </TicketTemplate>
  );
};

export default TicketsPage;
