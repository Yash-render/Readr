// client/src/core/Shop.js

import React, { useState, useEffect } from 'react';
import Checkbox from './Checkbox';
import RadioBox from './RadioBox';
import Card from './Card';
import { getCategories, getFilteredProducts } from './apiCore';

const Shop = () => {
    const [myFilters, setMyFilters] = useState({
        filters: { category: [], price: [] }
    });
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(false);
    const [limit, setLimit] = useState(6);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(0);
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(() => {
        init();
        loadFilteredResults(skip, limit, myFilters.filters);
        showLoading();
    }, []);

    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setCategories(data);
            }
        });
    };

    const loadFilteredResults = (newFilters) => {
        getFilteredProducts(skip, limit, newFilters).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFilteredResults(data.data);
                setSize(data.size);
                setSkip(0);
            }
        });
    };

    const handleFilters = (filters, filterBy) => {
        const newFilters = { ...myFilters };
        newFilters.filters[filterBy] = filters;

        if (filterBy === 'price') {
            const priceValues = handlePrice(filters);
            newFilters.filters[filterBy] = priceValues;
        }

        loadFilteredResults(newFilters.filters);
        setMyFilters(newFilters);
    };

    const handlePrice = (value) => {
        const data = [
            { _id: 0, name: "Any", array: [0, 1000] },
            { _id: 1, name: "₹0 to ₹499", array: [0, 499] },
            { _id: 2, name: "₹500 to ₹999", array: [500, 999] },
            { _id: 3, name: "₹1000 to ₹1499", array: [1000, 1499] },
            { _id: 4, name: "Above ₹1500", array: [1500, 20000] },
        ];

        const priceRange = data.find(item => item._id === parseInt(value));
        return priceRange ? priceRange.array : [];
    };

    const showFilters = () => (
        <div className="filter-section">
            <h4>Filter by Categories</h4>
            <Checkbox
                categories={categories}
                handleFilters={filters => handleFilters(filters, "category")}
            />

            <h4 className="mt-4">Filter by Price Range</h4>
            <RadioBox
                prices={[
                    { _id: 0, name: 'Any', array: [0, 1000] },
                    { _id: 1, name: '₹0 to ₹499', array: [0, 499] },
                    { _id: 2, name: '₹500 to ₹999', array: [500, 999] },
                    { _id: 3, name: '₹1000 to ₹1499', array: [1000, 1499] },
                    { _id: 4, name: 'Above ₹1500', array: [1500, 20000] }
                ]}
                handleFilters={filters => handleFilters(filters, "price")}
            />
        </div>
    );

    const loadMore = () => {
        let toSkip = skip + limit;
        getFilteredProducts(toSkip, limit, myFilters.filters).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setFilteredResults([...filteredResults, ...data.data]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };

    const loadMoreButton = () => {
        return (
            size > 0 && size >= limit && (
                <button onClick={loadMore} className="btn btn-warning mb-5">
                    Load More
                </button>
            )
        );
    };

    const showLoading = () => (
        <div className="alert alert-success">
            <h2>Loading...</h2>
        </div>
    );

    return (
        <div className="container-fluid">
            <div className="row">
                {/* Filters */}
                <div className="col-12 col-md-3 mb-4">
                    {showFilters()}
                </div>

                {/* Products */}
                <div className="col-12 col-md-9">
                    <h2 className="mb-4">Products</h2>
                    {showLoading()}
                    <div className="row product-list">
                        {filteredResults.map((product, i) => (
                            <div key={i} className="col-12 col-sm-6 col-md-4 mb-3">
                                <Card product={product} />
                            </div>
                        ))}
                    </div>
                    {loadMoreButton()}
                </div>
            </div>
        </div>
    );
};

export default Shop;