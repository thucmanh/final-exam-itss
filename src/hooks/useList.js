import {useState} from 'react';

function useList() {
    const listDefault = ['Huyen', 'Hoa', 'Hung', 'Long'];
    const [displayItem, setDisplayItem] = useState(null);

    const searchItem = (item) => {
        const index = listDefault.findIndex(i => i === item)
        setDisplayItem(index + 1);
    }

    return {listDefault, searchItem, displayItem};
}

export default useList;