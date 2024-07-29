import { Header } from "../../component/header"
import '../../component/pagesStyling.css'
import { useEffect } from "react"
export const CatagoryAdd =() => {
    useEffect(() => {
        document.querySelector('form').onsubmit = async (e) => {
            e.preventDefault();
            try{
            const response = await fetch('https://server-1kfi.vercel.app/',{
                method: 'POST',
                body: JSON.stringify({
                    catagory: document.getElementById('catagory').value
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            window.location.reload();
            await response.json();
            
            }catch{
                console.log('error')
            }
        }
    },[]);
    return (
        <>
        <section>
            <Header />
            <form>
                <div className="inputBox">
                <label>Name</label>
                <input type="text" className='field' placeholder = 'enter name of catagory' name="category" id="catagory"/>
                </div>
                <button type="submit">submit</button>
            </form>
        </section>
        </>
    )

} 