import './styles/index.css';

(async () => {
    console.debug('Loaded');

    function identity<T>(arg: T): T {
        return arg;
    }
    const output1 = identity<string>('eureka');
    const output2 = identity<number>(117);
    console.log(output1);
    console.log(output2);
})();
