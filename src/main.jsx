import React, { Component } from 'react';
import Navbar from "./Component/Navbar"
import Bg from "./Component/BackGround"
import NavMid from './Component/NavMid'
import CardImg from './Component/CardImg'
import Pagi from "./Component/Pagination"
import BtFooter from './Component/BtFooter'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
class Main extends Component {
    state = {
        data: [
            { link: "https://i1.wp.com/4.bp.blogspot.com/-COTipEtZivY/Xyqtnnuf0dI/AAAAAAABcCk/sum6AWRy35E-GyyCcVXKLIUK9oIVH_xIQCLcBGAsYHQ/s0/Coser-Momoko-MrCong.com-005.jpg?w=955&ssl=1" },
            { link: "https://i0.wp.com/3.bp.blogspot.com/-z40h8YQakbQ/XyqtmRwSyGI/AAAAAAABcCY/qfOhtpUR_Bkkr4hZKD9Jib2whlqaHtbWACLcBGAsYHQ/s0/Coser-Momoko-MrCong.com-002.jpg?w=955&ssl=1" },
            { link: "https://i2.wp.com/2.bp.blogspot.com/-4UYOx7OQoJ8/Xy1XvVWvSRI/AAAAAAABeLk/OPb8bUlg6Dk-Yoa44BVucX5Izy8yT3PHgCLcBGAsYHQ/s1600/Coser-Momoko-MrCong.com-005.jpg?w=955&ssl=1" },
            { link: "https://i1.wp.com/1.bp.blogspot.com/-MHMBE_zOa0E/Xyv0XbUZjzI/AAAAAAABdTM/R08NuPHNPlIQO4EBQHMJ_cg6jyj250QZQCLcBGAsYHQ/s1600/Coser-Momoko-MrCong.com-001.jpg?w=955&ssl=1" },
            { link: "https://i0.wp.com/2.bp.blogspot.com/-him-92T7JnU/Xyv0XMc7FaI/AAAAAAABdTE/-7h9uDhQ1Kc-D-PsUCZbL1Dnz-_uu2kWACLcBGAsYHQ/s1600/Coser-Momoko-MrCong.com-003.jpg?w=955&ssl=1" },
            { link: "https://i1.wp.com/1.bp.blogspot.com/-J-IXernhjdQ/XyqtoeO3-GI/AAAAAAABcCs/72oUfLB67L0PlSLZG9oTEsqpjODnjKDuQCLcBGAsYHQ/s0/Coser-Momoko-MrCong.com-007.jpg?w=955&ssl=1" }
        ]
    }
    render() {
        return (
            <div>
                <Navbar />
                <Bg />
                <NavMid />
                <div className='container text-center'>
                    <div className='row'>
                        {this.state.data.map(e => (
                            <CardImg dataImg={e.link} />
                        ))}
                    </div>
                </div>
                <Pagi />
                <BtFooter />
                <hr />
                <Contact />
                <Footer />
            </div >
        );
    }
}

export default Main;