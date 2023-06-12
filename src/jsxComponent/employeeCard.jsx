import male from "../images/Dr. Strange icon.ico";
import female from "../images/Scarled Witch icon.ico";

function EmployeeCard(props) {
    return (

        <div className="regular-margin col-md-3 col-sm-4" >
            <div className="person-card">
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