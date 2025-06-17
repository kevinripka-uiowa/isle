var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1Ijoia3JpcGthLWlvd2EiLCJhIjoiY21iaDB6Z3ZlMDRvcDJsb2hibWRnd2V4aCJ9.3aQpTsZPsZ2mKgzCcRRcaw',
    showMarkers: false,
    markerColor: '#000000',
    inset: true,
    insetPosition:'bottom-right',
    theme: 'light',
    use3dTerrain: false, 
    auto: false,
    chapters: [
        {
            id: 'iowa',
            alignment: 'right',
            hidden: false,
            title: 'U.S. Midwest: Hub for Immigration',
            description: 'Over the past several decades, the Midwest has become a hotbed for immigration. As it stands, around 11&#37; of Black immigrants in the U.S. live in the Midwest. Our storytellers met families from three different African countries, working to understand their journeys across the globe.',
            location: {
                center: [-39.43915, 26.44918],
                zoom: 2.15,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'liberia',
            alignment: 'left',
            hidden: false,
            title: 'Liberia',
            'image':'https://kevinripka-uiowa.github.io/isle/red-stars.svg',
            description: 'Darius and Wealee Nupolu emigrated from Liberia and now live in Iowa. The population is approximately 5.4 million, and the average age is rather young at around 17.9 years old.',
            location: {
                center: [-10.29426, 6.43569],
                zoom: 6,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'togo',
            alignment: 'left',
            hidden: false,
            title: 'Togo',
            'image':'https://kevinripka-uiowa.github.io/isle/green-stars.svg',
            description: 'Wazy Sato, Lydie Algea, Roger Atchou and his wife Catherine all immigrated to Iowa from Togo. Togo gained independence from France in 1960, and French is still the country&#39s official language.',
            location: {
                center: [0.5, 8.74474],
                zoom: 5.75,
                pitch: 0,
                bearing: 0
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'democratic republic of the congo',
            alignment: 'left',
            hidden: false,
            title: 'Democratic Republic of the Congo',
            'image':'https://kevinripka-uiowa.github.io/isle/yellow-stars.svg',
            description: 'Daniel Batigue, Dodo Batigue, and Kisonia Mafuta, emigrated from the Democratic Republic of the Congo. The population sits at around 111 million, and the most commonly used langauges are French, Kituba, Lingala, Swahili, and Tshiluba.',
            location: {
                center: [18, -4],
                zoom: 4.2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'cedar-rapids',
            alignment: 'right',
            hidden: false,
            title: 'Cedar Rapids & Linn County',
            description: 'The state of Iowa and, in particular, Cedar Rapids has a rich history of welcoming immigrants dating back to the Vietnam War. Over the past few years, immigrants have accounted for around half of the county&#39s population growth. The three families our storytellers were embedded with all settled in the Cedar Rapids area, establishing community ties.',
            location: {
                center: [-91.5, 42.05],
                zoom: 8.8,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
}