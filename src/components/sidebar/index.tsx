import { Key } from "@mui/icons-material";
import "./style.scss";
import { Link } from "react-router-dom";

const index = () => {
    let arr = ['brands', 'models', 'products']
    return (
        <aside className="w-[400px] h-[100vw] bg-[#1a1e44] p-[30px]">
            <div className="w-full">
                {arr.map((e:any, i:number) => {
                    return (
                        <Link to={e} key={i} className="w-full block p-[5px] rounded-sm font-bold text-white text-[20px] hover:bg-[#476ba1]">{e.toUpperCase()}</Link>
                    )   
                })}
            </div>
        </aside>
    );
};

export default index;