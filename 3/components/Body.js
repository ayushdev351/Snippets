import ResCard from "./ResCard";
import { resList } from "../utils/data";

const Body = () => {
    return(
        <div className="body">
            {
                resList.map((resData) => <ResCard key={resData.data.id} resData = {resData}/>)
            }
        </div>
    )
}

export default Body;