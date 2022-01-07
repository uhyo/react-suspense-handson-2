import { fetchData1 } from "../data/fetchData1";
import { useData } from "../hooks/useData";

export const ShowData: React.VFC<{
  dataKey: number;
}> = ({ dataKey }) => {
  const data = useData(`ShowData:${dataKey}`, fetchData1);
  return (
    <p>
      Data for {dataKey} is {data}
    </p>
  );
};
