import { arrayMoveImmutable } from 'array-move';
import React, { createRef, Fragment, useRef, useState } from 'react';

import {
    SortableContainer,
    SortableElement,
    SortableHandle
} from "react-sortable-hoc";
// import { exampleData } from '../../ultils/exampleData';


import './index.scss';

const Handle = SortableHandle(({ tabIndex, images }) => (

    <div className='tab-item' tabIndex={tabIndex}>
        <img alt='' src={images} className='img-tab' />
    </div>
));

const SortableItem = SortableElement(({ value }) => {
    return (
        <div>
            <div className="content">
                <Handle images={value.preview} />
            </div>
        </div>
    );
});

const SortableList = SortableContainer(
    ({ items }) => {
        return (
            <div className='grid'>
                {items.map((item, index) => (
                    <SortableItem
                        key={`item-${item.id}`}
                        index={index}
                        value={item}
                    />
                ))}
            </div>
        );
    });


function DragItem() {
    const exampleData = [
        {
            id: 1,
            preview:
                "https://res.cloudinary.com/dport/image/upload/v1633138487/1_yf5wmm.jpg",
            caption: "test 1",
            starred: true
        },
        {
            id: 2,
            preview:
                "https://res.cloudinary.com/dport/image/upload/v1633138487/2_pdpdiy.jpg",
            caption: "test 2"
        },
        {
            id: 3,
            preview:
                "https://res.cloudinary.com/dport/image/upload/v1633138487/3_o4b7cm.jpg",
            caption: "test 3"
        },
        {
            id: 4,
            preview:
                "https://res.cloudinary.com/dport/image/upload/v1633137376/4_vhwoab.jpg",
            caption: "test 4"
        },
        {
            id: 5,
            preview:
                "https://res.cloudinary.com/dport/image/upload/v1633137377/5_fwdjf1.jpg",
            caption: "test 5"
        },
        {
            id: 6,
            preview:
                "https://res.cloudinary.com/dport/image/upload/v1633137376/6_zlddoi.jpg",
            caption: "test 6"
        },
        {
            id: 7,
            preview:
                "https://res.cloudinary.com/dport/image/upload/v1633137376/7_sehl5b.jpg",
            caption: "test 6"
        },
        {
            id: 8,
            preview:
                "https://res.cloudinary.com/dport/image/upload/v1633137377/8_rkmrjl.jpg",
            caption: "test 6"
        },
        {
            id: 9,
            preview:
                "https://res.cloudinary.com/dport/image/upload/v1633137376/9_givl9x.jpg",
            caption: "test 6"
        },
    ]
    const _data = exampleData.sort(() => Math.random() - 0.5);

    const [photos, setPhotos] = useState(_data);

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setPhotos(arrayMoveImmutable(photos, oldIndex, newIndex));
    };

    return (
        <Fragment >
              <SortableList
                shouldUseDragHandle={true}
                useDragHandle
                axis="xy"
                items={photos}
                onSortEnd={onSortEnd}
            />
        </Fragment>
          
        
    );
}

export default DragItem;