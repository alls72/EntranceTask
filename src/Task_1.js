import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

function Field(props) {
    return (
        <button onClick={props.onClick} className="field" >
            {props.value}
        </button>
    );
}

class TicTacToeGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldValues: Array(9).fill(null),
            moveX: true,
        };
        this.handleClickReset = this.handleClickReset.bind(this);
    }

    handleClick(i) {
        let fieldValues = this.state.fieldValues.slice();
        if (calculationWinner(fieldValues) || fieldValues[i])
            return;
        fieldValues[i] = this.state.moveX ? 'X' : 'O';
        this.setState({
            fieldValues: fieldValues,
            moveX: !this.state.moveX,
        });
    }

    renderRow(values){
        return values.map( (value) =>
            <Field
                value={this.state.fieldValues[value]}
                onClick={() => this.handleClick(value)}
                key={value}
            />
        );

    }

    handleClickReset(){
        this.setState({
            fieldValues: Array(9).fill(null),
            moveX: true,
        });
    };

    render() {

        let winner = calculationWinner(this.state.fieldValues);
        let status;
        if (winner) {
            status = 'Победитель: ' + winner;
        } else {
            let haveMoves = false;
            let fieldValues = this.state.fieldValues.slice();
            for(let i in fieldValues)
                if (fieldValues[i] === null) {
                    haveMoves = true;
                    break;
                }
            status = haveMoves === true ? 'Следующий ход: ' + (this.state.moveX ? 'X' : 'O') : 'Ничья';
        }
        let board = [[0,1,2],[3,4,5],[6,7,8]];

        return (
            <div className="game">
                <div>
                    <div className="status">{status}</div>
                    {board.map((row) => <div key={row.toString()}>{this.renderRow(row)}</div>)}
                </div>
                <div className="reset">
                    <button onClick={this.handleClickReset} className="resetButton">Заново</button>
                </div>
            </div>
        );
    }
}

function calculationWinner(fieldValues) {
    const winningCombinations = [
        [0, 1, 2], [0, 3, 6], [0, 4, 8],
        [3, 4, 5], [1, 4, 7], [2, 4, 6],
        [6, 7, 8], [2, 5, 8],
    ];

    for(let i in winningCombinations) {
        const [first, second, third] = winningCombinations[i];
        if (fieldValues[first] === fieldValues[second] && fieldValues[first] === fieldValues[third]) {
            return fieldValues[first];
        }
    }
    return null;
}

export default TicTacToeGame;
