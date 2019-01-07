import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class BreadCrumb extends Component {

    render() {

        //     <nav aria-label="breadcrumb">
        //     <ol class="breadcrumb">
        //         <li class="breadcrumb-item"><a href="#">Home</a></li>
        //         <li class="breadcrumb-item"><a href="#">Library</a></li>
        //         <li class="breadcrumb-item active" aria-current="page">Data</li>
        //     </ol>
        // </nav>
        // const breadCrumbList = ['Home', 'Add', 'Details'];
        console.log('inside render of BreadCrumb this.props:', this.props);
        const breadCrumbList = this.props.breadCrumbList;
        let breadCrumbCounter = 0;
        return (
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        {
                            breadCrumbList.map((val) => {
                                console.log('val:', val);
                                console.log('val.length:', val.length);
                                console.log('breadCrumbList.length:', breadCrumbList.length);
                                console.log('breadCrumbCounter:', breadCrumbCounter);
                                breadCrumbCounter++;
                                let returnVal = '';
                                if (breadCrumbList.length !== breadCrumbCounter)
                                    returnVal = <li key={val} className="breadcrumb-item"><Link to='/' > {val} </Link></li>
                                else if (breadCrumbList.length === breadCrumbCounter)
                                    returnVal = <li key={val} className="breadcrumb-item active" aria-current="page">{val}</li>
                                return returnVal;
                            })


                        }
                    </ol>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    breadCrumbList: state.breadCrumbList
})

// const mapDispatchToProps = {

// }
BreadCrumb.propTypes = {
    breadCrumbList: PropTypes.array,
}

BreadCrumb.defaultProps = {
    breadCrumbList: [],
}
export default connect(mapStateToProps, null)(BreadCrumb);
//export default BreadCrumb;
