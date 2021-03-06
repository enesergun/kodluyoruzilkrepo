const CITIES = [
    { 
        adana: {
            "name": "adana",
            "plate": "01",
            "latitude": "37.00167",
            "longitude": "35.32889",
        },
        adıyaman: {
            "name": "adıyaman",
            "plate": "02",
            "latitude": "37.76441",
            "longitude": "38.27629",
        },
        afyonkarahisar: {
            "name": "afyonkarahisar",
            "plate": "03",
            "latitude": "38.75688",
            "longitude": "30.53870",
        },
        ağrı:{
            "name": "ağrı",
            "plate": "04",
            "latitude": "39.71944",
            "longitude": "43.05139",
            
        },
        amasya: {
            "name": "amasya",
            "plate": "05",
            "latitude": "40.65238",
            "longitude": "35.82881",
        },
        ankara: {
            "name": "ankara",
            "plate": "06",
            "latitude": "39.92553",
            "longitude": "32.86628",
            
        },
        antalya: {
            "name": "antalya",
            "plate": "07",
            "latitude": "36.54936",
            "longitude": "31.99699",
            
        },
        artvin: {
            "name": "artvin",
            "plate": "08",
            "latitude": "41.18322",
            "longitude": "41.83098",
            
        },
        aydın: {
            "name": "aydın",
            "plate": "09",
            "latitude": "37.84501",
            "longitude": "27.83963",
            
        },
        balıkesir: {
            "name": "balıkesir",
            "plate": "10",
            "latitude": "39.55409",
            "longitude": "27.73733",
            
        },
        bilecik: {
            "name": "bilecik",
            "plate": "11",
            "latitude": "40.14192",
            "longitude": "29.97932",
            
        },
        bingöl:{
            "name": "bingöl",
            "plate": "12",
            "latitude": "38.88472",
            "longitude": "40.49389",
        },
        bitlis:{
            "name": "bitlis",
            "plate": "13",
            "latitude": "38.40115",
            "longitude": "42.10784",
        },
        bolu: {
            "name": "bolu",
            "plate": "14",
            "latitude": "40.73164",
            "longitude": "31.58981",
            
        },
        burdur: {
            "name": "burdur",
            "plate": "15",
            "latitude": "37.72028",
            "longitude": "30.29083",
            
        },
        bursa: {
            "name": "bursa",
            "plate": "16",
            "latitude": "40.19329",
            "longitude": "29.07420",
            
        },
        çanakkale: {
            "name": "çanakkale",
            "plate": "17",
            "latitude": "40.14556",
            "longitude": "26.40858",
            
        },
        çankırı : {
            "name": "çankırı",
            "plate": "18",
            "latitude": "33.58838",
            "longitude": "40.53690",
            
        },
        çorum: {
            "name": "çorum",
            "plate": "19",
            "latitude": "40.54889",
            "longitude": "34.95333",
            
        },
        denizli: {
            "name": "denizli",
            "plate": "20",
            "latitude": "37.78333",
            "longitude": "29.09471",
        
        },
        diyarbakır:{
            "name": "diyarbakır",
            "plate": "21",
            "latitude": "37.91363",
            "longitude": "40.21721",
            
        },
        edirne:{
            "name": "edirne",
            "plate": "22",
            "latitude": "41.67496",
            "longitude": "26.58348",
            
        },
        elazığ: {
            "name": "elazığ",
            "plate": "23",
            "latitude": "38.68096",
            "longitude": "39.22639",
            
        },
        erzincan: {
            "name": "erzincan",
            "plate": "24",
            "latitude": "39.73919",
            "longitude": "39.49015",
        },
            
        erzurum :{
            "name": "erzurum",
            "plate": "25",
            "latitude": "39.90861",
            "longitude": "41.27694",
            
        },
        eskişehir :{
            "name": "eskişehir",
            "plate": "26",
            "latitude": "39.76619",
            "longitude": "30.52671",
            
        },
        gaziantep: {
            "name": "gaziantep",
            "plate": "27",
            "latitude": "37.05944",
            "longitude": "37.3825",
            
        },
        giresun: {
            "name": "giresun",
            "plate": "28",
            "latitude": "40.91698",
            "longitude": "38.38741",
            
        },
        gümüşhane:{
            "name": "gümüşhane",
            "plate": "29",
            "latitude": "39.31432",
            "longitude": "40.28036",
            
        },
        hakkari: {
            "name": "hakkari",
            "plate": "30",
            "latitude": "37.57444",
            "longitude": "43.74083",
            
        },
        hatay:{
            "name": "hatay",
            "plate": "31",
            "latitude": "36.20000",
            "longitude": "36.16666",
            
        },
        ısparta: {
            "name": "ısparta",
            "plate": "32",
            "latitude": "37.76800",
            "longitude": "30.56190",
            
        },
        mersin: {
            "name": "mersin",
            "plate": "33",
            "latitude": "36.81210",
            "longitude": "34.64147",
            
        },
        istanbul: {
            "name": "istanbul",
            "plate": "34",
            "latitude": "41.0400",
            "longitude": "28.9900",
            
        },
        izmir: {
            "name": "izmir",
            "plate": "35",
            "latitude": "38.418850",
            "longitude": "27.128720",
            
        },
        kars: {
            "name": "kars",
            "plate": "36",
            "latitude": "40.60199",
            "longitude": "43.09495",
            
        },
        kastamonu: {
            "name": "kastamonu",
            "plate": "37",
            "latitude": "41.37805",
            "longitude": "33.77528",
            
        },
        kayseri: {
            "name": "kayseri",
            "plate": "38",
            "latitude": "38.73480",
            "longitude": "35.46798",
           
        },
        kırklareli:{
            "name": "kırklareli",
            "plate": "39",
            "latitude": "41.73508",
            "longitude": "27.22521",
            
        },
        kırşehir: {
            "name": "kırşehir",
            "plate": "40",
            "latitude": "39.14583",
            "longitude": "34.16389",
            
        },
        kocaeli: {
            "name": "kocaeli",
            "plate": "41",
            "latitude": "40.85327",
            "longitude": "29.88152",
            
        },
        konya: {
            "name": "konya",
            "plate": "42",
            "latitude": "37.87464",
            "longitude": "32.49315",
            
        },
        kütahya:{
            "name": "kütahya",
            "plate": "43",
            "latitude": "39.41995",
            "longitude": "29.98573",
            
        },
        malatya: {
            "name": "malatya",
            "plate": "44",
            "latitude": "38.35536",
            "longitude": "38.33352",
            
        },
        manisa: {
            "name": "manisa",
            "plate": "45",
            "latitude": "38.61403",
            "longitude": "27.42956",
            
        },
        kahramanmaraş: {
            "name": "kahramanmaraş",
            "plate": "46",
            "latitude": "37.57527",
            "longitude": "36.92282",
            
        },
        mardin: {
            "name": "mardin",
            "plate": "47",
            "latitude": "37.31290",
            "longitude": "40.73395",
            
        },
        muğla: {
            "name": "muğla",
            "plate": "48",
            "latitude": "37.18358",
            "longitude": "28.48639",
            
        },
        muş: {
            "name": "muş",
            "plate": "49",
            "latitude": "38.73456",
            "longitude": "41.49103",
            
        },
        nevşehir: {
            "name": "nevşehir",
            "plate": "50",
            "latitude": "38.62469",
            "longitude": "34.71415",
           
        },
        niğde:{
            "name": "niğde",
            "plate": "51",
            "latitude": "37.96977",
            "longitude": "34.67660",
            
        },
        ordu: {
            "name": "ordu",
            "plate": "52",
            "latitude": "40.98616",
            "longitude": "37.87972",
            
        },
        rize: {
            "name": "rize",
            "plate": "53",
            "latitude": "41.02551",
            "longitude": "40.51766",
            
        },
        sakarya: {
            "name": "sakarya",
            "plate": "54",
            "latitude": "40.77307",
            "longitude": "30.39481",
           
        },
        samsun: {
            "name": "samsun",
            "plate": "55",
            "latitude": "41.27970",
            "longitude": "36.33606",
            
        },
        siirt: {
            "name": "siirt",
            "plate": "56",
            "latitude": "37.92740",
            "longitude": "41.94197",
            
        },
        sinop: {
            "name": "sinop",
            "plate": "57",
            "latitude": "41.55947",
            "longitude": "34.85805",
            
        },
        sivas: {
            "name": "sivas",
            "plate": "58",
            "latitude": "39.75054",
            "longitude": "37.01502",
            
        },
        tekirdağ: {
            "name": "tekirdağ",
            "plate": "59",
            "latitude": "40.97809",
            "longitude": "27.51167",
            
        },
        tokat: {
            "name": "tokat",
            "plate": "60",
            "latitude": "40.32346",
            "longitude": "36.55219",
            
        },
        trabzon: {
            "name": "trabzon",
            "plate": "61",
            "latitude": "41.00269",
            "longitude": "39.71676",
    
        },
        tunceli: {
            "name": "tunceli",
            "plate": "62",
            "latitude": "39.10617",
            "longitude": "39.54825",
            
        },
        şanlıurfa: {
            "name": "şanlıurfa",
            "plate": "63",
            "latitude": "37.16740",
            "longitude": "38.79551",
            
        },
        uşak: {
            "name": "uşak",
            "plate": "64",
            "latitude": "38.67422",
            "longitude": "29.40588",
            
        },
        van: {
            "name": "van",
            "plate": "65",
            "latitude": "38.50120",
            "longitude": "43.37297",
            
        },
        yozgat: {
            "name": "yozgat",
            "plate": "66",
            "latitude": "39.82104",
            "longitude": "34.80857",
            
        },
        zonguldak: {
            "name": "zonguldak",
            "plate": "67",
            "latitude": "41.45352",
            "longitude": "31.78937",
           
        },
        aksaray: {
            "name": "aksaray",
            "plate": "68",
            "latitude": "38.36862",
            "longitude": "34.02970",
            
        },
        bayburt: {
            "name": "bayburt",
            "plate": "69",
            "latitude": "40.26032",
            "longitude": "40.22804",
            
        },
        karaman: {
            "name": "karaman",
            "plate": "70",
            "latitude": "37.18100",
            "longitude": "33.22224",
            
        },
        kırıkkale: {
            "name": "kırıkkale",
            "plate": "71",
            "latitude": "39.83978",
            "longitude": "33.50887",
            
        },
        batman: {
            "name": "batman",
            "plate": "72",
            "latitude": "37.88951",
            "longitude": "41.12928",
           
        },
        şırnak: {
            "name": "şırnak",
            "plate": "73",
            "latitude": "37.51897",
            "longitude": "42.45371",
            
        },
        bartın:{
            "name": "bartın",
            "plate": "74",
            "latitude": "41.63760",
            "longitude": "32.33381",
            
        },
        ardahan: {
            "name": "ardahan",
            "plate": "75",
            "latitude": "41.11295",
            "longitude": "42.70228",
            
        },
        ığdır: {
            "name": "ığdır",
            "plate": "76",
            "latitude": "39.92005",
            "longitude": "44.04361",
            
        },
        yalova: {
            "name": "yalova",
            "plate": "77",
            "latitude": "40.65489",
            "longitude": "29.28418",
            
        },
        Karabük: {
            "name": "Karabük",
            "plate": "78",
            "latitude": "41.19562",
            "longitude": "32.62265",
            
        },
        Kilis: {
            "name": "Kilis",
            "plate": "79",
            "latitude": "36.71647",
            "longitude": "37.11466",
            "counties": [
                "merkez",
                "musabeyli",
                "elbeyli",
                "polateli"
            ]
        },
        Osmaniye:{
            "name": "Osmaniye",
            "plate": "80",
            "latitude": "37.07462",
            "longitude": "36.2464",
            "counties": [
                "merkez",
                "kadirli",
                "düziçi",
                "bahçe",
                "toprakkale",
                "sumbas",
                "hasanbeyli"
            ]
        },
        Düzce: {
            "name": "Düzce",
            "plate": "81",
            "latitude": "40.87705",
            "longitude": "31.31927",
            
        }
    } 
 ];
export default CITIES;