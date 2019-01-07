import React from 'react';

class ImageCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slide1:'active',
            slide2:'',
            slide3:''
        }
    }

    handleSelect = (e) => {
        e.preventDefault();
        console.log('inside handleSelect of ImageCarousel:', e);
        console.log('inside handleSelect of ImageCarousel e.target:', e.target);
        console.log('inside handleSelect of ImageCarousel e.target.id:', e.target.id);
        console.log('inside handleSelect of ImageCarousel e.target.value:', e.target.value);
        if(e.target.id === "prevClick"){
            if(this.state.slide1 === 'active'){
                this.setState({
                    slide1:'',
                    slide2:'',
                    slide3:'active'
            })}
            else if(this.state.slide2 === 'active'){
                this.setState({
                    slide1:'active',
                    slide2:'',
                    slide3:''
            })
            }   
            else if(this.state.slide3 === 'active'){
                this.setState({
                    slide1:'',
                    slide2:'active',
                    slide3:''
            })
            }     
        }else if(e.target.id === "nextClick"){
            if(this.state.slide1 === 'active'){
                this.setState({
                    slide1:'',
                    slide2:'active',
                    slide3:''
            })}
            else if(this.state.slide2 === 'active'){
                this.setState({
                    slide1:'',
                    slide2:'',
                    slide3:'active'
            })
            }   
            else if(this.state.slide3 === 'active'){
                this.setState({
                    slide1:'active',
                    slide2:'',
                    slide3:''
            })
            } 
      }else if(e.target.id === "liSlide1"){  // For list items
            this.setState({
                slide1:'active',
                slide2:'',
                slide3:''
            })
      }else if(e.target.id === "liSlide2"){  // For list items
        this.setState({
            slide1:'',
            slide2:'active',
            slide3:''
        })
     }else if(e.target.id === "liSlide3"){  // For list items
        this.setState({
            slide1:'',
            slide2:'',
            slide3:'active'
        })
    }
 }
    
    render() {
        const {
            props,
        } = this;

        console.log('ImageCarousel props:', props);
        return(
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li id="liSlide1" data-target="#carouselExampleIndicators" data-slide-to="0" className={this.state.slide1} onClick={this.handleSelect}></li>
                    <li id="liSlide2" data-target="#carouselExampleIndicators" data-slide-to="1" className={this.state.slide2} onClick={this.handleSelect}></li>
                    <li id="liSlide3" data-target="#carouselExampleIndicators" data-slide-to="2" className={this.state.slide3} onClick={this.handleSelect}></li>
                </ol>
                <div className="carousel-inner">
                    <div className={`carousel-item ${this.state.slide1}`}>
                    <img className="d-block w-100" src="https://www.gstatic.com/webp/gallery/3.jpg" alt="First slide" />
                    </div>
                    <div className={`carousel-item ${this.state.slide2}`}>
                    <img className="d-block w-100" src="https://www.gstatic.com/webp/gallery/1.jpg" alt="Second slide" />
                    </div>
                    <div className={`carousel-item ${this.state.slide3}`}>
                    <img className="d-block w-100" src="https://www.gstatic.com/webp/gallery/2.jpg" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" onClick={this.handleSelect} role="button" data-slide="prev">
                    <span id="prevClick" className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" onClick={this.handleSelect} role="button" data-slide="next">
                    <span id="nextClick" className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default ImageCarousel;