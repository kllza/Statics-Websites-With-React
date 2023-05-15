import EventInfo from "../../Organisms/EventInfo/EventInfo";
import InfoTemplate from "../../Templates/InfoTemplate/InfoTemplate";

const EventInfoPage = () => {
  return (
    <InfoTemplate title={'Información del evento'}>
      <EventInfo />
    </InfoTemplate>
  );
};

export default EventInfoPage;
