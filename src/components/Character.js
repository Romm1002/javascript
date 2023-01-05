export default function Character({name, status, species, type, gender, origin, location, image}){
    return {
        tagName: 'div',

        children: [
            {
              tagName: 'img',
              attributes: {
                src: image
              }
            },
            {
              tagName: 'div',
              children: [
                {
                    tagName: 'h5',
                    text: name,
                },
                {
                    tagName: 'dl',
                    children: [
                        {
                            tagName: 'dt',
                            text: 'Status : '
                        },
                        {
                            tagName: 'dd',
                            text: status
                        },
                        {
                            tagName: 'dt',
                            text: species + ' - '
                        },
                        {
                            tagName: 'dd',
                            text: gender
                        },
                        {
                            tagName: 'dt',
                            text: 'Dernière localisation connue : '
                        },
                        {
                            tagName: 'dd',
                            text: location.name
                        },
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