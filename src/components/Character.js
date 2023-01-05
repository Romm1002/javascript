export default function Character({ name, status, species, type, gender, origin, location, image }) {
    return {
        tagName: 'div',
        classList: ['details'],
        children: [
            {
                tagName: 'img',
                attributes: {
                    src: image
                }
            },
            {
                tagName: 'div',
                classList: ['infos'],
                children: [
                    {
                        tagName: 'h2',
                        text: name,
                    },
                    {
                        tagName: 'div',
                        classList: ['row'],
                        children: [
                            {
                                tagName: 'dt',
                                text: 'Status : '
                            },
                            {
                                tagName: 'dd',
                                text: status
                            },
                        ]
                    },
                    {
                        tagName: 'div',
                        classList: ['row'],
                        children: [
                            {
                                tagName: 'dt',
                                text: species + ' - &nbsp;'
                            },
                            {
                                tagName: 'dd',
                                text: gender
                            },
                        ]
                    },
                    {
                        tagName: 'div',
                        classList: ['row'],
                        children: [
                            {
                                tagName: 'dt',
                                text: 'Dernière localisation connue : '
                            },
                            {
                                tagName: 'dd',
                                text: location.name
                            },
                        ]
                    },
                    {
                        tagName: 'div',
                        classList: ['row'],
                        children: [
                            {
                                tagName: 'dt',
                                text: 'Origine : '
                            },
                            {
                                tagName: 'dd',
                                text: origin.name
                            },
                        ]
                    },
                ]
            },
        ],
    }
}