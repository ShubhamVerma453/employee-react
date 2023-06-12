import { useState } from "react";
import list from "./employeeList.js"
import EmployeeCard from "./employeeCard.jsx";

function Content() {
    const [employeeList, setEmployeeList] = useState(list);
    const [selectTeam, changeSelect] = useState("TeamA");

    const change = (event) => {
        changeSelect(event.target.value);
    };

    return (
        <main className="row regular-padding">

            <select className="form-select form-select-lg" value={selectTeam} onChange={change}>
                <option value="TeamA">TeamA</option>
                <option value="TeamB">TeamB</option>
                <option value="TeamC">TeamC</option>
                <option value="TeamD">TeamD</option>
            </select>

            {employeeList.map(employee => {
                return <EmployeeCard
                    key={employee.id}
                    designation={employee.designation}
                    name={employee.fullName}
                    gender={employee.gender}
                    team = {employee.teamName}
                    selectTeam = {selectTeam} />
            }
            )}
        </main>
    )
}

export default Content;