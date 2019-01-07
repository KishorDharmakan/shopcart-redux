import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductListView from '../ListProducts/ProductListView';
import { fetchProducts } from '../../actions/ProductList';
import _ from 'lodash';

class ProductApp extends Component {
    componentDidMount() {
        console.log('inside componentDidMount of ProductApp:', this.props.productsList);
        if (_.isEmpty(this.props.productsList))
            this.props.fetchProducts();
    }
    render() {
        console.log('render of ProductApp this.props.productsList:', this.props.productsList);
        if (!_.isEmpty(this.props.productsList))
            return <ProductListView productlist={this.props.productsList} />
        else
            return <ProductListView productlist={[]} />
    }
}

function mapStateToProps(state) {
    console.log('inside mapStateToProps of ProductApp state:', state);
    return { productsList: state.productsList };
}

export default connect(mapStateToProps, { fetchProducts })(ProductApp);