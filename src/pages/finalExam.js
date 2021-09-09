import "./finalExam.css";
import {useState} from 'react'
import useList from "../hooks/useList";

function FinalExam() {
    const [input, setInput] = useState('');
    const {listDefault, displayItem, searchItem} = useList()

    const handleChange = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
    }

    const handleAdd = () => {
        searchItem(input);
    }

    return (
        <div className='exam-container'>
            <div className='exam-list'>
                学生一覧：{
                    `[${listDefault.join(', ')}]`
                }
            </div>
            <div className='exam-item'>
                検索名前：
                <input value={input} onChange={handleChange} />
                <button onClick={() => handleAdd()}>Submit</button>
            </div>
            
            <div>
                検索名前: {input}
            </div>

            <div className='exam-list'>
                位置：{displayItem　=== 0 ? '空白' : displayItem}
            </div>
        </div>
    )
}

export default FinalExam;
