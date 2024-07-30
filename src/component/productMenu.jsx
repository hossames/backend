import { useEffect , useState } from 'react';
export const ProductMenu = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const url = "https://server-1kfi.vercel.app/product";
        const fetchData = async() => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setUsers(json);
        } catch (error) {
            console.log("error", error);
        }
        };
        fetchData();
    }, []);
    return(
        <form>
        <select>
        {
            users.map((user,index) => {
                return(
                    <option key={index} id={user._id}>{user.name}</option>
                )
            })
        }
        </select>
        <button id ='catagoryDeleteBtn'>حذف</button>
        </form>
    )
}