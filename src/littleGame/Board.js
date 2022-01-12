
import React from "react";
import Square from "./Square"



class Board extends React.Component {
    renderSquare(i) {
        return <Square
            key={i}
            value={this.props.squares[i]}
            onClick={ () => this.props.onClick(i) }
        />
    }
    render() {
        
        let num = -1
        return (
            <div>
                { 
                    [0, 1, 2].map((item, index) => {
                        return (
                            <div className="board-row" key={item}>
                                {
                                    [1,2,3].map((item1, index1) => {
                                        num++
                                        return (
                                            this.renderSquare(num)
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
                {/* <div className="board-row">
                    { this.renderSquare(0) }
                    { this.renderSquare(1) }
                    { this.renderSquare(2) }
                </div>
                <div className="board-row">
                    { this.renderSquare(3) }
                    { this.renderSquare(4) }
                    { this.renderSquare(5) }
                </div>
                <div className="board-row">
                    { this.renderSquare(6) }
                    { this.renderSquare(7) }
                    { this.renderSquare(8) }
                </div> */}
            </div>
        )
    }
}

export default Board;