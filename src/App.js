import React, {Component} from 'react';
import './App.css';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            length: 0,
            items: [],
            text: '',
            items2: []
        }
    }

    onChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text === '') {
            return;
        }
        const nextItems = this.state.items.concat([{text: this.state.text, completed: false}]);
        const nextText = '';
        this.setState({
            items: nextItems,
            items2: nextItems,
            length: this.state.items.length + 1,
            text: nextText
        });
    }


    render() {
        return (
            <div>
                <h3>TODOS</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input onChange={this.onChange.bind(this)} value={this.state.text} type="text"
                           placeholder="what interfaces need call?"/>
                </form>
                <ul>
                    {
                        <ul>
                            {this.state.items.map((result, index) => {
                                return (<li key={index}>{result}</li>);
                            })}
                        </ul>

                    }
                </ul>
                <input/>
                <input type="button" value="+"/>
            </div>
        );
    }
}

export default TodoApp;

