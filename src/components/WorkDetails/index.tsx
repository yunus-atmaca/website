import "./WorkDetails.css";

type Props = {
  data: {
    name: string;
    location: string;
    as: string;
    between: string;
    details: string[];
  };
};

const WorkDetails = ({ data }: Props) => {
  return (
    <div className="work-details">
      <h3>{`${data.name} | ${data.location}`}</h3>
      <h5 className="date">{data.between}</h5>
      <ul>
        {data.details.map((d, index) => {
          return <li key={"li-" + index}>{d}</li>;
        })}
      </ul>
    </div>
  );
};

export default WorkDetails;
