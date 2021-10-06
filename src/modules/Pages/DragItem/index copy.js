




import sortBy from 'lodash.sortby';


import React, { useEffect, useState } from 'react';

import { SortableContainer, SortableElement } from 'react-sortable-hoc';

import { exampleData } from '../../ultils/exampleData';

const renderClassNameSize = (num) => {
    switch (num) {
        case '0':
            return 'size0';
        case '1':
            return 'size1';
        case '2':
            return 'size2';
        default:
            break;
    }
};
const ProjectItem = ({ item, onEdit }) => {

    const _className = renderClassNameSize(item.extra);
    const _classNameImage = item.isActive ? '' : 'grayscale';
    return (<div className={'relative hover-project-item overflow-hidden ' + _className}>
        <button className='bg-save border-0 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 transition-all duration-300'>
            Chỉnh sửa
        </button>
        <img
            width={200} height={200}
            className={'h-full w-full   transition-all duration-300 ' + _classNameImage}
            src={item.image}
            onDoubleClick={() => onEdit && onEdit(item.id)}
            alt=''
        />

        <p className="absolute top-2 right-2 bg-white text-green-600 rounded-full font-semibold text-xs px-2" title={_className}>{item.ord}</p>
    </div>);
};

const SortableItem = SortableElement(
    ({ item, isSorting, onEdit }) => {
        const _className = renderClassNameSize(item.extra);
        return (
            <div className={'relative ' + _className} >
                <img
                    width={200} height={200}
                    className="h-full w-full"
                    src={item.image}
                    alt=''
                />
                {!isSorting ?
                    <button className='bg-save border-0 text-white absolute bottom-2 left-2'>
                        Chỉnh sửa
                    </button> : null}
                <p className="absolute top-2 right-2 bg-white text-green-600 rounded-full font-semibold text-xs px-2" title={_className}>{item.ord}</p>
            </div>
        );
    }
);
const SortableList = SortableContainer(
    ({ items, onEdit, className, isSorting }) => {
        return (
            <div className={className}>
                {items.map((item, index) => (
                    <SortableItem
                        onEdit={onEdit}
                        key={index}
                        index={index}
                        testId={index}
                        item={item}
                        isSorting={isSorting}
                    />
                ))}
            </div>
        );
    }
);

function SortList({
    data,
    onChange,
    className,

    onEdit,
    isSorting,

}) {
    const [items, setItems] = useState(data);

    const onSortEnd = ({ oldIndex, newIndex }) => {
        const newData = [...items];
        const tOld = { ...newData[oldIndex] };
        const tNew = { ...newData[newIndex] };
        newData[oldIndex] = { ...tNew, ord: tOld.ord };
        //newData[oldIndex].ord = tOld.ord;
        newData[newIndex] = { ...tOld, ord: tNew.ord };
        //newData[newIndex].ord = tNew.ord;

        if (onChange) onChange(newData);
        else {
            setItems(newData);
        }
    };

    useEffect(() => {
        const sorted = sortBy(data, 'ord');
        setItems(sorted);
    }, [data]);
    
    return (
        <SortableList
            items={items}
            className={className}
            isSorting={isSorting}
            onSortEnd={onSortEnd}
            distance={1}
            onEdit={onEdit}
        />
    );
}

function Lists({ isContent, search }) {
    const _data = exampleData.sort(() => Math.random() - 0.5);

    const [refresh, setRefresh] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isChange, setChange] = useState(false);
    const [isSorting, setSorting] = useState(false);
    const [data, setData] = useState(_data);

    const onChangeLayout = (data) => {
        setData(data);
        setChange(true);
    };


    return <div>
    <button onClick={()=>setSorting(true)}>
        Bắt đầu
    </button>

        {isSorting ? <SortList
            className={'flex flex-col md:grid grid-cols-6 grid-flow-row ' + (isSorting ? ' w-1/3 gap-2' : ' product-gap  product-admin-gap')} data={data || []}
            isSorting={isSorting}
            onChange={onChangeLayout}

        /> :
            <div className="product-gap  product-admin-gap pb-7">
                {data?.map((item) => <ProjectItem item={item} key={item.id} />)}
            </div>
        }

    </div>;
}

export default Lists;