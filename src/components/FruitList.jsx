const FruitList = props => {
    console.log(props, "FruitList JS")
    return(
        <ul>
            {props.fruits.map(fruit => <li>{fruit}</li>)}
        </ul>
    );
}

export default FruitList;