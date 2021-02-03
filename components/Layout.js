import NavBar from './NavBar'
import Footer from './Footer'

export default function Layout({children}) {
    return (
      <div className="container" style={{minWidth: '100%', padding: "0", overflow: "hidden"}}>
        <NavBar />
        {children}
        <Footer />
      </div>
    )
  }