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
                        text: name + ' ',
                        innerHTML: gender == "Male" ? "<i class='bi bi-gender-male'></i>" : "<i class='bi bi-gender-female'></i>",
                    },
                    {
                        tagName: 'div',
                        classList: ['row'],
                        children: [
                            {
                                tagName: 'p',
                                classList: ['status'],
                                children: [
                                    {
                                        tagName: 'div',
                                        classList: [status == 'Alive' ? 'green' : 'red']
                                    }
                                ],
                                text: status + ' - ' + species,
                            },
                        ]
                    },
                    {
                        tagName: 'div',
                        classList: ['row'],
                        children: [
                            {
                                tagName: 'p',
                                text: 'Status : ' + status
                            },
                        ]
                    },
                    {
                        tagName: 'div',
                        classList: ['row'],
                        children: [
                            {
                                tagName: 'p',
                                text: 'Dernière localisation connue : ' + location.name
                            },
                        ]
                    },
                    {
                        tagName: 'div',
                        classList: ['row'],
                        children: [
                            {
                                tagName: 'p',
                                text: 'Origine : ' + origin.name
                            },
                        ]
                    },
                ]
            },
        ],
    }
}