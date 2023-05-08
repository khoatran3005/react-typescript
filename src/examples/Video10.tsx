import { useState } from "react";
import './Video10.css'
export interface ITest {
    name:string;
    age:number | string;
    city:string;
}

export interface ITest1 {
    name:string;
    age:number | string;
}
const Video10 = (props:ITest1) => {

    const [defaultName, defaultAge] = [props.name, props.age];
    const [name, setName] = useState<string >(defaultName);
    const [age, setAge] = useState<number | string >(defaultAge);
    const [city, setCity] = useState<string[]>(["Hà Nội", "Đà Nẵng", "Hồ Chí Minh"]);
    const [selectedCity, setSelectedCity] = useState<string>("Hà Nội");

    const [users, setUsers] = useState<ITest[]>([
        
    ])

    const [isShowBtn, setIsShowBtn] = useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
        const user = {
            name: name,
            age: age,
            city: selectedCity,
        }
        setUsers([...users, user])
        setName('');
        setAge('');
        setSelectedCity("Hà Nội")
    }

    const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    return (
        <>
            <div>Example video 10:  hello world </div>
            <div className="form-user">
                <div>
                    <label >Name:</label><br />
                    <input type="text" value={name} onChange={(e) => (handleOnChangeName(e))}/><br />
                </div>
                <div>
                    <label >Age:</label><br />
                    <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/><br />
                </div>
                <div>
                    <label >City:</label><br />
                    <select
                    onChange={(event) => (setSelectedCity(event.target.value))}
                    >
                        {city.map((item, index) => {
                            return (
                                <option key={item}>{item}</option>
                            )
                        })}
                    </select>
                </div>

                <input 
                type="submit" 
                value="Submit" 
                onClick={(e) => (handleSubmit(e))}
                />
            </div>
            <hr />
            <div>List Users:</div>
            <div className="table-user">
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            < th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item, index) => {
                            return (
                                <tr>
                                    <td>{users[index].name}</td>
                                    <td>{users[index].age}</td>
                                    <td>{users[index].city}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Video10;