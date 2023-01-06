import { tabManager } from "../../main"

export default function Character({ name, status, species, gender, origin, location, image }) {
    return {
        tagName: 'div',
        children: [
            {
                tagName: 'h1',
                text: 'Retour',
                attributes: {
                    'data-tabId': 'characters'
                },
                eventListener: {
                    event: 'click',
                    function: () => {
                        tabManager.openTabById('characters')
                    }
                }
            },
            {
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
                                innerHTML: (gender == "Male") ? "<i class='bi bi-gender-male'></i>" : (gender == "Female") ? "<i class='bi bi-gender-female'></i>" : (gender == "Genderless" || "unknown") ? "<i class='bi bi-gender-ambiguous'></i>" : "",
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
                                                classList: [(status == 'Alive') ? 'green' : (status == 'Dead') ? 'red' : (status == 'unknown') ? 'grey' : '']
                                            }
                                        ],
                                        text: status + ' - ' + species,
                                    },
                                ]
                            },
                            {
                                tagName: 'div',
                                classList: ['row', 'column'],
                                children: [
                                    {
                                        tagName: 'p',
                                        classList: ['subtitle'],
                                        text: 'Dernière localisation connue :',
                                        children: [
                                            {
                                                tagName: 'span',
                                                text: location.name,
                                                eventListener:{
                                                    event: 'click',
                                                    function: () => {
                                                        tabManager.componentMapping.location.params[0].id = location.id
                                                        tabManager.openTabById('location')
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                tagName: 'div',
                                classList: ['row', 'column'],
                                children: [
                                    {
                                        tagName: 'p',
                                        classList: ['subtitle'],
                                        text: 'Origine :',
                                        children: [
                                            {
                                                tagName: 'span',
                                                text: origin.name,
                                                eventListener:{
                                                    event: 'click',
                                                    function: () => {
                                                        tabManager.componentMapping.location.params[0].id = origin.id
                                                        tabManager.openTabById('location')
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                ],
            }
        ]
    }
}