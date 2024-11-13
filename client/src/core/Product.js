import React, { Fragment, useState, useEffect } from 'react';
import Layout from './Layout';
import { read, listRelated } from './apiCore';
import Card from './Card';

const Product = (props) => {

    const [product, setProduct] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const loadSingleProduct = productId => {
        read(productId).then(data => {
            if(data.err) {
                setError(data.err);
                setLoading(false);
            } else {
                setProduct(data);
                listRelated(data._id).then(data => {
                    if(data.err) {
                        setError(data.err);
                    } else {
                        setRelatedProducts(data);
                    }
                });
                setLoading(false);
            }
        });
    }

    useEffect(() => {
        const productId = props.match.params.productId;
        loadSingleProduct(productId);
    }, [props]);

    const showLoading = () => (
        loading && (<div className="alert alert-success">
            <h2>Loading...</h2>
        </div>)
    );

    return (
        <Fragment>
            {loading ? (
                showLoading()
            ) : (
                <Layout title={product.name} description={product.description.substring(0, 100)} className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <Card product={product} showViewProductButton={false} />
                        </div>

                        <div className="col-12 col-md-4">
                            <h4>Related Products</h4>
                            <div className="row">
                                {relatedProducts.map((p, i) => (
                                    <div key={i} className="col-12 col-md-6 mb-3">
                                        <Card product={p} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Layout>
            )}
        </Fragment>
    );
}

export default Product;
