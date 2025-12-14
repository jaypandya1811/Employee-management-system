import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form"
import Employeelist from "./Employeelist";

function Employeeform({ onRefresh }){
    const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    } = useForm();

    const [employeedata,setemployeedata] = useState([]);

    const onSubmit = (data) =>{
        axios.post("http://127.0.0.1:8000/employeelist/",data)
        reset();
        onRefresh();
    };

    return(
        <>
        <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-6">
        <h2 className="md:text-2xl text-xl font-bold text-gray-800 mb-4 text-center">Add Employee</h2>
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
        <label className="block text-gray-700 font-medium mb-1">Name</label>
        <input
        type="text"
        placeholder="Enter name"
        {...register("name")}
        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        </div>
        <div>
        <label className="block text-gray-700 font-medium mb-1">Designation</label>
        <input
        type="text"
        placeholder="Enter designation"
        {...register("designation")}
        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        </div>
        <div>
        <label className="block text-gray-700 font-medium mb-1">Joining Date</label>
        <input
        type="date"
        {...register("joining_date")}
        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        </div>
        <button
        id="save"
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition"
        >
        Add
        </button>
        </form>
        </div>
        </div>
        </>
    )
}

export default Employeeform;