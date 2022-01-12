
/**
 * 函数组件
 * @param {*} props 
 * @returns 
 */
function Square(props) {
    return (
        <button
                className="square"
                onClick={() => {props.onClick()}}
            >
                { props.value }
            </button>
    )
}

export default Square;