// let test = L.tileLayer(`bounding_box.png`, {
//     maxZoom: 1
// })

// let base = L.tileLayer(`assets/Helonus Map.png`, {
//     maxZoom: 1
// }) 

let map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 1,
    maxBoundsViscosity: 1.0,
    // layers: [base, test]
});

// let layerControl = L.control.layers({"base": base}, {"box": test}).addTo(map);
// layerControl.addBaseLayer()

let bounds = [[0,0], [4764, 7680]];
let image = L.imageOverlay('assets/Helonus Map.png', bounds).addTo(map);

map.fitBounds(bounds);

let popup = L.popup();

const REGION_BOUNDS = [
    [[2451, 3317], [2906, 4006], "West Venon"], // Top
    [[2108, 3658], [2520, 3983], "West Venon"], // Bottom right
    [[2366, 3495], [2452, 3662], "West Venon"], // Border segment 1
    [[2063, 3742], [2108, 3951], "West Venon"], // Bottom
    [[2253, 3572], [2369, 3662], "West Venon"], // Border segment 2
    [[2199, 3620], [2254, 3665], "West Venon"], // Border segment 3
    [[2314, 3543], [2377, 3579], "West Venon"], // Border segment 4
    [[2411, 3460], [2456, 3511], "West Venon"], // Border segment 5
    [[0, 3825], [800, 4464], "Bonelanding"], // Left
    [[0, 4464], [700, 5235], "Bonelanding"], // Right
    [[3061, 2358], [3330, 2632], "Arbolia Isles"], // Upper left
    [[2915, 2594], [3138, 2858], "Arbolia Isles"], // Bottom right
    [[2295, 1992], [2431, 2117], "Primonterra"],
    [[2293, 1713], [2454, 1916], "Rigar Islands"],
    [[1235, 5674], [2035, 6954], "The Tarmist Archipelago"],
    [[3795, 3060], [4764, 3730], "Quodos"], // Left
    [[4181, 3730], [4764, 4136], "Quodos"], // Right
    [[0, 0], [1089, 1018], "Womedrus"], // Left side - left
    [[0, 1018], [961, 1686], "Womedrus"], // Left side - centre
    [[0, 1686], [725, 2250], "Womedrus"], // Left side - right
    [[496, 6062], [641, 6227], "Womedrus"], // Right side - larger island
    [[678, 6454], [723, 6495], "Womedrus"], // Right side - tiny island
    [[0, 6604], [477, 7680], "Womedrus"], // Right side - bottom
    [[477, 6950], [980, 7680], "Womedrus"], // Right side - top
    [[981, 1816], [1022, 1859], "Womedrus"], // Front Island
    [[1899, 2702], [2120, 3760], "Malabros"], // Center beam
    [[2112, 3185], [2360, 3673], "Malabros"], // Top-centre
    [[2355, 3287], [2460, 3553], "Malabros"], // Top
    [[1733, 2803], [1901, 3251], "Malabros"], // Middle
    [[1455, 2545], [1742, 3065], "Malabros"], // Bottom-centre
    [[1100, 2657], [1460, 3051], "Malabros"], // Bottom
    [[1208, 3043], [1426, 3145], "Malabros"], // Bottom right
    [[1213, 3141], [1346, 3175], "Malabros"], // Far bottom right corner
    [[1850, 3649], [1901, 3698], "Malabros"], // Right side peninsula
    [[1223, 3045], [1912, 3486], "The Land of Origin"], // Centre
    [[1603, 3480], [1901, 3644], "The Land of Origin"], // Top
    [[1110, 3251], [1223, 3460], "The Land of Origin"], // Bottom
    [[2053, 3983], [2851, 4632], "East Venon"], // Bottom
    [[2851, 4084], [3733, 4654], "East Venon"], // Top-centre
    [[3079, 3822], [3723, 4088], "East Venon"], // Top-left
    [[3733, 4098], [3810, 4217], "East Venon"], // Avian Oldlands border segment 1
    [[2925, 4650], [4153, 5040], "East Venon"], // Top-right
    [[3990, 5034], [4334, 5238], "East Venon"], // Far top right
    [[3728, 4338], [3810, 4660], "East Venon"], // Avian Oldlands border segment 2
    [[3807, 4506], [3953, 4656], "East Venon"], // Avian Oldlands border segment 3
    [[3745, 4239], [4079, 4574], "Avian Oldlands"],
    [[1685, 3924], [2057, 4404], "Warring Rifts"], // Main islands
    [[1872, 4665], [1892, 4683], "Warring Rifts"], // Tiny side island
    [[2764, 5220], [2942, 5418], "Rilo Islands"],
    [[3972, 5907], [4108, 6006], "Pilo"],
    [[1716, 2285], [2293, 2928], "Mastu Piccalu"], // Main islands
    [[1919, 1883], [2240, 2928], "Mastu Piccalu"], // Side islands
    [[2795, 7020], [2843, 7117], "Uryte Islands"],
    [[2941, 6952], [3413, 7680], "Azorius"], // Right side main
    [[3408, 7325], [3532, 7680], "Azorius"], // Right side top
    [[3404, 6902], [3455, 7062], "Azorius"], // Right side border
    [[2903, 0], [3347, 122], "Azorius"], // Left side
    [[3175, 378], [3455, 600], "Frigid Teeth"],
    [[3450, 393], [3795, 1199], "Kleovrend 1"], // Left main
    [[3392, 728], [3451, 1161], "Kleovrend 1"], // Bottom border 1
    [[3510, 1195], [3788, 1310], "Kleovrend 1"], // Bottom border 2
    [[3568, 1308], [3788, 1421], "Kleovrend 1"], // Bottom border 3
    [[3656, 1416], [3788, 1570], "Kleovrend 1"], // Bottom border 4
    [[3691, 1568], [3790, 1653], "Kleovrend 1"], // Bottom border 5
    [[3788, 787], [4045, 1659], "Kleovrend 1"], // Main
    [[3786, 505], [3887, 796], "Kleovrend 1"], // Top border 1
    [[3883, 651], [3948, 792], "Kleovrend 1"], // Top border 2
    [[4036, 832], [4116, 1361], "Kleovrend 1"], // Top border 3
    [[4106, 1160], [4391, 1356], "Kleovrend 1"], // Top border 4
    [[3857, 1348], [4764, 1790], "Kleovrend 1"], // Right main
    [[4105, 1782], [4764, 1915], "Kleovrend 1"], // Top right 1
    [[4312, 1908], [4764, 2089], "Kleovrend 1"], // Top right 2
    [[4629, 2081], [4764, 2300], "Kleovrend 1"], // Top right 3
    [[3926, 1788], [4223, 1981], "Aqin"],
    [[3527, 0], [4764, 1373], "Kleovrend 2"], // Left side
    [[3717, 7294], [4764, 7680], "Kleovrend 2"], // Right side main right
    [[3451, 6524], [3891, 7314], "Kleovrend 2"], // Right side islands
    [[3888, 6527], [3924, 6557], "Kleovrend 2"], // Right side islands edge
    [[3883, 6824], [4153, 7309], "Kleovrend 2"], // Right side left 1
    [[4148, 6986], [4296, 7300], "Kleovrend 2"], // Right side left 2
    [[4290, 7107], [4376, 7297], "Kleovrend 2"], // Right side left 3
    [[4371, 7243], [4474, 7298], "Kleovrend 2"], // Right side left 4
    [[4023, 6486], [4764, 7306], "Tol Kra Vulcunos"], // Main
    [[3820, 6385], [4026, 6590], "Tol Kra Vulcunos"], // Bottom left
    [[2223, 1360], [2549, 1536], "South Iridus"],
    [[3164, 1831], [3243, 2009], "Gruindole"], // Main
    [[3146, 1866], [3166, 1970], "Gruindole"], // Border 1
    [[3122, 1904], [3146, 1956], "Gruindole"], // Border 2
    [[2317, 992], [2925, 1568], "North Iridus"], // Left
    [[2587, 1558], [3187, 1876], "North Iridus"], // Centre-right
    [[2859, 1868], [3151, 1988], "North Iridus"], // Top right
    [[2919, 1231], [3052, 1573], "North Iridus"], // Centre-top 1
    [[3048, 1474], [3126, 1564], "North Iridus"], // Centre-top 2
    [[3180, 1597], [3238, 1804], "North Iridus"], // Top
    [[1738, 226], [1843, 343], "North Iridus"], // Jomil
    [[3125, 704], [3559, 1436], "Frostbound Archipelago"], // Left
    [[3237, 1432], [3901, 1984], "Frostbound Archipelago"], // Right
];

