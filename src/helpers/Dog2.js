import { useQuery } from "react-query";
import { getDog } from "./Fetcher";

function Dog2() {
    const { data } = useQuery("dog", getDog());
    return <img src={data?.url} width={300} alt='' />;
}

export default Dog2;