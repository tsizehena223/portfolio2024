import { TypeAnimation } from 'react-type-animation';

const AnimatedWords = () => {
    return (
        <TypeAnimation
            sequence={[
                'Tsizehena Sarobidi',
                2500,
                'a Software Engineer',
                2500
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
        />
    );
};

export default AnimatedWords;
