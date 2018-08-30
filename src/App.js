import React from 'react';

const Row = ({ children }) => (
    <div style={{
        display: 'flex',
        flex: 1,
        border: '10px solid #eee',
        margin: '1em',
        alignItems: 'center'
    }}>
        {children}
    </div>
);

const Image = props => (
    <img {...props} style={{ width: '100%' }}/>
);

export default () => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    }}>
        <Row>
            <Image src={require('./IMG_4148.JPG')}/>
        </Row>
        <Row>
            <Image src={require('./IMG_4139.JPG')}/>
        </Row>
        <Row>
            <Image src={require('./IMG_4132.JPG')}/>
        </Row>
        <Row>
            <Image src={require('./IMG_4119.JPG')}/>
        </Row>
        <Row>
            <Image src={require('./IMG_4102.JPG')}/>
        </Row>
        <Row>
            <Image src={require('./IMG_4074.JPG')}/>
        </Row>
        <Row>
            <Image src={require('./IMG_4018.JPG')}/>
        </Row>
        <Row>
            <Image src={require('./IMG_4017.JPG')}/>
        </Row>
        <Row>
            <Image src={require('./IMG_4016.JPG')}/>
        </Row>
        <Row>
            <Image src={require('./IMG_3992.JPG')}/>
            <Image src={require('./IMG_3991.JPG')}/>
        </Row>
    </div>
)