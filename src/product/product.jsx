import { Link } from 'react-router-dom'
import { Header } from '../component/header'
import '../component/pagesStyling.css'

export const Product =() => {
    
    return (
        <>
        <section>
            <Header />
            <form>
            <Link to = './add'>
            <button>اضافة</button>
            </Link>
            <Link to = './delete-c'>
            <button>حذف</button>
            </Link>
            </form>
        </section>
        </>
    )
} 