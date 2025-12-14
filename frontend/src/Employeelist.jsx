import axios from 'axios';
import { useEffect,useState } from 'react';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Editemployee from './Employeeedit';

function Employeelist({ reload,onRefresh }){
    const [employees,setemployeelist] = useState([]);
    const [employeedata,setemployeedata] = useState([]);
    const [eid,seteid] = useState([]);
    const [edited, setEdited] = useState(false);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/employeelist/")
        .then((res) => {
            setemployeelist(res.data);
        })
    }, [reload]);

    const getemployee = (id) => {
        axios.get(`http://127.0.0.1:8000/getemployee/${id}`)
        .then((res) => { 
            seteid(id);
            setEdited(false);
            setemployeedata(res.data);
        })
    };

    const deleteemployee = (id) => {
        axios.delete(`http://127.0.0.1:8000/getemployee/${id}`)
        .then((res) => {
            onRefresh();
        })
    };

    return(
        <>
        <div className="xl:w-300 md:w-300 xl:mx-20 md:mx-20 mx-6 bg-white shadow-xl rounded-2xl p-6 font-medium">
        <h1 className="md:text-2xl text-xl font-bold mb-4 text-gray-800 text-center">Employee Details</h1>
        <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-xl overflow-hidden">
        <thead className="bg-blue-600 text-white">
        <tr>
        <th className="px-4 py-3 text-left">Emp ID</th>
        <th className="px-4 py-3 text-left">Name</th>
        <th className="px-4 py-3 text-left">Designation</th>
        <th className="px-4 py-3 text-left">Joining Date</th>
        <th className="px-4 py-3 text-left">Action</th>
        </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
        {employees.map((e) => (
        <tr className="hover:bg-blue-50 transition" key={e.id}>
        <td className="px-4 py-3">{e.id}</td>
        <td className="px-4 py-3">{e.name}</td>
        <td className="px-4 py-3">{e.designation}</td>
        <td className="px-4 py-3">{e.joining_date}</td>
        <td className="px-4 py-3 flex gap-3 text-xl"><MdEdit onClick={() => getemployee(e.id)}></MdEdit><span><MdDelete onClick={() => deleteemployee(e.id)}></MdDelete></span></td>
        </tr>
        ))}
        </tbody>
        </table>
        </div>
        </div>
        {!edited && employeedata && Object.keys(employeedata).length > 0  && <Editemployee data={employeedata} id={eid} onRefresh={onRefresh} onEdited={(value) => setEdited(value)}></Editemployee>}
        </>
    )
}

export default Employeelist;