import { useState } from "react";
import list from "./employeeList.js"
import EmployeeCard from "./employeeCard.jsx";

function Content (){
    const [employeeList, setEmployeeList] = useState(list);

    return (
        <main className="row regular-padding">
            {employeeList.map(employee =>{
                return <EmployeeCard 
                key = {employee.id}
                designation = {employee.designation}
                name = {employee.fullName}
                gender = {employee.gender} />
            }
            )}
        </main>
    )
}

export default Content;