// client/src/core/ShowImage.js

import React, { useState } from 'react';

const ShowImage = ({ item, url }) => {
    const [imgError, setImgError] = useState(false);

    const handleError = () => {
        setImgError(true);
    };

    return (
        <div className="product-img">
            {!imgError ? (
                <img
                    src={`/api/${url}/photo/${item._id}`}
                    alt={item.name}
                    className="mb-3 img-fluid"
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                    onError={handleError}
                />
            ) : (
                <div className="image-placeholder">
                    {item.name}
                </div>
            )}
        </div>
    );
};

export default ShowImage;