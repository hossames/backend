import { Header } from "./component/header"

export const Home =() => {
    return (
        <>
        <section>
        <Header/>
        <span style={{
            backgroundColor:'black',
            color:'white',
            userSelect:"none",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textTransform:'uppercase',
            fontSize:'3rem',
            fontWeight:'100',
            width: '100%',
            textAlign: 'center',
        }}>arta</span>
        </section>
        </>
    )
} 