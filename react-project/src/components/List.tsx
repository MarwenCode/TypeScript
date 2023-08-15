import React, { ReactNode } from 'react';

interface ListProps<T> {
    items: T[];
}



const List = <T extends string>({ items }: ListProps<T>) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    <span className="bold">{item}</span>
                </li>
            ))}
        </ul>
    );
};

export default List;
