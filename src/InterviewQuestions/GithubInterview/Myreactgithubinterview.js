import React, { useState } from 'react'
import './style.css';

const Myreactgithubinterview = () => {
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [err, setErr] = useState("");

    const fetchData = async () => {
        const URL = `https://api.github.com/users/${input}/repos`;

        const res = await fetch(URL);
        console.log(res.ok);
        if (res.ok) {
            const results = await res.json();
            console.log(results)
            setData(results);
            setFilteredData(results);
        } else {
            setData([]);
            setErr("Repo Not found")
        }

    }
    const handleCheckbox = (e) => {
        if (e.target.checked) {
            const forkedItems = filteredData.filter((item) => item.fork = "true");
            setData(forkedItems)
        } else if (!e.target.checked) {
            setData(filteredData);
        }


    }
    return (
        <div className='container'>
            <div className='App2'>
                <label>Github username</label>
                <input type='text' onChange={(e) => setInput(e.target.value)} />
                <label>include forks</label>
                <input type='checkbox' onClick={handleCheckbox} />
                <button className='btn' onClick={fetchData}>Submit</button>
            </div>
            <div style={{ color: "red" }}>{err.message}</div>
            <div className='table'>
                <table>
                    <tr className='row'>
                        <th >Name</th >
                        <th >Language</th >
                        <th >Description</th >
                        <th >Size</th >
                        <th >Fork</th>
                    </tr>

                    <tbody>
                        {data?.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td className='tdvalue'>
                                        {item?.name}
                                    </td>
                                    <td className='tdvalue'>
                                        {item?.language}
                                    </td>
                                    <td className='tdvalue'>
                                        {item?.description}
                                    </td>
                                    <td className='tdvalue'>
                                        {item?.size}
                                    </td>
                                    <td className='tdvalue'>
                                        {item?.fork ? 'true' : 'false'}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
            </div >
        </div>
    )
}

export default Myreactgithubinterview