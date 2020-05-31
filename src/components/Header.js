import React, {Component} from 'react';
import "../index.css"

class Header extends Component {
    constructor() {
        super();
        this.handleScroll = this.handleScroll.bind(this);
        this.myRef = React.createRef();
    }
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

    componentDidMount=()=> {
        window.addEventListener('scroll', this.handleScroll);
    }

    // componentWillUnmount=()=> {
    //     window.removeEventListener('scroll', this.handleScroll);
    // }


    handleScroll = (event) => {
        event.preventDefault();
        // const tar = document.querySelectorAll('.scroll');

        const tar = this.myRef.current;
        console.log(">> tar is ", tar)
        let len = tar.length;
        console.log(">> len is ", len)
        for (let i=0;i<len;i++) {
            let pos = window.pageYOffset * tar[i].dataset.rate;
            if (tar[i].dataset.direction === 'vertical') {
                this.setState(

                )
                tar[i].style.transform = "translate3d(0px," + pos + "px, 0px)";
            }
            else{
                tar[i].style.transform = "translate3d("+pos+"px, 0px, 0px)";
            }
        }
    }

    render() {
        return(
            <div id={"container-div"} >
                <ul className={"title-ul"} onScroll={this.handleScroll} ref={ this.myRef }>
                    <li className={"scroll text"} data-rate={"-1.1"} data-direction={"vertical"} >SAY</li>
                    <li className={"scroll text"} data-rate={"-1.5"} data-direction={"vertical"} >HI</li>
                </ul>
            </div>
        )
    }
}

export default Header;