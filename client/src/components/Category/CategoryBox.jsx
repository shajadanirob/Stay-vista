/* eslint-disable no-unused-vars */

import { useNavigate, useSearchParams } from "react-router-dom";
import qs from 'query-string'
// eslint-disable-next-line react/prop-types
const CategoryBox = ({label,icon:Icon,selected}) => {
    const [params,setParams] = useSearchParams()
    const navigate = useNavigate()

    const handleClick = () =>{
        let currentQuery = {};
        if(params){
            currentQuery = qs.parse(params.toString())
        }

            const updatedQuery = {...currentQuery,category:label}

            const url = qs.stringifyUrl({
                url:'/',
                query: updatedQuery
            })
            navigate(url)
       
    }
    return (
        <div onClick={handleClick} className={`flex flex-col items-center justify-center  gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${selected? 'border-b-neutral-800 text-neutral-800 ' :''}`}>
            <Icon size={26}></Icon>
           <div className="tex-sm font-medium"> {label}</div>
        </div>
    );
};

export default CategoryBox;