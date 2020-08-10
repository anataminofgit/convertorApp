import React from "react"
import { Container, Form, Button } from "react-bootstrap";

const Convertor = () => {

    const [input, setInput] = React.useState("");
    const [result, setResult] = React.useState("");



    const numToRoman = (value) => {
        const romanLetters = [{ val: 1, chars: "I" }, { val: 4, chars: "IV" },
        { val: 5, chars: "V" }, { val: 9, chars: "IX" }, { val: 10, chars: "X" },
        { val: 40, chars: "XL" }, { val: 50, chars: "L" }, { val: 90, chars: "XC" },
        { val: 100, chars: "C" }];

        let num = value;
        let str = "";
        let index;
        for (index = 0; index < romanLetters.length;) {
            if (num > romanLetters[index].val)
                index = index + 1;
            else
                break;
        }

        index = index === romanLetters.length ? index - 1 : index;

        while (num > 0) {
            if (num >= romanLetters[index].val) {
                num = num - romanLetters[index].val;
                str = str + (romanLetters[index].chars);
            }
            else
                index = index - 1;
        }
        setResult(str);
    }

    return (
        <Container>

            <Form>
                <Form.Group controlId="formGridNumber">
                    <Form.Label >Please insert Decimal number. (Numbers between 1-399)</Form.Label>
                    <Form.Control value={input} onChange={(e) => {setInput(e.target.value)}} type="number" placeholder="Decimal Number" />
                </Form.Group>
                <Form.Group controlId="formGridNumber">
                    <Button onClick={() => { numToRoman(input) }}>Convert</Button>
                </Form.Group>

                <Form.Group controlId="formGridNumber">
                    <Form.Label>Result:     {result}</Form.Label>
                </Form.Group>

            </Form>
        </Container>

    )
}

export default Convertor;






