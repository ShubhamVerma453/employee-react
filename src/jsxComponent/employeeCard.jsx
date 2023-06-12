import male from "../images/Dr. Strange icon.ico";
import female from "../images/Scarled Witch icon.ico";

function EmployeeCard(props) {
    function updatePerson() {
        const list = props.list;
        const newEmployeeList = list.map(employee =>
            employee.id === props.id ? (employee.teamName === props.selectTeam ? { ...employee, teamName: " " } : { ...employee, teamName: props.selectTeam }) : { ...employee }
        )
        props.setEmployeeList(newEmployeeList);
    }
    return (

        <div className="regular-margin col-md-3 col-sm-4" onClick={updatePerson} >
            <div className={props.selectTeam == props.team ? "dark person-card" : (props.team === " " ? "red person-card" : "person-card")}>
                <img src={props.gender == "male" ? male : female} className="person-img" />
                <div >
                    <h5 className="">{props.name}</h5>
                    <p className="">{props.designation}</p>
                </div>
            </div>
        </div>


    )
}

export default EmployeeCard;