import { useNavigate } from 'react-router-dom';

export const Dropdown = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/signin");
    };

    return (
        <div className="absolute bg-white z-[999] shadow-2xl w-24 border">
            <ul className="grid grid-col gap-2">
                <li onClick={()=>alert("this feature will be implemented soon")}className="border-b-2">me</li>
                <li onClick={handleLogout} className="border-b-2">logout</li>
            </ul>
        </div>
    );
};