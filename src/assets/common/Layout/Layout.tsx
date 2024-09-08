import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Main from '../../view/Main'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Layout: React.FC = () => {
    return (
        <BrowserRouter>
           <Header />

           <Routes>
            <Route
                path='/'
                element={<Main />}
            >

            </Route>
           </Routes>
            
           <Footer />
        </BrowserRouter>
    )
}

export default Layout