const objectCheck = (elem: any) => {
    return typeof elem === 'object' &&
        !Array.isArray(elem) &&
        elem !== null;
}

export default objectCheck