// function preloadImages(images) {
//     if (!preloadImages.list) {
//         preloadImages.list = [];
//     }
//     let list = preloadImages.list;
//     for (let image of images) {
//         let img = new Image();
//         img.onload = function() {
//             let index = list.indexOf(this);
//             if (index !== -1) {
//                 list.splice(index, 1);
//             }
//         }
//         list.push(img);
//         img.src = image;
//     }
// }

// preloadImages(["assets/Helonus Map.png", "assets/Bonelanding.png", "assets/Quodos.png", "assets/Rilo Islands.png", "assets/South Iridus.png",
//      "assets/The Tarmist Archipelago.png", "assets/West Venon.png", "assets/Womedrus.png"]);

let overlay = null;

function clearOverlay() {
    if (overlay) {
        map.removeLayer(overlay);
        overlay = null;
    }
}

function overlayImage(region) {
    clearOverlay();
    overlay = L.imageOverlay(`assets/${region}.png`, bounds).addTo(map);
}

function checkBoundary(coords) {
    let lat = coords.lat;
    let lng = coords.lng;
    for (let region of REGION_BOUNDS) {
        if (lat >= region[0][0] && lat <= region[1][0] && lng >= region[0][1] && lng <= region[1][1]) {
            overlayImage(region[2]);
            break;
        };
    };
};

function onMapClick(e) {
    // popup
    //     .setLatLng(e.latlng)
    //     .setContent("You clicked the map at " + e.latlng.toString())
    //     .openOn(map);
    clearOverlay();
    checkBoundary(e.latlng);
};

map.on('click', onMapClick);

// for (let region of REGION_BOUNDS) {
//     let box = L.imageOverlay(`bounding_box.png`, [region[0], region[1]]).addTo(map);
// }
