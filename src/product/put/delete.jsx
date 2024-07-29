import { ProductMenu } from '../../component/productMenu'
import { useEffect } from 'react'
import { Header } from '../../component/header'
import '../../component/pagesStyling.css'
export const ProductDelete = () =>{
    const deleteCatagory = async (option) => {
        try{
        const response = await fetch('https://server-1kfi.vercel.app/product',{
            method: 'delete',
            body: JSON.stringify({
                id: option.id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        await response.json();
        window.location.reload();
        }catch{
            console.log('error')
        }
    }
    useEffect(() =>{
        document.getElementById('catagoryDeleteBtn').onclick = () => {
            document.querySelectorAll('option').forEach((option) => {
                if(option.selected){
                    deleteCatagory(option);
                }
            })
        }},[]);
    return (
        <>
        <section>
            <Header />
            <ProductMenu />
        </section>
        </>
    )
} 