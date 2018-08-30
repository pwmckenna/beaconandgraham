import React from 'react';

const Row = ({ children }) => (
    <div style={{
        display: 'flex',
        flex: 1,
        border: '1em solid #eee',
        margin: '1em 2em'
    }}>
        {children}
    </div>
);

const Image = ({ style = {}, ...props }) => (
    <img {...props} style={{ maxWidth: '100%', height: 'auto', ...style }}/>
);

export default () => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        margin: '1em 0'
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
            <Image src={require('./IMG_3992.JPG')} style={{ width: '50%' }}/>
            <Image src={require('./IMG_3991.JPG')} style={{ width: '50%' }}/>
        </Row>
    </div>
)