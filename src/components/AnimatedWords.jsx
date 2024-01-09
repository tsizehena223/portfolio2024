import { TypeAnimation } from 'react-type-animation';

const AnimatedWords = () => {
    return (
        <TypeAnimation
            sequence={[
                'Sarobidi',
                2500,
                'an IT Student',
                2500,
                'a Web Developper',
                2500
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
        />
    );
};

export default AnimatedWords;
