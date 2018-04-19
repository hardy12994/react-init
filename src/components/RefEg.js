import React from "react";
import ReactDOM from "react-dom";

// export class CustomTextInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.focusTextInput = this.focusTextInput.bind(this);
//         this.setRef = this.setRef.bind(this);
//     }

//     focusTextInput() {
//         // Explicitly focus the text input using the raw DOM API
//         this.textInput.focus();
//     }

//     setRef(input) {
//         this.textInput = input;
//     }

//     render() {
//         // Use the `ref` callback to store a reference to the text input DOM
//         // element in an instance field (for example, this.textInput).
//         return (
//             <div>
//                 <input
//                     type="text"
//                     ref={this.setRef} />
//                 <input
//                     type="button"
//                     value="Focus the text input"
//                     onClick={this.focusTextInput}
//                 />
//             </div>
//         );
//     }
// }

function CustomTextInput(props) {
    return (
        <div>
            <input ref={props.inputRef}  placeholder="write" />
            {props.children}
        </div>
    );
}

export class Parent extends React.Component {


    constructor() {
        super();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        // Explicitly focus the text input using the raw DOM API
        this.inputElement.focus();
    }
    render() {
        return (
            <div>
                <CustomTextInput
                    inputRef={el => { console.log(el);this.inputElement = el; }}
                >
                    <button onClick={this.focusTextInput}>Click</button>
                </CustomTextInput>
            </div>

        );
    }
}