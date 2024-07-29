import { Header } from "../../component/header"
import '../../component/pagesStyling.css'
import {CatagoryMenu} from '../../component/menu'
import { useEffect } from "react"
export const ProductAdd =() => {
    let img,imgsrc;
    const setFileToBase = (file) =>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () =>{
            img =reader.result;
        }
    }
    useEffect(() => {
        const upload = async () => {
            try{
            const response = await fetch('https://server-1kfi.vercel.app/upload',{
                method: 'POST',
                body: JSON.stringify({
                    image: img
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            imgsrc = await response.json();
            imgsrc = imgsrc.url;
            img = undefined;
            }catch{
                console.log('error')
            }
        }
        document.getElementById('actual-btn').onchange = (e) =>{
            const file = e.target.files[0];
            setFileToBase(file);
            const myinterval = setInterval(() => {
                if(img !== undefined)
                {
                    upload();
                    clearInterval(myinterval);
                    const inter = setInterval(() => {
                        if(imgsrc !== undefined)
                        {
                            document.getElementById('preview').src = imgsrc;
                            clearInterval(inter);
                        }
                    }, 500);
                }
            }, 1000);
        }
        document.querySelector('form').onsubmit = async (e) => {
            let spe = [];
            document.querySelectorAll('.spec').forEach((element)=>{
                spe.push({
                    nameAr: element.children[0].value,
                    nameEn: element.children[1].value,
                    value: element.children[2].value,
                })
            });
            e.preventDefault();
            try{
            const response = await fetch('https://server-1kfi.vercel.app/product',{
                method: 'POST',
                body: JSON.stringify({
                    catagory: document.querySelector('select').value,
                    discription: document.getElementById('discription').value,
                    id: document.getElementById('productId').value,
                    name: document.getElementById('productName').value,
                    image: document.getElementById('preview').src,
                    specs:spe
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
    },[]);
    const addSpec=(e)=>{
        e.preventDefault();
        let element = document.createElement('div');
        element.classList.add('spec');
        element.innerHTML = `
        <input type="text" className='field' placeholder = 'enter spec in arabic' name="nameAr"/>
        <input type="text" className='field' placeholder = 'enter spec in english' name="nameEn"/>
        <input type="text" className='field' placeholder = 'enter value of spec' name="value"/>`;
        document.getElementById('specs').appendChild(element);
    }
    return (
        <>
        <section>
            <Header />
            <form>
                <div className="inputBox">
                <label>Name</label>
                <input type="text" className='field' placeholder = 'name of product' name="name" id="productName"/>
                </div>
                <div className="inputBox">
                <label>catagory</label>
                <CatagoryMenu/>
                </div>
                <div className="inputBox">
                <label>id</label>
                <input type="text" className='field' placeholder = 'id of product' name="id" id="productId"/>
                </div>
                <div className="inputBox">
                <label>discription</label>
                <textarea style={{resize:'none'}} type="text" className='field' placeholder = 'discription of product' name="discription" id="discription"/>
                </div>
                <div className="inputBox">
                <label>specs</label>
                <div id="specs">
                </div>
                </div>
                <button type="text" onClick={addSpec}>add spec</button>
                <input type="file" id="actual-btn" hidden/>
                <label id="button" htmlFor="actual-btn">image of Product</label>
                <img id = 'preview' src="" height={'200px'}/>
                <button type="submit">submit</button> 
            </form>
        </section>
        </>
    )
} 