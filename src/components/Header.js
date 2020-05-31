import React, {Component} from 'react';
import "../index.css"

class Header extends Component {
    // constructor() {
    //     super();
    //     // this.handleScroll = this.handleScroll.bind(this);
    // }
    //
    // componentDidMount = () => {
    //     window.addEventListener('scroll', this.handleScroll);
    // }
    //
    // componentWillUnmount = () => {
    //     window.removeEventListener('scroll', this.handleScroll);
    // }
    //
    // handleScroll=(event)=> {
    //     event.preventDefault()
    //     const tar = document.querySelectorAll('.scroll');
    //
    //     let len = tar.length;
    //     for (let i = 0; i < len; i++) {
    //         let pos = window.pageYOffset * tar[i].dataset.rate;
    //         if (tar[i].dataset.direction === 'vertical') {
    //             this.setState({
    //                 transform: "translate3d(0px," + pos + "px, 0px)"
    //             })
    //             //tar[i].style.transform = "translate3d(0px," + pos + "px, 0px)";
    //         }
    //         else{
    //             //
    //             this.setState({
    //                 transform: "translate3d(0px," + pos + "px, 0px)"
    //             })
    //         }
    //     }
    //
    // }

    render() {
        return(
            <div id={"container-div"} >

            </div>
        )
    }
}

export default Header;