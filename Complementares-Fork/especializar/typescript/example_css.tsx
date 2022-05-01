/* import styled, { css } from 'styled-components'; */
import { styled } from '@stitches/react';

const Button = styled('button', {
    backgroundColor: 'pink',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid purple',

    variants: {
        size: {
            big: {
                fontSize: 64,
                padding: 20,
            },
            small: {
                fontSize: 10,
                padding: 6,
            },
        },
    },
});

/* interface ButtonProps {
    size: 'big' | 'small';
} */

/*const Button = styled.button<ButtonProps>`
    background-color: pink;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid purple;

    ${(props) =>
        props.size == 'big' &&
        css`
            font-size: 64px;
            padding: 40px;
        `}
`;*/

function App() {
    return (
        <div>
            <Button size="big">Hello World</Button>
            <Button>Hello World</Button>
            <Button size="small">Hello World</Button>
        </div>
    );
}

export default App;
