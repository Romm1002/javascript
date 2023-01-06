
export default function Character({ name, dimension, type }) {
    return {
        tagName: 'div',
        classList: ['details'],
        children: [
            {
                tagName: 'div',
                classList: ['infos'],
                children: [
                    {
                        tagName: 'h2',
                        text: name,
                    },
                    {
                        tagName: 'p',
                        text: 'type : ' + type
                    },
                    {
                        tagName: 'p',
                        text: 'dimension : ' + dimension
                    }
                ]
            },
        ],
    }
}