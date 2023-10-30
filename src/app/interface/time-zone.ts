export interface UIZoneData {
  full: TimeZone;
  prettyFull: string;
  zone: string;
  parent?: string;
}

export type UIZone =
  | UIZoneData
  | {
      zone?: string | UIZoneData;
      zones?: UIZoneData[];
    };

export enum TimeZone {
  'AFRICA/ABIDJAN' = 'Africa/Abidjan',
  'AFRICA/ACCRA' = 'Africa/Accra',
  'AFRICA/ADDIS_ABABA' = 'Africa/Addis_Ababa',
  'AFRICA/ALGIERS' = 'Africa/Algiers',
  'AFRICA/ASMARA' = 'Africa/Asmara',
  'AFRICA/ASMERA' = 'Africa/Asmera',
  'AFRICA/BAMAKO' = 'Africa/Bamako',
  'AFRICA/BANGUI' = 'Africa/Bangui',
  'AFRICA/BANJUL' = 'Africa/Banjul',
  'AFRICA/BISSAU' = 'Africa/Bissau',
  'AFRICA/BLANTYRE' = 'Africa/Blantyre',
  'AFRICA/BRAZZAVILLE' = 'Africa/Brazzaville',
  'AFRICA/BUJUMBURA' = 'Africa/Bujumbura',
  'AFRICA/CAIRO' = 'Africa/Cairo',
  'AFRICA/CASABLANCA' = 'Africa/Casablanca',
  'AFRICA/CEUTA' = 'Africa/Ceuta',
  'AFRICA/CONAKRY' = 'Africa/Conakry',
  'AFRICA/DAKAR' = 'Africa/Dakar',
  'AFRICA/DAR_ES_SALAAM' = 'Africa/Dar_es_Salaam',
  'AFRICA/DJIBOUTI' = 'Africa/Djibouti',
  'AFRICA/DOUALA' = 'Africa/Douala',
  'AFRICA/EL_AAIUN' = 'Africa/El_Aaiun',
  'AFRICA/FREETOWN' = 'Africa/Freetown',
  'AFRICA/GABORONE' = 'Africa/Gaborone',
  'AFRICA/HARARE' = 'Africa/Harare',
  'AFRICA/JOHANNESBURG' = 'Africa/Johannesburg',
  'AFRICA/JUBA' = 'Africa/Juba',
  'AFRICA/KAMPALA' = 'Africa/Kampala',
  'AFRICA/KHARTOUM' = 'Africa/Khartoum',
  'AFRICA/KIGALI' = 'Africa/Kigali',
  'AFRICA/KINSHASA' = 'Africa/Kinshasa',
  'AFRICA/LAGOS' = 'Africa/Lagos',
  'AFRICA/LIBREVILLE' = 'Africa/Libreville',
  'AFRICA/LOME' = 'Africa/Lome',
  'AFRICA/LUANDA' = 'Africa/Luanda',
  'AFRICA/LUBUMBASHI' = 'Africa/Lubumbashi',
  'AFRICA/LUSAKA' = 'Africa/Lusaka',
  'AFRICA/MALABO' = 'Africa/Malabo',
  'AFRICA/MAPUTO' = 'Africa/Maputo',
  'AFRICA/MASERU' = 'Africa/Maseru',
  'AFRICA/MBABANE' = 'Africa/Mbabane',
  'AFRICA/MOGADISHU' = 'Africa/Mogadishu',
  'AFRICA/MONROVIA' = 'Africa/Monrovia',
  'AFRICA/NAIROBI' = 'Africa/Nairobi',
  'AFRICA/NDJAMENA' = 'Africa/Ndjamena',
  'AFRICA/NIAMEY' = 'Africa/Niamey',
  'AFRICA/NOUAKCHOTT' = 'Africa/Nouakchott',
  'AFRICA/OUAGADOUGOU' = 'Africa/Ouagadougou',
  'AFRICA/PORTO-NOVO' = 'Africa/Porto-Novo',
  'AFRICA/SAO_TOME' = 'Africa/Sao_Tome',
  'AFRICA/TIMBUKTU' = 'Africa/Timbuktu',
  'AFRICA/TRIPOLI' = 'Africa/Tripoli',
  'AFRICA/TUNIS' = 'Africa/Tunis',
  'AFRICA/WINDHOEK' = 'Africa/Windhoek',
  'AMERICA/ADAK' = 'America/Adak',
  'AMERICA/ANCHORAGE' = 'America/Anchorage',
  'AMERICA/ANGUILLA' = 'America/Anguilla',
  'AMERICA/ANTIGUA' = 'America/Antigua',
  'AMERICA/ARAGUAINA' = 'America/Araguaina',
  'AMERICA/ARGENTINA/BUENOS_AIRES' = 'America/Argentina/Buenos_Aires',
  'AMERICA/ARGENTINA/CATAMARCA' = 'America/Argentina/Catamarca',
  'AMERICA/ARGENTINA/COMODRIVADAVIA' = 'America/Argentina/ComodRivadavia',
  'AMERICA/ARGENTINA/CORDOBA' = 'America/Argentina/Cordoba',
  'AMERICA/ARGENTINA/JUJUY' = 'America/Argentina/Jujuy',
  'AMERICA/ARGENTINA/LA_RIOJA' = 'America/Argentina/La_Rioja',
  'AMERICA/ARGENTINA/MENDOZA' = 'America/Argentina/Mendoza',
  'AMERICA/ARGENTINA/RIO_GALLEGOS' = 'America/Argentina/Rio_Gallegos',
  'AMERICA/ARGENTINA/SALTA' = 'America/Argentina/Salta',
  'AMERICA/ARGENTINA/SAN_JUAN' = 'America/Argentina/San_Juan',
  'AMERICA/ARGENTINA/SAN_LUIS' = 'America/Argentina/San_Luis',
  'AMERICA/ARGENTINA/TUCUMAN' = 'America/Argentina/Tucuman',
  'AMERICA/ARGENTINA/USHUAIA' = 'America/Argentina/Ushuaia',
  'AMERICA/ARUBA' = 'America/Aruba',
  'AMERICA/ASUNCION' = 'America/Asuncion',
  'AMERICA/ATIKOKAN' = 'America/Atikokan',
  'AMERICA/ATKA' = 'America/Atka',
  'AMERICA/BAHIA' = 'America/Bahia',
  'AMERICA/BAHIA_BANDERAS' = 'America/Bahia_Banderas',
  'AMERICA/BARBADOS' = 'America/Barbados',
  'AMERICA/BELEM' = 'America/Belem',
  'AMERICA/BELIZE' = 'America/Belize',
  'AMERICA/BLANC-SABLON' = 'America/Blanc-Sablon',
  'AMERICA/BOA_VISTA' = 'America/Boa_Vista',
  'AMERICA/BOGOTA' = 'America/Bogota',
  'AMERICA/BOISE' = 'America/Boise',
  'AMERICA/BUENOS_AIRES' = 'America/Buenos_Aires',
  'AMERICA/CAMBRIDGE_BAY' = 'America/Cambridge_Bay',
  'AMERICA/CAMPO_GRANDE' = 'America/Campo_Grande',
  'AMERICA/CANCUN' = 'America/Cancun',
  'AMERICA/CARACAS' = 'America/Caracas',
  'AMERICA/CATAMARCA' = 'America/Catamarca',
  'AMERICA/CAYENNE' = 'America/Cayenne',
  'AMERICA/CAYMAN' = 'America/Cayman',
  'AMERICA/CHICAGO' = 'America/Chicago',
  'AMERICA/CHIHUAHUA' = 'America/Chihuahua',
  'AMERICA/CIUDAD_JUAREZ' = 'America/Ciudad_Juarez',
  'AMERICA/CORAL_HARBOUR' = 'America/Coral_Harbour',
  'AMERICA/CORDOBA' = 'America/Cordoba',
  'AMERICA/COSTA_RICA' = 'America/Costa_Rica',
  'AMERICA/CRESTON' = 'America/Creston',
  'AMERICA/CUIABA' = 'America/Cuiaba',
  'AMERICA/CURACAO' = 'America/Curacao',
  'AMERICA/DANMARKSHAVN' = 'America/Danmarkshavn',
  'AMERICA/DAWSON' = 'America/Dawson',
  'AMERICA/DAWSON_CREEK' = 'America/Dawson_Creek',
  'AMERICA/DENVER' = 'America/Denver',
  'AMERICA/DETROIT' = 'America/Detroit',
  'AMERICA/DOMINICA' = 'America/Dominica',
  'AMERICA/EDMONTON' = 'America/Edmonton',
  'AMERICA/EIRUNEPE' = 'America/Eirunepe',
  'AMERICA/EL_SALVADOR' = 'America/El_Salvador',
  'AMERICA/ENSENADA' = 'America/Ensenada',
  'AMERICA/FORT_NELSON' = 'America/Fort_Nelson',
  'AMERICA/FORT_WAYNE' = 'America/Fort_Wayne',
  'AMERICA/FORTALEZA' = 'America/Fortaleza',
  'AMERICA/GLACE_BAY' = 'America/Glace_Bay',
  'AMERICA/GODTHAB' = 'America/Godthab',
  'AMERICA/GOOSE_BAY' = 'America/Goose_Bay',
  'AMERICA/GRAND_TURK' = 'America/Grand_Turk',
  'AMERICA/GRENADA' = 'America/Grenada',
  'AMERICA/GUADELOUPE' = 'America/Guadeloupe',
  'AMERICA/GUATEMALA' = 'America/Guatemala',
  'AMERICA/GUAYAQUIL' = 'America/Guayaquil',
  'AMERICA/GUYANA' = 'America/Guyana',
  'AMERICA/HALIFAX' = 'America/Halifax',
  'AMERICA/HAVANA' = 'America/Havana',
  'AMERICA/HERMOSILLO' = 'America/Hermosillo',
  'AMERICA/INDIANA/INDIANAPOLIS' = 'America/Indiana/Indianapolis',
  'AMERICA/INDIANA/KNOX' = 'America/Indiana/Knox',
  'AMERICA/INDIANA/MARENGO' = 'America/Indiana/Marengo',
  'AMERICA/INDIANA/PETERSBURG' = 'America/Indiana/Petersburg',
  'AMERICA/INDIANA/TELL_CITY' = 'America/Indiana/Tell_City',
  'AMERICA/INDIANA/VEVAY' = 'America/Indiana/Vevay',
  'AMERICA/INDIANA/VINCENNES' = 'America/Indiana/Vincennes',
  'AMERICA/INDIANA/WINAMAC' = 'America/Indiana/Winamac',
  'AMERICA/INDIANAPOLIS' = 'America/Indianapolis',
  'AMERICA/INUVIK' = 'America/Inuvik',
  'AMERICA/IQALUIT' = 'America/Iqaluit',
  'AMERICA/JAMAICA' = 'America/Jamaica',
  'AMERICA/JUJUY' = 'America/Jujuy',
  'AMERICA/JUNEAU' = 'America/Juneau',
  'AMERICA/KENTUCKY/LOUISVILLE' = 'America/Kentucky/Louisville',
  'AMERICA/KENTUCKY/MONTICELLO' = 'America/Kentucky/Monticello',
  'AMERICA/KNOX_IN' = 'America/Knox_IN',
  'AMERICA/KRALENDIJK' = 'America/Kralendijk',
  'AMERICA/LA_PAZ' = 'America/La_Paz',
  'AMERICA/LIMA' = 'America/Lima',
  'AMERICA/LOS_ANGELES' = 'America/Los_Angeles',
  'AMERICA/LOUISVILLE' = 'America/Louisville',
  'AMERICA/LOWER_PRINCES' = 'America/Lower_Princes',
  'AMERICA/MACEIO' = 'America/Maceio',
  'AMERICA/MANAGUA' = 'America/Managua',
  'AMERICA/MANAUS' = 'America/Manaus',
  'AMERICA/MARIGOT' = 'America/Marigot',
  'AMERICA/MARTINIQUE' = 'America/Martinique',
  'AMERICA/MATAMOROS' = 'America/Matamoros',
  'AMERICA/MAZATLAN' = 'America/Mazatlan',
  'AMERICA/MENDOZA' = 'America/Mendoza',
  'AMERICA/MENOMINEE' = 'America/Menominee',
  'AMERICA/MERIDA' = 'America/Merida',
  'AMERICA/METLAKATLA' = 'America/Metlakatla',
  'AMERICA/MEXICO_CITY' = 'America/Mexico_City',
  'AMERICA/MIQUELON' = 'America/Miquelon',
  'AMERICA/MONCTON' = 'America/Moncton',
  'AMERICA/MONTERREY' = 'America/Monterrey',
  'AMERICA/MONTEVIDEO' = 'America/Montevideo',
  'AMERICA/MONTREAL' = 'America/Montreal',
  'AMERICA/MONTSERRAT' = 'America/Montserrat',
  'AMERICA/NASSAU' = 'America/Nassau',
  'AMERICA/NEW_YORK' = 'America/New_York',
  'AMERICA/NIPIGON' = 'America/Nipigon',
  'AMERICA/NOME' = 'America/Nome',
  'AMERICA/NORONHA' = 'America/Noronha',
  'AMERICA/NORTH_DAKOTA/BEULAH' = 'America/North_Dakota/Beulah',
  'AMERICA/NORTH_DAKOTA/CENTER' = 'America/North_Dakota/Center',
  'AMERICA/NORTH_DAKOTA/NEW_SALEM' = 'America/North_Dakota/New_Salem',
  'AMERICA/NUUK' = 'America/Nuuk',
  'AMERICA/OJINAGA' = 'America/Ojinaga',
  'AMERICA/PANAMA' = 'America/Panama',
  'AMERICA/PANGNIRTUNG' = 'America/Pangnirtung',
  'AMERICA/PARAMARIBO' = 'America/Paramaribo',
  'AMERICA/PHOENIX' = 'America/Phoenix',
  'AMERICA/PORT-AU-PRINCE' = 'America/Port-au-Prince',
  'AMERICA/PORT_OF_SPAIN' = 'America/Port_of_Spain',
  'AMERICA/PORTO_ACRE' = 'America/Porto_Acre',
  'AMERICA/PORTO_VELHO' = 'America/Porto_Velho',
  'AMERICA/PUERTO_RICO' = 'America/Puerto_Rico',
  'AMERICA/PUNTA_ARENAS' = 'America/Punta_Arenas',
  'AMERICA/RAINY_RIVER' = 'America/Rainy_River',
  'AMERICA/RANKIN_INLET' = 'America/Rankin_Inlet',
  'AMERICA/RECIFE' = 'America/Recife',
  'AMERICA/REGINA' = 'America/Regina',
  'AMERICA/RESOLUTE' = 'America/Resolute',
  'AMERICA/RIO_BRANCO' = 'America/Rio_Branco',
  'AMERICA/ROSARIO' = 'America/Rosario',
  'AMERICA/SANTA_ISABEL' = 'America/Santa_Isabel',
  'AMERICA/SANTAREM' = 'America/Santarem',
  'AMERICA/SANTIAGO' = 'America/Santiago',
  'AMERICA/SANTO_DOMINGO' = 'America/Santo_Domingo',
  'AMERICA/SAO_PAULO' = 'America/Sao_Paulo',
  'AMERICA/SCORESBYSUND' = 'America/Scoresbysund',
  'AMERICA/SHIPROCK' = 'America/Shiprock',
  'AMERICA/SITKA' = 'America/Sitka',
  'AMERICA/ST_BARTHELEMY' = 'America/St_Barthelemy',
  'AMERICA/ST_JOHNS' = 'America/St_Johns',
  'AMERICA/ST_KITTS' = 'America/St_Kitts',
  'AMERICA/ST_LUCIA' = 'America/St_Lucia',
  'AMERICA/ST_THOMAS' = 'America/St_Thomas',
  'AMERICA/ST_VINCENT' = 'America/St_Vincent',
  'AMERICA/SWIFT_CURRENT' = 'America/Swift_Current',
  'AMERICA/TEGUCIGALPA' = 'America/Tegucigalpa',
  'AMERICA/THULE' = 'America/Thule',
  'AMERICA/THUNDER_BAY' = 'America/Thunder_Bay',
  'AMERICA/TIJUANA' = 'America/Tijuana',
  'AMERICA/TORONTO' = 'America/Toronto',
  'AMERICA/TORTOLA' = 'America/Tortola',
  'AMERICA/VANCOUVER' = 'America/Vancouver',
  'AMERICA/VIRGIN' = 'America/Virgin',
  'AMERICA/WHITEHORSE' = 'America/Whitehorse',
  'AMERICA/WINNIPEG' = 'America/Winnipeg',
  'AMERICA/YAKUTAT' = 'America/Yakutat',
  'AMERICA/YELLOWKNIFE' = 'America/Yellowknife',
  'ANTARCTICA/CASEY' = 'Antarctica/Casey',
  'ANTARCTICA/DAVIS' = 'Antarctica/Davis',
  'ANTARCTICA/DUMONTDURVILLE' = 'Antarctica/DumontDUrville',
  'ANTARCTICA/MACQUARIE' = 'Antarctica/Macquarie',
  'ANTARCTICA/MAWSON' = 'Antarctica/Mawson',
  'ANTARCTICA/MCMURDO' = 'Antarctica/McMurdo',
  'ANTARCTICA/PALMER' = 'Antarctica/Palmer',
  'ANTARCTICA/ROTHERA' = 'Antarctica/Rothera',
  'ANTARCTICA/SOUTH_POLE' = 'Antarctica/South_Pole',
  'ANTARCTICA/SYOWA' = 'Antarctica/Syowa',
  'ANTARCTICA/TROLL' = 'Antarctica/Troll',
  'ANTARCTICA/VOSTOK' = 'Antarctica/Vostok',
  'ARCTIC/LONGYEARBYEN' = 'Arctic/Longyearbyen',
  'ASIA/ADEN' = 'Asia/Aden',
  'ASIA/ALMATY' = 'Asia/Almaty',
  'ASIA/AMMAN' = 'Asia/Amman',
  'ASIA/ANADYR' = 'Asia/Anadyr',
  'ASIA/AQTAU' = 'Asia/Aqtau',
  'ASIA/AQTOBE' = 'Asia/Aqtobe',
  'ASIA/ASHGABAT' = 'Asia/Ashgabat',
  'ASIA/ASHKHABAD' = 'Asia/Ashkhabad',
  'ASIA/ATYRAU' = 'Asia/Atyrau',
  'ASIA/BAGHDAD' = 'Asia/Baghdad',
  'ASIA/BAHRAIN' = 'Asia/Bahrain',
  'ASIA/BAKU' = 'Asia/Baku',
  'ASIA/BANGKOK' = 'Asia/Bangkok',
  'ASIA/BARNAUL' = 'Asia/Barnaul',
  'ASIA/BEIRUT' = 'Asia/Beirut',
  'ASIA/BISHKEK' = 'Asia/Bishkek',
  'ASIA/BRUNEI' = 'Asia/Brunei',
  'ASIA/CALCUTTA' = 'Asia/Calcutta',
  'ASIA/CHITA' = 'Asia/Chita',
  'ASIA/CHOIBALSAN' = 'Asia/Choibalsan',
  'ASIA/CHONGQING' = 'Asia/Chongqing',
  'ASIA/CHUNGKING' = 'Asia/Chungking',
  'ASIA/COLOMBO' = 'Asia/Colombo',
  'ASIA/DACCA' = 'Asia/Dacca',
  'ASIA/DAMASCUS' = 'Asia/Damascus',
  'ASIA/DHAKA' = 'Asia/Dhaka',
  'ASIA/DILI' = 'Asia/Dili',
  'ASIA/DUBAI' = 'Asia/Dubai',
  'ASIA/DUSHANBE' = 'Asia/Dushanbe',
  'ASIA/FAMAGUSTA' = 'Asia/Famagusta',
  'ASIA/GAZA' = 'Asia/Gaza',
  'ASIA/HARBIN' = 'Asia/Harbin',
  'ASIA/HEBRON' = 'Asia/Hebron',
  'ASIA/HO_CHI_MINH' = 'Asia/Ho_Chi_Minh',
  'ASIA/HONG_KONG' = 'Asia/Hong_Kong',
  'ASIA/HOVD' = 'Asia/Hovd',
  'ASIA/IRKUTSK' = 'Asia/Irkutsk',
  'ASIA/ISTANBUL' = 'Asia/Istanbul',
  'ASIA/JAKARTA' = 'Asia/Jakarta',
  'ASIA/JAYAPURA' = 'Asia/Jayapura',
  'ASIA/JERUSALEM' = 'Asia/Jerusalem',
  'ASIA/KABUL' = 'Asia/Kabul',
  'ASIA/KAMCHATKA' = 'Asia/Kamchatka',
  'ASIA/KARACHI' = 'Asia/Karachi',
  'ASIA/KASHGAR' = 'Asia/Kashgar',
  'ASIA/KATHMANDU' = 'Asia/Kathmandu',
  'ASIA/KATMANDU' = 'Asia/Katmandu',
  'ASIA/KHANDYGA' = 'Asia/Khandyga',
  'ASIA/KOLKATA' = 'Asia/Kolkata',
  'ASIA/KRASNOYARSK' = 'Asia/Krasnoyarsk',
  'ASIA/KUALA_LUMPUR' = 'Asia/Kuala_Lumpur',
  'ASIA/KUCHING' = 'Asia/Kuching',
  'ASIA/KUWAIT' = 'Asia/Kuwait',
  'ASIA/MACAO' = 'Asia/Macao',
  'ASIA/MACAU' = 'Asia/Macau',
  'ASIA/MAGADAN' = 'Asia/Magadan',
  'ASIA/MAKASSAR' = 'Asia/Makassar',
  'ASIA/MANILA' = 'Asia/Manila',
  'ASIA/MUSCAT' = 'Asia/Muscat',
  'ASIA/NICOSIA' = 'Asia/Nicosia',
  'ASIA/NOVOKUZNETSK' = 'Asia/Novokuznetsk',
  'ASIA/NOVOSIBIRSK' = 'Asia/Novosibirsk',
  'ASIA/OMSK' = 'Asia/Omsk',
  'ASIA/ORAL' = 'Asia/Oral',
  'ASIA/PHNOM_PENH' = 'Asia/Phnom_Penh',
  'ASIA/PONTIANAK' = 'Asia/Pontianak',
  'ASIA/PYONGYANG' = 'Asia/Pyongyang',
  'ASIA/QATAR' = 'Asia/Qatar',
  'ASIA/QOSTANAY' = 'Asia/Qostanay',
  'ASIA/QYZYLORDA' = 'Asia/Qyzylorda',
  'ASIA/RANGOON' = 'Asia/Rangoon',
  'ASIA/RIYADH' = 'Asia/Riyadh',
  'ASIA/SAIGON' = 'Asia/Saigon',
  'ASIA/SAKHALIN' = 'Asia/Sakhalin',
  'ASIA/SAMARKAND' = 'Asia/Samarkand',
  'ASIA/SEOUL' = 'Asia/Seoul',
  'ASIA/SHANGHAI' = 'Asia/Shanghai',
  'ASIA/SINGAPORE' = 'Asia/Singapore',
  'ASIA/SREDNEKOLYMSK' = 'Asia/Srednekolymsk',
  'ASIA/TAIPEI' = 'Asia/Taipei',
  'ASIA/TASHKENT' = 'Asia/Tashkent',
  'ASIA/TBILISI' = 'Asia/Tbilisi',
  'ASIA/TEHRAN' = 'Asia/Tehran',
  'ASIA/TEL_AVIV' = 'Asia/Tel_Aviv',
  'ASIA/THIMBU' = 'Asia/Thimbu',
  'ASIA/THIMPHU' = 'Asia/Thimphu',
  'ASIA/TOKYO' = 'Asia/Tokyo',
  'ASIA/TOMSK' = 'Asia/Tomsk',
  'ASIA/UJUNG_PANDANG' = 'Asia/Ujung_Pandang',
  'ASIA/ULAANBAATAR' = 'Asia/Ulaanbaatar',
  'ASIA/ULAN_BATOR' = 'Asia/Ulan_Bator',
  'ASIA/URUMQI' = 'Asia/Urumqi',
  'ASIA/UST-NERA' = 'Asia/Ust-Nera',
  'ASIA/VIENTIANE' = 'Asia/Vientiane',
  'ASIA/VLADIVOSTOK' = 'Asia/Vladivostok',
  'ASIA/YAKUTSK' = 'Asia/Yakutsk',
  'ASIA/YANGON' = 'Asia/Yangon',
  'ASIA/YEKATERINBURG' = 'Asia/Yekaterinburg',
  'ASIA/YEREVAN' = 'Asia/Yerevan',
  'ATLANTIC/AZORES' = 'Atlantic/Azores',
  'ATLANTIC/BERMUDA' = 'Atlantic/Bermuda',
  'ATLANTIC/CANARY' = 'Atlantic/Canary',
  'ATLANTIC/CAPE_VERDE' = 'Atlantic/Cape_Verde',
  'ATLANTIC/FAEROE' = 'Atlantic/Faeroe',
  'ATLANTIC/FAROE' = 'Atlantic/Faroe',
  'ATLANTIC/JAN_MAYEN' = 'Atlantic/Jan_Mayen',
  'ATLANTIC/MADEIRA' = 'Atlantic/Madeira',
  'ATLANTIC/REYKJAVIK' = 'Atlantic/Reykjavik',
  'ATLANTIC/SOUTH_GEORGIA' = 'Atlantic/South_Georgia',
  'ATLANTIC/ST_HELENA' = 'Atlantic/St_Helena',
  'ATLANTIC/STANLEY' = 'Atlantic/Stanley',
  'AUSTRALIA/ACT' = 'Australia/ACT',
  'AUSTRALIA/ADELAIDE' = 'Australia/Adelaide',
  'AUSTRALIA/BRISBANE' = 'Australia/Brisbane',
  'AUSTRALIA/BROKEN_HILL' = 'Australia/Broken_Hill',
  'AUSTRALIA/CANBERRA' = 'Australia/Canberra',
  'AUSTRALIA/CURRIE' = 'Australia/Currie',
  'AUSTRALIA/DARWIN' = 'Australia/Darwin',
  'AUSTRALIA/EUCLA' = 'Australia/Eucla',
  'AUSTRALIA/HOBART' = 'Australia/Hobart',
  'AUSTRALIA/LHI' = 'Australia/LHI',
  'AUSTRALIA/LINDEMAN' = 'Australia/Lindeman',
  'AUSTRALIA/LORD_HOWE' = 'Australia/Lord_Howe',
  'AUSTRALIA/MELBOURNE' = 'Australia/Melbourne',
  'AUSTRALIA/NORTH' = 'Australia/North',
  'AUSTRALIA/NSW' = 'Australia/NSW',
  'AUSTRALIA/PERTH' = 'Australia/Perth',
  'AUSTRALIA/QUEENSLAND' = 'Australia/Queensland',
  'AUSTRALIA/SOUTH' = 'Australia/South',
  'AUSTRALIA/SYDNEY' = 'Australia/Sydney',
  'AUSTRALIA/TASMANIA' = 'Australia/Tasmania',
  'AUSTRALIA/VICTORIA' = 'Australia/Victoria',
  'AUSTRALIA/WEST' = 'Australia/West',
  'AUSTRALIA/YANCOWINNA' = 'Australia/Yancowinna',
  'BRAZIL/ACRE' = 'Brazil/Acre',
  'BRAZIL/DENORONHA' = 'Brazil/DeNoronha',
  'BRAZIL/EAST' = 'Brazil/East',
  'BRAZIL/WEST' = 'Brazil/West',
  'CANADA/ATLANTIC' = 'Canada/Atlantic',
  'CANADA/CENTRAL' = 'Canada/Central',
  'CANADA/EASTERN' = 'Canada/Eastern',
  'CANADA/MOUNTAIN' = 'Canada/Mountain',
  'CANADA/NEWFOUNDLAND' = 'Canada/Newfoundland',
  'CANADA/PACIFIC' = 'Canada/Pacific',
  'CANADA/SASKATCHEWAN' = 'Canada/Saskatchewan',
  'CANADA/YUKON' = 'Canada/Yukon',
  'CET' = 'CET',
  'CHILE/CONTINENTAL' = 'Chile/Continental',
  'CHILE/EASTERISLAND' = 'Chile/EasterIsland',
  'CST6CDT' = 'CST6CDT',
  'CUBA' = 'Cuba',
  'EET' = 'EET',
  'EGYPT' = 'Egypt',
  'EIRE' = 'Eire',
  'EST' = 'EST',
  'EST5EDT' = 'EST5EDT',
  'ETC/GMT' = 'Etc/GMT',
  'ETC/GMT+0' = 'Etc/GMT+0',
  'ETC/GMT+1' = 'Etc/GMT+1',
  'ETC/GMT+10' = 'Etc/GMT+10',
  'ETC/GMT+11' = 'Etc/GMT+11',
  'ETC/GMT+12' = 'Etc/GMT+12',
  'ETC/GMT+2' = 'Etc/GMT+2',
  'ETC/GMT+3' = 'Etc/GMT+3',
  'ETC/GMT+4' = 'Etc/GMT+4',
  'ETC/GMT+5' = 'Etc/GMT+5',
  'ETC/GMT+6' = 'Etc/GMT+6',
  'ETC/GMT+7' = 'Etc/GMT+7',
  'ETC/GMT+8' = 'Etc/GMT+8',
  'ETC/GMT+9' = 'Etc/GMT+9',
  'ETC/GMT-0' = 'Etc/GMT-0',
  'ETC/GMT-1' = 'Etc/GMT-1',
  'ETC/GMT-10' = 'Etc/GMT-10',
  'ETC/GMT-11' = 'Etc/GMT-11',
  'ETC/GMT-12' = 'Etc/GMT-12',
  'ETC/GMT-13' = 'Etc/GMT-13',
  'ETC/GMT-14' = 'Etc/GMT-14',
  'ETC/GMT-2' = 'Etc/GMT-2',
  'ETC/GMT-3' = 'Etc/GMT-3',
  'ETC/GMT-4' = 'Etc/GMT-4',
  'ETC/GMT-5' = 'Etc/GMT-5',
  'ETC/GMT-6' = 'Etc/GMT-6',
  'ETC/GMT-7' = 'Etc/GMT-7',
  'ETC/GMT-8' = 'Etc/GMT-8',
  'ETC/GMT-9' = 'Etc/GMT-9',
  'ETC/GMT0' = 'Etc/GMT0',
  'ETC/GREENWICH' = 'Etc/Greenwich',
  'ETC/UCT' = 'Etc/UCT',
  'ETC/UNIVERSAL' = 'Etc/Universal',
  'ETC/UTC' = 'Etc/UTC',
  'ETC/ZULU' = 'Etc/Zulu',
  'EUROPE/AMSTERDAM' = 'Europe/Amsterdam',
  'EUROPE/ANDORRA' = 'Europe/Andorra',
  'EUROPE/ASTRAKHAN' = 'Europe/Astrakhan',
  'EUROPE/ATHENS' = 'Europe/Athens',
  'EUROPE/BELFAST' = 'Europe/Belfast',
  'EUROPE/BELGRADE' = 'Europe/Belgrade',
  'EUROPE/BERLIN' = 'Europe/Berlin',
  'EUROPE/BRATISLAVA' = 'Europe/Bratislava',
  'EUROPE/BRUSSELS' = 'Europe/Brussels',
  'EUROPE/BUCHAREST' = 'Europe/Bucharest',
  'EUROPE/BUDAPEST' = 'Europe/Budapest',
  'EUROPE/BUSINGEN' = 'Europe/Busingen',
  'EUROPE/CHISINAU' = 'Europe/Chisinau',
  'EUROPE/COPENHAGEN' = 'Europe/Copenhagen',
  'EUROPE/DUBLIN' = 'Europe/Dublin',
  'EUROPE/GIBRALTAR' = 'Europe/Gibraltar',
  'EUROPE/GUERNSEY' = 'Europe/Guernsey',
  'EUROPE/HELSINKI' = 'Europe/Helsinki',
  'EUROPE/ISLE_OF_MAN' = 'Europe/Isle_of_Man',
  'EUROPE/ISTANBUL' = 'Europe/Istanbul',
  'EUROPE/JERSEY' = 'Europe/Jersey',
  'EUROPE/KALININGRAD' = 'Europe/Kaliningrad',
  'EUROPE/KIEV' = 'Europe/Kiev',
  'EUROPE/KIROV' = 'Europe/Kirov',
  'EUROPE/KYIV' = 'Europe/Kyiv',
  'EUROPE/LISBON' = 'Europe/Lisbon',
  'EUROPE/LJUBLJANA' = 'Europe/Ljubljana',
  'EUROPE/LONDON' = 'Europe/London',
  'EUROPE/LUXEMBOURG' = 'Europe/Luxembourg',
  'EUROPE/MADRID' = 'Europe/Madrid',
  'EUROPE/MALTA' = 'Europe/Malta',
  'EUROPE/MARIEHAMN' = 'Europe/Mariehamn',
  'EUROPE/MINSK' = 'Europe/Minsk',
  'EUROPE/MONACO' = 'Europe/Monaco',
  'EUROPE/MOSCOW' = 'Europe/Moscow',
  'EUROPE/NICOSIA' = 'Europe/Nicosia',
  'EUROPE/OSLO' = 'Europe/Oslo',
  'EUROPE/PARIS' = 'Europe/Paris',
  'EUROPE/PODGORICA' = 'Europe/Podgorica',
  'EUROPE/PRAGUE' = 'Europe/Prague',
  'EUROPE/RIGA' = 'Europe/Riga',
  'EUROPE/ROME' = 'Europe/Rome',
  'EUROPE/SAMARA' = 'Europe/Samara',
  'EUROPE/SAN_MARINO' = 'Europe/San_Marino',
  'EUROPE/SARAJEVO' = 'Europe/Sarajevo',
  'EUROPE/SARATOV' = 'Europe/Saratov',
  'EUROPE/SIMFEROPOL' = 'Europe/Simferopol',
  'EUROPE/SKOPJE' = 'Europe/Skopje',
  'EUROPE/SOFIA' = 'Europe/Sofia',
  'EUROPE/STOCKHOLM' = 'Europe/Stockholm',
  'EUROPE/TALLINN' = 'Europe/Tallinn',
  'EUROPE/TIRANE' = 'Europe/Tirane',
  'EUROPE/TIRASPOL' = 'Europe/Tiraspol',
  'EUROPE/ULYANOVSK' = 'Europe/Ulyanovsk',
  'EUROPE/UZHGOROD' = 'Europe/Uzhgorod',
  'EUROPE/VADUZ' = 'Europe/Vaduz',
  'EUROPE/VATICAN' = 'Europe/Vatican',
  'EUROPE/VIENNA' = 'Europe/Vienna',
  'EUROPE/VILNIUS' = 'Europe/Vilnius',
  'EUROPE/VOLGOGRAD' = 'Europe/Volgograd',
  'EUROPE/WARSAW' = 'Europe/Warsaw',
  'EUROPE/ZAGREB' = 'Europe/Zagreb',
  'EUROPE/ZAPOROZHYE' = 'Europe/Zaporozhye',
  'EUROPE/ZURICH' = 'Europe/Zurich',
  'FACTORY' = 'Factory',
  'GB' = 'GB',
  'GB-EIRE' = 'GB-Eire',
  'GMT' = 'GMT',
  'GMT+0' = 'GMT+0',
  'GMT-0' = 'GMT-0',
  'GMT0' = 'GMT0',
  'GREENWICH' = 'Greenwich',
  'HONGKONG' = 'Hongkong',
  'HST' = 'HST',
  'ICELAND' = 'Iceland',
  'INDIAN/ANTANANARIVO' = 'Indian/Antananarivo',
  'INDIAN/CHAGOS' = 'Indian/Chagos',
  'INDIAN/CHRISTMAS' = 'Indian/Christmas',
  'INDIAN/COCOS' = 'Indian/Cocos',
  'INDIAN/COMORO' = 'Indian/Comoro',
  'INDIAN/KERGUELEN' = 'Indian/Kerguelen',
  'INDIAN/MAHE' = 'Indian/Mahe',
  'INDIAN/MALDIVES' = 'Indian/Maldives',
  'INDIAN/MAURITIUS' = 'Indian/Mauritius',
  'INDIAN/MAYOTTE' = 'Indian/Mayotte',
  'INDIAN/REUNION' = 'Indian/Reunion',
  'IRAN' = 'Iran',
  'ISRAEL' = 'Israel',
  'JAMAICA' = 'Jamaica',
  'JAPAN' = 'Japan',
  'KWAJALEIN' = 'Kwajalein',
  'LIBYA' = 'Libya',
  'MET' = 'MET',
  'MEXICO/BAJANORTE' = 'Mexico/BajaNorte',
  'MEXICO/BAJASUR' = 'Mexico/BajaSur',
  'MEXICO/GENERAL' = 'Mexico/General',
  'MST' = 'MST',
  'MST7MDT' = 'MST7MDT',
  'NAVAJO' = 'Navajo',
  'NZ' = 'NZ',
  'NZ-CHAT' = 'NZ-CHAT',
  'PACIFIC/APIA' = 'Pacific/Apia',
  'PACIFIC/AUCKLAND' = 'Pacific/Auckland',
  'PACIFIC/BOUGAINVILLE' = 'Pacific/Bougainville',
  'PACIFIC/CHATHAM' = 'Pacific/Chatham',
  'PACIFIC/CHUUK' = 'Pacific/Chuuk',
  'PACIFIC/EASTER' = 'Pacific/Easter',
  'PACIFIC/EFATE' = 'Pacific/Efate',
  'PACIFIC/ENDERBURY' = 'Pacific/Enderbury',
  'PACIFIC/FAKAOFO' = 'Pacific/Fakaofo',
  'PACIFIC/FIJI' = 'Pacific/Fiji',
  'PACIFIC/FUNAFUTI' = 'Pacific/Funafuti',
  'PACIFIC/GALAPAGOS' = 'Pacific/Galapagos',
  'PACIFIC/GAMBIER' = 'Pacific/Gambier',
  'PACIFIC/GUADALCANAL' = 'Pacific/Guadalcanal',
  'PACIFIC/GUAM' = 'Pacific/Guam',
  'PACIFIC/HONOLULU' = 'Pacific/Honolulu',
  'PACIFIC/JOHNSTON' = 'Pacific/Johnston',
  'PACIFIC/KANTON' = 'Pacific/Kanton',
  'PACIFIC/KIRITIMATI' = 'Pacific/Kiritimati',
  'PACIFIC/KOSRAE' = 'Pacific/Kosrae',
  'PACIFIC/KWAJALEIN' = 'Pacific/Kwajalein',
  'PACIFIC/MAJURO' = 'Pacific/Majuro',
  'PACIFIC/MARQUESAS' = 'Pacific/Marquesas',
  'PACIFIC/MIDWAY' = 'Pacific/Midway',
  'PACIFIC/NAURU' = 'Pacific/Nauru',
  'PACIFIC/NIUE' = 'Pacific/Niue',
  'PACIFIC/NORFOLK' = 'Pacific/Norfolk',
  'PACIFIC/NOUMEA' = 'Pacific/Noumea',
  'PACIFIC/PAGO_PAGO' = 'Pacific/Pago_Pago',
  'PACIFIC/PALAU' = 'Pacific/Palau',
  'PACIFIC/PITCAIRN' = 'Pacific/Pitcairn',
  'PACIFIC/POHNPEI' = 'Pacific/Pohnpei',
  'PACIFIC/PONAPE' = 'Pacific/Ponape',
  'PACIFIC/PORT_MORESBY' = 'Pacific/Port_Moresby',
  'PACIFIC/RAROTONGA' = 'Pacific/Rarotonga',
  'PACIFIC/SAIPAN' = 'Pacific/Saipan',
  'PACIFIC/SAMOA' = 'Pacific/Samoa',
  'PACIFIC/TAHITI' = 'Pacific/Tahiti',
  'PACIFIC/TARAWA' = 'Pacific/Tarawa',
  'PACIFIC/TONGATAPU' = 'Pacific/Tongatapu',
  'PACIFIC/TRUK' = 'Pacific/Truk',
  'PACIFIC/WAKE' = 'Pacific/Wake',
  'PACIFIC/WALLIS' = 'Pacific/Wallis',
  'PACIFIC/YAP' = 'Pacific/Yap',
  'POLAND' = 'Poland',
  'PORTUGAL' = 'Portugal',
  'PRC' = 'PRC',
  'PST8PDT' = 'PST8PDT',
  'ROC' = 'ROC',
  'ROK' = 'ROK',
  'SINGAPORE' = 'Singapore',
  'TURKEY' = 'Turkey',
  'UCT' = 'UCT',
  'UNIVERSAL' = 'Universal',
  'US/ALASKA' = 'US/Alaska',
  'US/ALEUTIAN' = 'US/Aleutian',
  'US/ARIZONA' = 'US/Arizona',
  'US/CENTRAL' = 'US/Central',
  'US/EAST-INDIANA' = 'US/East-Indiana',
  'US/EASTERN' = 'US/Eastern',
  'US/HAWAII' = 'US/Hawaii',
  'US/INDIANA-STARKE' = 'US/Indiana-Starke',
  'US/MICHIGAN' = 'US/Michigan',
  'US/MOUNTAIN' = 'US/Mountain',
  'US/PACIFIC' = 'US/Pacific',
  'US/SAMOA' = 'US/Samoa',
  'UTC' = 'UTC',
  'W-SU' = 'W-SU',
  'WET' = 'WET',
  'ZULU' = 'Zulu',
}
