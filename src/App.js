import React from 'react';

const photos = [
    { src: require('./IMG_4148.JPG'), width: '100%' },
    { src: require('./IMG_4139.JPG'), width: '100%' },
    { src: require('./IMG_4132.JPG'), width: '100%' },
    { src: require('./IMG_4119.JPG'), width: '100%' },
    { src: require('./IMG_4102.JPG'), width: '100%' },
    { src: require('./IMG_4074.JPG'), width: '100%' },
    { src: require('./IMG_4018.JPG'), width: '100%' },
    { src: require('./IMG_4017.JPG'), width: '100%' },
    { src: require('./IMG_4016.JPG'), width: '100%' },
    { src: require('./IMG_3991.JPG'), width: '50%' },
    { src: require('./IMG_3992.JPG'), width: '50%' },
]

export default () => (
    <div>
        {photos.map((photo, i) => (
            <img {...photo}/>
        ))}
    </div>
)