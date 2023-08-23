import React from 'react';

type PropsType = {
    viewCart: boolean;
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({ viewCart, setViewCart }: PropsType) => {
    const handleViewCartClick = () => {
        setViewCart(prevViewCart => !prevViewCart);
    };

    return (
        <nav className="nav">
            {viewCart ? (
                <button onClick={handleViewCartClick}>View Products</button>
            ) : (
                <button onClick={handleViewCartClick}>View Cart</button>
            )}
        </nav>
    );
};

export default Nav;
