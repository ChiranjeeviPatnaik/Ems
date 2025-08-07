import { React, useState, useEffect } from "react"
import { listEmployees, deleteEmployee } from "../Services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponents = () => {

    const [employees, setEmployees] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        getALLEmployees();
    }, [])
    function getALLEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data)
        }).catch(error => {
            console.error(error); 
        });
    }

    function addNewEmployee() {
        navigate('/add-employee');
    }
    function updateEmployee(id) {
        navigate(`/edit-employee/${id}`);
    }
    function removeEmployee(id) {
        deleteEmployee(id).then((response) => {
            getALLEmployees();
        }).catch(error => {
            console.error("There was an error deleting the employee!", error);
        });
    }



  return (
    <div className="container">
      <h2 className="text-center"> List of Employees</h2>
      <button className="btn btn-dark mb-2" onClick={addNewEmployee}>Add Employee</button>
      <table className="table table-striped table-bordered">
        <thead>
            <tr>
                <th>Employee ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                {/* <th>Role</th> */}
                <th>Phone Number</th>
                <th className="text-center">Actions</th>
                {/* <th>Delete</th> */}
            </tr>
        </thead>
        <tbody>
            {
                employees.map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.emailId}</td>
                        {/* <td>{employee.role}</td> */}
                        <td>{employee.phoneNumber}</td>
                        <td>
                            <button className="btn btn-dark" onClick={() => updateEmployee(employee.id)}>Update</button>
                            <button className="btn btn-dark" onClick={() => removeEmployee(employee.id)}
                                style={{marginLeft : '10px'}}>Delete</button>
                        </td>
                        {/* <td>
                            <button className="btn btn-dark">Delete</button>
                        </td> */}
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponents
