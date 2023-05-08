interface IProps {
    name?: string;
    age?: number;
    address?: string;
}
const Video13 = (props: IProps) => {
    //props là javascript object

    // const person = {
    //     name: 'Eric',
    //     age: 25,
    //     address: 'Hỏi Dân IT'
    // }

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring
    const { name, age, address } = props;


    return (
        <div>
            Example in video 13 - hello word with {name}
        </div>
    )
}

export default Video13;