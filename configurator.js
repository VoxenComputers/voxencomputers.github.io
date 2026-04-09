const componentsDB = [
    {
        "id": "cpu_7500f",
        "name": "AMD Ryzen 5 7500F",
        "category": "CPU",
        "price": 14250,
        "image_url": "https://tse1.mm.bing.net/th?q=AMD+Ryzen+5+processor+box",
        "compatibility": {
            "platform": "AMD",
            "socket": "AM5",
            "cores": "6 CORES",
            "threads": "12 THREADS",
            "power": 65
        }
    },
    {
        "id": "cpu_225f",
        "name": "Intel Ultra Core 5 225F",
        "category": "CPU",
        "price": 14250,
        "image_url": "https://tse1.mm.bing.net/th?q=Intel+Core+Ultra+5+processor+box",
        "compatibility": {
            "platform": "Intel",
            "socket": "LGA1851",
            "cores": "10 CORES",
            "threads": "10 THREADS",
            "power": 65
        }
    },
    {
        "id": "cpu_8500g",
        "name": "AMD Ryzen 5 8500G",
        "category": "CPU",
        "price": 15353,
        "image_url": "https://tse1.mm.bing.net/th?q=AMD+Ryzen+5+processor+box",
        "compatibility": {
            "platform": "AMD",
            "socket": "AM5",
            "cores": "6 CORES",
            "threads": "12 THREADS",
            "power": 65
        }
    },
    {
        "id": "cpu_9600x",
        "name": "AMD Ryzen 5 9600X",
        "category": "CPU",
        "price": 21290,
        "image_url": "https://tse1.mm.bing.net/th?q=AMD+Ryzen+5+processor+box",
        "compatibility": {
            "platform": "AMD",
            "socket": "AM5",
            "cores": "6 CORES",
            "threads": "12 THREADS",
            "power": 125
        }
    },
    {
        "id": "cpu_245k",
        "name": "Intel Ultra Core 5 245K",
        "category": "CPU",
        "price": 21500,
        "image_url": "https://tse1.mm.bing.net/th?q=Intel+Core+Ultra+5+processor+box",
        "compatibility": {
            "platform": "Intel",
            "socket": "LGA1851",
            "cores": "14 CORES",
            "threads": "14 THREADS",
            "power": 125
        }
    },
    {
        "id": "cpu_9700x",
        "name": "AMD Ryzen 7 9700X",
        "category": "CPU",
        "price": 28990,
        "image_url": "https://tse1.mm.bing.net/th?q=AMD+Ryzen+7+processor+box",
        "compatibility": {
            "platform": "AMD",
            "socket": "AM5",
            "cores": "8 CORES",
            "threads": "16 THREADS",
            "power": 125
        }
    },
    {
        "id": "cpu_265k",
        "name": "Intel Ultra Core 7 265K",
        "category": "CPU",
        "price": 36900,
        "image_url": "https://tse1.mm.bing.net/th?q=Intel+Core+Ultra+7+processor+box",
        "compatibility": {
            "platform": "Intel",
            "socket": "LGA1851",
            "cores": "20 CORES",
            "threads": "20 THREADS",
            "power": 200
        }
    },
    {
        "id": "cpu_9900x",
        "name": "AMD Ryzen 9 9900X",
        "category": "CPU",
        "price": 41990,
        "image_url": "https://tse1.mm.bing.net/th?q=AMD+Ryzen+9+processor+box",
        "compatibility": {
            "platform": "AMD",
            "socket": "AM5",
            "cores": "12 CORES",
            "threads": "24 THREADS",
            "power": 200
        }
    },
    {
        "id": "cpu_9850x3d",
        "name": "AMD Ryzen 7 9850X3D",
        "category": "CPU",
        "price": 52000,
        "image_url": "https://tse1.mm.bing.net/th?q=AMD+Ryzen+7+processor+box",
        "compatibility": {
            "platform": "AMD",
            "socket": "AM5",
            "cores": "8 CORES",
            "threads": "16 THREADS",
            "power": 180
        }
    },
    {
        "id": "cpu_9950x",
        "name": "AMD Ryzen 9 9950X",
        "category": "CPU",
        "price": 53500,
        "image_url": "https://tse1.mm.bing.net/th?q=AMD+Ryzen+9+processor+box",
        "compatibility": {
            "platform": "AMD",
            "socket": "AM5",
            "cores": "16 CORES",
            "threads": "32 THREADS",
            "power": 230
        }
    },
    {
        "id": "cpu_285k",
        "name": "Intel Ultra Core 9 285K",
        "category": "CPU",
        "price": 58500,
        "image_url": "https://tse1.mm.bing.net/th?q=Intel+Core+Ultra+9+processor+box",
        "compatibility": {
            "platform": "Intel",
            "socket": "LGA1851",
            "cores": "24 CORES",
            "threads": "24 THREADS",
            "power": 250
        }
    },
    {
        "id": "cpu_9950x3d",
        "name": "AMD Ryzen 9 9950X3D",
        "category": "CPU",
        "price": 71990,
        "image_url": "https://tse1.mm.bing.net/th?q=AMD+Ryzen+9+processor+box",
        "compatibility": {
            "platform": "AMD",
            "socket": "AM5",
            "cores": "16 CORES",
            "threads": "32 THREADS",
            "power": 220
        }
    },
    {
        "id": "mobo_msi_b850m_plus",
        "name": "MSI B850M GAMING PLUS WIFI 6E DDR5",
        "category": "Motherboard",
        "price": 15850,
        "image_url": "https://tse1.mm.bing.net/th?q=MSI+B850M+GAMING+PLUS+WIFI+DDR5+motherboard",
        "compatibility": {
            "platform": "AMD",
            "socket": "AM5",
            "chipset": "B850",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_gb_b850m_gx",
        "name": "Gigabyte B850M GAMING X WIFI6E",
        "category": "Motherboard",
        "price": 16500,
        "image_url": "https://tse1.mm.bing.net/th?q=Gigabyte+B850M+GAMING+X+WIFI6E+motherboard",
        "compatibility": {
            "platform": "AMD",
            "socket": "AM5",
            "chipset": "B850",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_gb_b850_gx",
        "name": "Gigabyte B850 Gaming X WIFI6E",
        "category": "Motherboard",
        "price": 19900,
        "image_url": "https://tse1.mm.bing.net/th?q=Gigabyte+B850+Gaming+X+motherboard",
        "compatibility": {
            "platform": "AMD",
            "socket": "AM5",
            "chipset": "B850",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_gb_x870_eagle",
        "name": "Gigabyte X870 EAGLE WIFI7 AMD Motherboard",
        "category": "Motherboard",
        "price": 21990,
        "image_url": "https://tse1.mm.bing.net/th?q=Gigabyte+X870+EAGLE+WIFI7+motherboard",
        "compatibility": {
            "platform": "AMD",
            "socket": "AM5",
            "chipset": "X870",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_msi_x870e_s",
        "name": "MSI PRO X870E-S Evo WIFI",
        "category": "Motherboard",
        "price": 22350,
        "image_url": "https://tse1.mm.bing.net/th?q=MSI+PRO+X870E-S+Evo+motherboard",
        "compatibility": {
            "platform": "AMD",
            "socket": "AM5",
            "chipset": "X870E",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_msi_x870e_p",
        "name": "MSI PRO X870E-P WIFI",
        "category": "Motherboard",
        "price": 23440,
        "image_url": "https://tse1.mm.bing.net/th?q=MSI+PRO+X870E-P+WIFI+motherboard",
        "compatibility": {
            "platform": "AMD",
            "socket": "AM5",
            "chipset": "X870E",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_msi_x870e_max1",
        "name": "MSI MAG X870E Gaming MAX WIFI7",
        "category": "Motherboard",
        "price": 23700,
        "image_url": "https://tse1.mm.bing.net/th?q=MSI+MAG+X870E+Gaming+MAX+WIFI7+motherboard",
        "compatibility": {
            "platform": "AMD",
            "socket": "AM5",
            "chipset": "X870E",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_msi_b850_tomahawk",
        "name": "MSI B850 TOMAHAWK MAX WIFI DDR5",
        "category": "Motherboard",
        "price": 24990,
        "image_url": "https://tse1.mm.bing.net/th?q=MSI+B850+TOMAHAWK+motherboard",
        "compatibility": {
            "platform": "AMD",
            "socket": "AM5",
            "chipset": "B850",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_msi_x870e_gp",
        "name": "MSI X870E Gaming Plus WIFI",
        "category": "Motherboard",
        "price": 25500,
        "image_url": "https://tse1.mm.bing.net/th?q=MSI+X870E+Gaming+Plus+WIFI+motherboard",
        "compatibility": {
            "platform": "AMD",
            "socket": "AM5",
            "chipset": "X870E",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_gb_b850_stealth",
        "name": "B850 AORUS STEALTH Gigabyte (Connectors at Back)",
        "category": "Motherboard",
        "price": 26500,
        "image_url": "https://tse1.mm.bing.net/th?q=B850+AORUS+STEALTH+Gigabyte+motherboard",
        "compatibility": {
            "platform": "AMD",
            "socket": "AM5",
            "chipset": "B850",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_gb_x870e_aorus",
        "name": "Gigabyte X870E AORUS ELITE WIFI7",
        "category": "Motherboard",
        "price": 26990,
        "image_url": "https://tse1.mm.bing.net/th?q=Gigabyte+X870E+AORUS+ELITE+motherboard",
        "compatibility": {
            "platform": "AMD",
            "socket": "AM5",
            "chipset": "X870E",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_asus_x870",
        "name": "ASUS PRIME X870-P WIFI DDR5",
        "category": "Motherboard",
        "price": 26990,
        "image_url": "https://tse1.mm.bing.net/th?q=ASUS+PRIME+X870-P+WIFI+motherboard",
        "compatibility": {
            "platform": "AMD",
            "socket": "AM5",
            "chipset": "X870",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_msi_x870e_gpm",
        "name": "MSI MAG X870E Gaming PLUS MAX WIFI7",
        "category": "Motherboard",
        "price": 29680,
        "image_url": "https://tse1.mm.bing.net/th?q=MSI+MAG+X870E+Gaming+PLUS+MAX+motherboard",
        "compatibility": {
            "platform": "AMD",
            "socket": "AM5",
            "chipset": "X870E",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_msi_x870e_t",
        "name": "MSI MAG X870E Tomahawk WIFI",
        "category": "Motherboard",
        "price": 35680,
        "image_url": "https://tse1.mm.bing.net/th?q=MSI+MAG+X870E+Tomahawk+WIFI+motherboard",
        "compatibility": {
            "platform": "AMD",
            "socket": "AM5",
            "chipset": "X870E",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_msi_x870e_tm",
        "name": "MSI MAG X870E Tomahawk MAX WIFI7",
        "category": "Motherboard",
        "price": 36300,
        "image_url": "https://tse1.mm.bing.net/th?q=MSI+MAG+X870E+Tomahawk+MAX+motherboard",
        "compatibility": {
            "platform": "AMD",
            "socket": "AM5",
            "chipset": "X870E",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_msi_x870e_edge",
        "name": "MSI MPG X870E Edge TI WIFI",
        "category": "Motherboard",
        "price": 39900,
        "image_url": "https://tse1.mm.bing.net/th?q=MSI+MPG+X870E+Edge+TI+WIFI+motherboard",
        "compatibility": {
            "platform": "AMD",
            "socket": "AM5",
            "chipset": "X870E",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_asus_proart",
        "name": "ASUS PRO ART X870E CREATOR WIFI DDR5",
        "category": "Motherboard",
        "price": 54990,
        "image_url": "https://tse1.mm.bing.net/th?q=ASUS+PRO+ART+X870E+CREATOR+motherboard",
        "compatibility": {
            "platform": "AMD",
            "socket": "AM5",
            "chipset": "X870E",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_asus_strix",
        "name": "ASUS ROG STRIX X870E - E GAMING WIFI DDR5",
        "category": "Motherboard",
        "price": 55900,
        "image_url": "https://tse1.mm.bing.net/th?q=ASUS+ROG+STRIX+X870E-E+GAMING+motherboard",
        "compatibility": {
            "platform": "AMD",
            "socket": "AM5",
            "chipset": "X870E",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_gb_b860m_eagle",
        "name": "Gigabyte B860M Eagle Wifi 6",
        "category": "Motherboard",
        "price": 12890,
        "image_url": "https://tse1.mm.bing.net/th?q=Gigabyte+B860M+Eagle+Wifi+6+motherboard",
        "compatibility": {
            "platform": "Intel",
            "socket": "LGA1851",
            "chipset": "B860",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_gb_b860m_gaming",
        "name": "Gigabyte B860M Gaming Wifi 6",
        "category": "Motherboard",
        "price": 13990,
        "image_url": "https://tse1.mm.bing.net/th?q=Gigabyte+B860M+Gaming+Wifi+6+motherboard",
        "compatibility": {
            "platform": "Intel",
            "socket": "LGA1851",
            "chipset": "B860",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_gb_b860_eagle",
        "name": "Gigabyte B860 Eagle Wifi 6E",
        "category": "Motherboard",
        "price": 18990,
        "image_url": "https://tse1.mm.bing.net/th?q=Gigabyte+B860+Eagle+Wifi+6E+motherboard",
        "compatibility": {
            "platform": "Intel",
            "socket": "LGA1851",
            "chipset": "B860",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_msi_z890_s",
        "name": "MSI PRO Z890-S WIFI ATX",
        "category": "Motherboard",
        "price": 23900,
        "image_url": "https://tse1.mm.bing.net/th?q=MSI+PRO+Z890-S+WIFI+motherboard",
        "compatibility": {
            "platform": "Intel",
            "socket": "LGA1851",
            "chipset": "Z890",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_gb_z890_eagle",
        "name": "Gigabyte Z890 Eagle WIFI7 Intel Motherboard",
        "category": "Motherboard",
        "price": 24500,
        "image_url": "https://tse1.mm.bing.net/th?q=Gigabyte+Z890+Eagle+motherboard",
        "compatibility": {
            "platform": "Intel",
            "socket": "LGA1851",
            "chipset": "Z890",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_msi_z890_p",
        "name": "MSI PRO Z890-P WIFI",
        "category": "Motherboard",
        "price": 25900,
        "image_url": "https://tse1.mm.bing.net/th?q=MSI+PRO+Z890-P+WIFI+motherboard",
        "compatibility": {
            "platform": "Intel",
            "socket": "LGA1851",
            "chipset": "Z890",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_asus_z890_p_csm",
        "name": "Asus Prime Z890-P-CSM",
        "category": "Motherboard",
        "price": 26350,
        "image_url": "https://tse1.mm.bing.net/th?q=Asus+Prime+Z890-P-CSM+motherboard",
        "compatibility": {
            "platform": "Intel",
            "socket": "LGA1851",
            "chipset": "Z890",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_asus_z890m_plus_csm",
        "name": "Asus Prime Z890M-Plus WIFI-CSM",
        "category": "Motherboard",
        "price": 26450,
        "image_url": "https://tse1.mm.bing.net/th?q=Asus+Prime+Z890M-Plus+motherboard",
        "compatibility": {
            "platform": "Intel",
            "socket": "LGA1851",
            "chipset": "Z890",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_msi_z890_a",
        "name": "MSI PRO Z890-A WIFI",
        "category": "Motherboard",
        "price": 27350,
        "image_url": "https://tse1.mm.bing.net/th?q=MSI+PRO+Z890-A+WIFI+motherboard",
        "compatibility": {
            "platform": "Intel",
            "socket": "LGA1851",
            "chipset": "Z890",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_asus_z890_p_wifi_csm",
        "name": "Asus Prime Z890-P WIFI-CSM",
        "category": "Motherboard",
        "price": 30900,
        "image_url": "https://tse1.mm.bing.net/th?q=Asus+Prime+Z890-P+WIFI+motherboard",
        "compatibility": {
            "platform": "Intel",
            "socket": "LGA1851",
            "chipset": "Z890",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_gb_z890_aorus",
        "name": "Gigabyte Z890 Aorus Elite WIFI7 Intel Motherboard",
        "category": "Motherboard",
        "price": 31500,
        "image_url": "https://tse1.mm.bing.net/th?q=Gigabyte+Z890+Aorus+Elite+motherboard",
        "compatibility": {
            "platform": "Intel",
            "socket": "LGA1851",
            "chipset": "Z890",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_msi_z890_tomahawk",
        "name": "MSI MAG Z890 Tomahawk WiFi Motherboard",
        "category": "Motherboard",
        "price": 32900,
        "image_url": "https://tse1.mm.bing.net/th?q=MSI+MAG+Z890+Tomahawk+motherboard",
        "compatibility": {
            "platform": "Intel",
            "socket": "LGA1851",
            "chipset": "Z890",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_msi_z890_edge",
        "name": "MSI MPG Z890 Edge TI WIFI",
        "category": "Motherboard",
        "price": 44500,
        "image_url": "https://tse1.mm.bing.net/th?q=MSI+MPG+Z890+Edge+TI+motherboard",
        "compatibility": {
            "platform": "Intel",
            "socket": "LGA1851",
            "chipset": "Z890",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_asus_z890_f_gaming",
        "name": "Asus ROG Strix Z890-F Gaming WIFI",
        "category": "Motherboard",
        "price": 46500,
        "image_url": "https://tse1.mm.bing.net/th?q=Asus+ROG+Strix+Z890-F+Gaming+motherboard",
        "compatibility": {
            "platform": "Intel",
            "socket": "LGA1851",
            "chipset": "Z890",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_asus_z890_e_gaming",
        "name": "Asus ROG Strix Z890-E Gaming",
        "category": "Motherboard",
        "price": 52500,
        "image_url": "https://tse1.mm.bing.net/th?q=Asus+ROG+Strix+Z890-E+Gaming+motherboard",
        "compatibility": {
            "platform": "Intel",
            "socket": "LGA1851",
            "chipset": "Z890",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "mobo_asus_proart_z890",
        "name": "Asus ProArt Z890-Creator",
        "category": "Motherboard",
        "price": 54350,
        "image_url": "https://tse1.mm.bing.net/th?q=Asus+ProArt+Z890-Creator+motherboard",
        "compatibility": {
            "platform": "Intel",
            "socket": "LGA1851",
            "chipset": "Z890",
            "ram_type": "DDR5"
        }
    },
    {
        "id": "ram_gskill_z5_16_single",
        "name": "G.Skill Trident Z5 RGB 16GB Single Stick",
        "category": "RAM",
        "price": 20990,
        "image_url": "https://tse1.mm.bing.net/th?q=G.Skill+Trident+Z5+RGB+16GB+single+DDR5+RAM",
        "compatibility": {
            "ram_type": "DDR5",
            "capacity": "16GB",
            "speed": "6000MHz"
        }
    },
    {
        "id": "ram_xpg_lancer_16",
        "name": "XPG Lancer 16GB DDR5 6000MHZ CL36",
        "category": "RAM",
        "price": 22990,
        "image_url": "https://tse1.mm.bing.net/th?q=XPG+Lancer+16GB+DDR5+RAM",
        "compatibility": {
            "ram_type": "DDR5",
            "capacity": "16GB",
            "speed": "6000MHz"
        }
    },
    {
        "id": "ram_tcreate_16_single",
        "name": "T-Create 16GB DDR5 6000MHZ CL30 (Single Stick)",
        "category": "RAM",
        "price": 23780,
        "image_url": "https://tse1.mm.bing.net/th?q=T-Create+16GB+DDR5+single+stick+RAM",
        "compatibility": {
            "ram_type": "DDR5",
            "capacity": "16GB",
            "speed": "6000MHz"
        }
    },
    {
        "id": "ram_gskill_neo_32",
        "name": "G Skill Trident Neo 32GB (16GBx2)",
        "category": "RAM",
        "price": 41990,
        "image_url": "https://tse1.mm.bing.net/th?q=G+Skill+Trident+Neo+32GB+kit+DDR5",
        "compatibility": {
            "ram_type": "DDR5",
            "capacity": "32GB",
            "speed": "6000MHz"
        }
    },
    {
        "id": "ram_acer_pallas_32",
        "name": "Acer Predator Pallas II 32GB Kit (16x2)",
        "category": "RAM",
        "price": 42990,
        "image_url": "https://tse1.mm.bing.net/th?q=Acer+Predator+Pallas+II+RAM",
        "compatibility": {
            "ram_type": "DDR5",
            "capacity": "32GB",
            "speed": "6000MHz",
            "latency": "CL32"
        }
    },
    {
        "id": "ram_xpg_blade_32",
        "name": "XPG LANCER BLADE RGB 32GB (16x2)",
        "category": "RAM",
        "price": 43500,
        "image_url": "https://tse1.mm.bing.net/th?q=XPG+LANCER+BLADE+RGB+32GB+RAM",
        "compatibility": {
            "ram_type": "DDR5",
            "capacity": "32GB",
            "speed": "6000MHz"
        }
    },
    {
        "id": "ram_tcreate_expert_32",
        "name": "T-Create EXPERT DDR5 BLACK 32GB (2x16GB)",
        "category": "RAM",
        "price": 44500,
        "image_url": "https://tse1.mm.bing.net/th?q=T-Create+EXPERT+DDR5+BLACK+32GB+RAM",
        "compatibility": {
            "ram_type": "DDR5",
            "capacity": "32GB",
            "speed": "6000MHz"
        }
    },
    {
        "id": "ram_corsair_dom_32",
        "name": "Dominator Platinum RGB 32GB (16x2) (INTEL)",
        "category": "RAM",
        "price": 52500,
        "image_url": "https://tse1.mm.bing.net/th?q=Corsair+Dominator+Platinum+RGB+DDR5",
        "compatibility": {
            "ram_type": "DDR5",
            "capacity": "32GB",
            "speed": "6000MHz"
        }
    },
    {
        "id": "ram_gskill_trident_64",
        "name": "GSkill Trident 64GB (32GBx2)",
        "category": "RAM",
        "price": 69990,
        "image_url": "https://tse1.mm.bing.net/th?q=GSkill+Trident+Z5+RGB+64GB",
        "compatibility": {
            "ram_type": "DDR5",
            "capacity": "64GB",
            "speed": "6000MHz"
        }
    },
    {
        "id": "ram_acer_hermes_96",
        "name": "Acer Predator Hermes 96GB (48x2)",
        "category": "RAM",
        "price": 115000,
        "image_url": "https://tse1.mm.bing.net/th?q=Acer+Predator+Hermes+96GB+RAM",
        "compatibility": {
            "ram_type": "DDR5",
            "capacity": "96GB",
            "speed": "6000MHz"
        }
    },
    {
        "id": "gpu_gb_4060ti_8g",
        "name": "Gigabyte RTX™ 4060 Ti GAMING OC 8GB",
        "category": "GPU",
        "price": 46500,
        "image_url": "https://tse1.mm.bing.net/th?q=Gigabyte+RTX+4060+Ti+GAMING+OC",
        "compatibility": {
            "platform": "NVIDIA",
            "capacity": "8GB",
            "memory_type": "GDDR6X",
            "power": 250
        }
    },
    {
        "id": "gpu_pny_5060ti_16g",
        "name": "PNY RTX 5060Ti 16GB",
        "category": "GPU",
        "price": 64990,
        "image_url": "https://tse1.mm.bing.net/th?q=PNY+RTX+5060Ti+16GB",
        "compatibility": {
            "platform": "NVIDIA",
            "capacity": "16GB",
            "memory_type": "GDDR6",
            "power": 180
        }
    },
    {
        "id": "gpu_col_5060ti_duo",
        "name": "Colorful RTX 5060 Ti Battle AX DUO 16GB-V Graphics Card",
        "category": "GPU",
        "price": 66500,
        "image_url": "https://tse1.mm.bing.net/th?q=Colorful+RTX+5060+Ti+Battle+AX+DUO",
        "compatibility": {
            "platform": "NVIDIA",
            "capacity": "16GB",
            "memory_type": "GDDR6",
            "power": 150
        }
    },
    {
        "id": "gpu_sap_9070xt_16g",
        "name": "Saphire Pulse 9070XT 16GB",
        "category": "GPU",
        "price": 72500,
        "image_url": "https://tse1.mm.bing.net/th?q=Sapphire+Pulse+9070XT",
        "compatibility": {
            "platform": "AMD",
            "capacity": "16GB",
            "memory_type": "GDDR7",
            "power": 300
        }
    },
    {
        "id": "gpu_gb_9070xt_gaming",
        "name": "Gigabyte RX 9070 XT GAMING OC 16G",
        "category": "GPU",
        "price": 73500,
        "image_url": "https://tse1.mm.bing.net/th?q=Gigabyte+RX+9070+XT+GAMING+OC",
        "compatibility": {
            "platform": "AMD",
            "capacity": "16GB",
            "memory_type": "GDDR7",
            "power": 300
        }
    },
    {
        "id": "gpu_asrock_9070xt_steel",
        "name": "Asrock Steel Legend 9070XT 16GB",
        "category": "GPU",
        "price": 73990,
        "image_url": "https://tse1.mm.bing.net/th?q=Asrock+Steel+Legend+9070XT",
        "compatibility": {
            "platform": "AMD",
            "capacity": "16GB",
            "power": 300
        }
    },
    {
        "id": "gpu_col_5070_battle",
        "name": "Colorful GeForce RTX 5070 Battle AX Triple Fan",
        "category": "GPU",
        "price": 75500,
        "image_url": "https://tse1.mm.bing.net/th?q=Colorful+GeForce+RTX+5070+Battle+AX",
        "compatibility": {
            "platform": "NVIDIA",
            "capacity": "12GB",
            "memory_type": "GDDR6X",
            "power": 250
        }
    },
    {
        "id": "gpu_gb_5070_sff",
        "name": "Gigabyte RTX™ 5070 WINDFORCE OC SFF 12G",
        "category": "GPU",
        "price": 82500,
        "image_url": "https://tse1.mm.bing.net/th?q=Gigabyte+RTX+5070+WINDFORCE+OC+SFF",
        "compatibility": {
            "platform": "NVIDIA",
            "capacity": "12GB",
            "memory_type": "GDDR7X",
            "power": 160
        }
    },
    {
        "id": "gpu_gb_5070ti_sff",
        "name": "Gigabyte RTX™ 5070 Ti WINDFORCE OC SFF 16G",
        "category": "GPU",
        "price": 120000,
        "image_url": "https://tse1.mm.bing.net/th?q=Gigabyte+RTX+5070+Ti+WINDFORCE+OC+SFF",
        "compatibility": {
            "platform": "NVIDIA",
            "capacity": "16GB",
            "memory_type": "GDDR7",
            "power": 355
        }
    },
    {
        "id": "gpu_col_5070ti_ultra",
        "name": "Colorful iGame GeForce RTX 5070 Ti Ultra Z OC 16GB-V",
        "category": "GPU",
        "price": 129990,
        "image_url": "https://tse1.mm.bing.net/th?q=Colorful+iGame+RTX+5070+Ti+Ultra",
        "compatibility": {
            "platform": "NVIDIA", // Using NVIDIA as base platform internally
            "capacity": "16GB",
            "power": 300
        }
    },
    {
        "id": "gpu_gb_5080_sff",
        "name": "Gigabyte RTX™ 5080 WINDFORCE OC SFF 16G",
        "category": "GPU",
        "price": 141000,
        "image_url": "https://tse1.mm.bing.net/th?q=Gigabyte+RTX+5080+WINDFORCE+OC+SFF",
        "compatibility": {
            "platform": "NVIDIA",
            "capacity": "16GB",
            "memory_type": "GDDR7",
            "power": 345
        }
    },
    {
        "id": "gpu_gb_5080_gaming",
        "name": "Gigabyte RTX 5080 Gaming OC 16GB",
        "category": "GPU",
        "price": 165000,
        "image_url": "https://tse1.mm.bing.net/th?q=Gigabyte+RTX+5080+Gaming+OC",
        "compatibility": {
            "platform": "NVIDIA",
            "capacity": "16GB",
            "power": 360
        }
    },
    {
        "id": "gpu_aorus_5080_ice",
        "name": "AORUS GeForce RTX™ 5080 MASTER ICE 16G",
        "category": "GPU",
        "price": 205000,
        "image_url": "https://tse1.mm.bing.net/th?q=AORUS+GeForce+RTX+5080+MASTER+ICE",
        "compatibility": {
            "platform": "NVIDIA",
            "capacity": "16GB",
            "memory_type": "GDDR6X",
            "power": 350
        }
    },
    {
        "id": "gpu_aorus_5080",
        "name": "AORUS GeForce RTX™ 5080 MASTER 16G",
        "category": "GPU",
        "price": 205000,
        "image_url": "https://tse1.mm.bing.net/th?q=AORUS+GeForce+RTX+5080+MASTER",
        "compatibility": {
            "platform": "NVIDIA",
            "capacity": "16GB",
            "memory_type": "GDDR6X",
            "power": 350
        }
    },
    {
        "id": "st_acer_predator_1tb",
        "name": "Acer Predator GM7 Gen 4 NVMe",
        "category": "Storage",
        "price": 17850,
        "image_url": "https://tse1.mm.bing.net/th?q=Acer+Predator+GM7+Gen+4+NVMe",
        "compatibility": { "capacity": "1TB", "interface": "NVMe PCIe 4.0", "speed_mbps": "7400" }
    },
    {
        "id": "st_wd_black_1tb",
        "name": "WD Black SN7100 NVMe 1TB",
        "category": "Storage",
        "price": 19900,
        "image_url": "https://tse1.mm.bing.net/th?q=WD+Black+SN7100+NVMe+1TB",
        "compatibility": { "capacity": "1TB", "interface": "NVMe PCIe 4.0", "speed_mbps": "7260 MB/s" }
    },
    {
        "id": "st_crucial_p510_1tb",
        "name": "Crucial P510 1TB PCIe Gen5 NVMe M.2 SSD",
        "category": "Storage",
        "price": 19900,
        "image_url": "https://tse1.mm.bing.net/th?q=Crucial+P510+1TB+PCIe+Gen5",
        "compatibility": { "capacity": "1TB", "interface": "NVMe PCIe 5.0", "speed_mbps": "11000" }
    },

    {
        "id": "psu_corsair_rm850e",
        "name": "Cooler Master RM850e Fully Modular",
        "category": "PSU",
        "price": 9800,
        "image_url": "https://tse1.mm.bing.net/th?q=Corsair+RM850e+Fully+Modular",
        "compatibility": { "efficiency": "80+ Gold", "modularity": "Fully Modular", "power_w": "850W", "wattage": 850 }
    },
    {
        "id": "psu_cm_mwe850",
        "name": "Cooler Master MWE Gold 850 V2",
        "category": "PSU",
        "price": 10300,
        "image_url": "https://tse1.mm.bing.net/th?q=Cooler+Master+MWE+Gold+850+V2",
        "compatibility": { "efficiency": "80+ Gold", "modularity": "Fully Modular", "power_w": "850W", "wattage": 850 }
    },
    {
        "id": "psu_msi_mag850_w",
        "name": "MSI MAG A850GL White",
        "category": "PSU",
        "price": 10500,
        "image_url": "https://tse1.mm.bing.net/th?q=MSI+MAG+A850GL+White",
        "compatibility": { "efficiency": "80+ Gold", "modularity": "Fully Modular", "power_w": "850W", "wattage": 850 }
    },
    {
        "id": "psu_tt_tougpower1050",
        "name": "Thermaltake Toughpower GF A3 1050W",
        "category": "PSU",
        "price": 12900,
        "image_url": "https://tse1.mm.bing.net/th?q=Thermaltake+Toughpower+GF+A3+1050W",
        "compatibility": { "efficiency": "80+ Gold", "modularity": "Fully Modular", "power_w": "1050W", "wattage": 1050 }
    },

    {
        "id": "cool_deepcool_le360",
        "name": "Deepcool LE360 V2 Liquid AIO",
        "category": "Cooling",
        "price": 6500,
        "image_url": "https://tse1.mm.bing.net/th?q=Deepcool+LE360+V2+Liquid+AIO",
        "compatibility": { "cooling_type": "AIO Liquid", "size": "360MM", "tdp_max": "Max: 200W" }
    },
    {
        "id": "cool_msi_mag360_w",
        "name": "MAG Coreliquid A13 360 ARGB White",
        "category": "Cooling",
        "price": 7150,
        "image_url": "https://tse1.mm.bing.net/th?q=MSI+MAG+Coreliquid+A13+360+ARGB+White",
        "compatibility": { "cooling_type": "Liquid Cooler", "size": "360MM", "tdp_max": "Max: 150W" }
    },
    {
        "id": "cool_tt_th360",
        "name": "TH360 V2 ARGB Sync",
        "category": "Cooling",
        "price": 7200,
        "image_url": "https://tse1.mm.bing.net/th?q=Thermaltake+TH360+V2+ARGB+Sync",
        "compatibility": { "cooling_type": "Liquid Cooler", "size": "360MM", "tdp_max": "Max: 220W" }
    },
    {
        "id": "cool_cm_masterliquid_nex",
        "name": "MasterLiquid Core NEX 360 ARGB",
        "category": "Cooling",
        "price": 7400,
        "image_url": "https://tse1.mm.bing.net/th?q=Cooler+Master+MasterLiquid+Core+NEX+360+ARGB",
        "compatibility": { "cooling_type": "Liquid Cooler", "size": "360MM", "tdp_max": "Max: 180W" }
    },
    {
        "id": "cool_msi_mag360_b",
        "name": "MAG Coreliquid A13 360 ARGB",
        "category": "Cooling",
        "price": 7400,
        "image_url": "https://tse1.mm.bing.net/th?q=MSI+MAG+Coreliquid+A13+360+ARGB+Black",
        "compatibility": { "cooling_type": "Liquid Cooler", "size": "360MM", "tdp_max": "Max: 150W" }
    },
    {
        "id": "cool_cm_masterliquid_core2",
        "name": "MasterLiquid 360 Core II ARGB",
        "category": "Cooling",
        "price": 8148,
        "image_url": "https://tse1.mm.bing.net/th?q=Cooler+Master+MasterLiquid+360+Core+II+ARGB",
        "compatibility": { "cooling_type": "Liquid Cooler", "size": "360MM", "tdp_max": "Max: 180W" }
    },

    {
        "id": "case_cm_qube540",
        "name": "Cooler Master Qube 540",
        "category": "Case",
        "price": 6000,
        "image_url": "https://tse1.mm.bing.net/th?q=Cooler+Master+Qube+540",
        "compatibility": { "form_factor": "Mid Tower", "color": "Black", "panel": "Tempered Glass" }
    },
    {
        "id": "case_antec_c3_blk",
        "name": "ANTEC C3 ARGB CASE BLACK",
        "category": "Case",
        "price": 6500,
        "image_url": "https://tse1.mm.bing.net/th?q=ANTEC+C3+ARGB+CASE+BLACK",
        "compatibility": { "form_factor": "Mid Tower", "color": "Black", "panel": "Tempered Glass" }
    },
    {
        "id": "case_antec_c3_wht",
        "name": "ANTEC C3 ARGB CASE WHITE",
        "category": "Case",
        "price": 6850,
        "image_url": "https://tse1.mm.bing.net/th?q=ANTEC+C3+ARGB+CASE+WHITE",
        "compatibility": { "form_factor": "Mid Tower", "color": "White", "panel": "Tempered Glass" }
    },
    {
        "id": "case_antec_c7_blk",
        "name": "Antec C7 Black ARGB",
        "category": "Case",
        "price": 7500,
        "image_url": "https://tse1.mm.bing.net/th?q=Antec+C7+Black+ARGB",
        "compatibility": { "form_factor": "Mid Tower", "color": "Black", "panel": "Tempered Glass" }
    },
    {
        "id": "case_tt_view380",
        "name": "Thermaltake View 380 TG ARGB Black",
        "category": "Case",
        "price": 7890,
        "image_url": "https://tse1.mm.bing.net/th?q=Thermaltake+View+380+TG+ARGB+Black",
        "compatibility": { "form_factor": "Mid Tower", "color": "Black", "panel": "Tempered Glass" }
    },
    {
        "id": "case_antec_c5_blk",
        "name": "ANTEC C5 ARGB CASE BLACK",
        "category": "Case",
        "price": 8450,
        "image_url": "https://tse1.mm.bing.net/th?q=ANTEC+C5+ARGB+CASE+BLACK",
        "compatibility": { "form_factor": "Mid Tower", "color": "Black", "panel": "Tempered Glass" }
    }
];

// State
let allComponents = componentsDB;
let currentBuild = {
    "CPU": null,
    "Motherboard": null,
    "RAM": null,
    "GPU": null,
    "Storage": null,
    "PSU": null,
    "Cooling": null,
    "Case": null
};

const categories = ["CPU", "Motherboard", "RAM", "GPU", "Storage", "PSU", "Cooling", "Case"];
let activeTab = "CPU";
let brandFilter = "All"; // Active brand filter
let deliveryMode = "pickup"; // Added delivery option state

let estimatedPower = 0; // global scope for print access

// Utilities
const formatPrice = (price) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);

// Initialization - Removed fetch due to CORS in local file:// environments
document.addEventListener("DOMContentLoaded", () => {
    // Initial Renders directly using the hardcoded array
    renderTabs();
    renderComponentList();
    renderBuildSummary();

    // Listen for delivery changes
    document.querySelectorAll('input[name="delivery"]').forEach((radio) => {
        radio.addEventListener('change', function () {
            deliveryMode = this.value;
            renderBuildSummary();
        });
    });
});

window.printSpecSheet = function () {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
        alert("Please allow popups to generate the Print Spec Sheet.");
        return;
    }

    let html = `
    <html>
    <head>
        <title>Voxen Computers - Custom PC Spec Sheet</title>
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; max-width: 800px; margin: 0 auto; padding: 40px; }
            h1 { color: #1e3a8a; text-align: center; border-bottom: 2px solid #1e3a8a; padding-bottom: 10px; margin-bottom: 5px; }
            .header-info { display: flex; justify-content: space-between; margin-bottom: 30px; font-size: 14px; color: #666; font-style: italic; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
            th, td { padding: 12px 15px; border-bottom: 1px solid #ddd; text-align: left; }
            th { background-color: #f8fafc; font-weight: bold; color: #1e3a8a; }
            .total-row { font-weight: bold; font-size: 18px; }
            .total-row td { border-top: 2px solid #1e3a8a; }
            .compatibility { background-color: #f0fdf4; border: 1px solid #bbf7d0; padding: 20px; border-radius: 8px; margin-bottom: 30px; }
            .compatibility h3 { color: #166534; margin-top: 0; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
            .compatibility p { margin: 5px 0; }
            .footer { text-align: center; font-size: 12px; color: #999; margin-top: 50px; border-top: 1px solid #ddd; padding-top: 20px; }
        </style>
    </head>
    <body>
        <h1>Voxen Custom PC Spec Sheet</h1>
        <div class="header-info">
            <span>Date: ${new Date().toLocaleDateString()}</span>
            <span>Estimated Delivery: ${deliveryMode === 'delivery' ? 'Home Delivery' : 'Store Pickup'}</span>
        </div>
        
        <table>
            <thead>
                <tr>
                    <th>Component Category</th>
                    <th>Selected Part</th>
                    <th style="text-align: right;">Price</th>
                </tr>
            </thead>
            <tbody>
    `;

    let total = 0;
    categories.forEach(cat => {
        if (currentBuild[cat]) {
            html += `
                <tr>
                    <td><strong>${cat}</strong></td>
                    <td>${currentBuild[cat].name}</td>
                    <td style="text-align: right;">${formatPrice(currentBuild[cat].price)}</td>
                </tr>
            `;
            total += currentBuild[cat].price;
        } else {
            html += `
                <tr>
                    <td><strong>${cat}</strong></td>
                    <td style="color: #ef4444;"><em>Not Selected</em></td>
                    <td style="text-align: right;">-</td>
                </tr>
            `;
        }
    });

    let extraShipping = (deliveryMode === 'delivery') ? 2850 : 0;
    let grandTotal = total + extraShipping;

    if (extraShipping > 0) {
        html += `
            <tr>
                <td><strong>Shipping</strong></td>
                <td>Home Delivery Charge</td>
                <td style="text-align: right;">${formatPrice(extraShipping)}</td>
            </tr>
        `;
    }

    html += `
            <tr class="total-row">
                <td colspan="2" style="text-align: right;">Grand Total:</td>
                <td style="text-align: right; color: #1e3a8a;">${formatPrice(grandTotal)}</td>
            </tr>
            </tbody>
        </table>
        
        <div class="compatibility">
            <h3><svg width="24" height="24" fill="none" stroke="#166534" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> System Compatibility Summary</h3>
            <p><strong>Power Draw:</strong> ${estimatedPower}W</p>
            <p><strong>Recommended PSU:</strong> ${estimatedPower > 0 ? estimatedPower + 175 : 0}W+</p>
            <p style="margin-top: 15px; font-size: 13px;"><em>All components have been strictly filtered by the Configurator to ensure physical and electrical compatibility.</em></p>
        </div>
        
        <div class="footer">
            <p>Generated securely by Voxen Computers Configurator</p>
            <p>Prices are subject to market changes. For final confirmation, please speak to your builder via WhatsApp.</p>
        </div>
        <script>
            window.onload = function() { 
                setTimeout(() => {
                    window.print();
                    // Optional: window.close() after printing
                }, 500);
            }
        </script>
    </body>
    </html>
    `;

    printWindow.document.write(html);
    printWindow.document.close();
};

function setBrandFilter(brand) {
    brandFilter = brand;
    renderComponentList();
}

function renderTabs() {
    const tabsContainer = document.getElementById("config-tabs");
    if (!tabsContainer) return;
    tabsContainer.innerHTML = '';

    categories.forEach(cat => {
        const btn = document.createElement("button");
        const isActive = activeTab === cat;
        btn.className = `px-5 py-2 rounded-lg font-medium transition whitespace-nowrap text-sm ${isActive ? 'bg-primary text-white' : 'text-gray-400 hover:text-white hover:bg-slate-800'}`;

        // Check if item is selected for indicator
        if (currentBuild[cat]) {
            btn.innerHTML = `${cat} <span class="ml-1 text-green-400 text-xs">●</span>`;
        } else {
            btn.innerText = cat;
        }

        btn.onclick = () => {
            activeTab = cat;
            brandFilter = "All"; // Reset filter on tab change
            renderTabs();
            renderComponentList();
        };
        tabsContainer.appendChild(btn);
    });
}

function getFilteredComponents() {
    let components = allComponents.filter(c => c.category === activeTab);

    // Apply strict platform logic if activeTab depends on something
    if (activeTab === "Motherboard" && currentBuild["CPU"]) {
        components = components.filter(c => c.compatibility.socket === currentBuild["CPU"].compatibility.socket);
    }
    if (activeTab === "CPU" && currentBuild["Motherboard"]) {
        components = components.filter(c => c.compatibility.socket === currentBuild["Motherboard"].compatibility.socket);
    }
    if (activeTab === "RAM" && currentBuild["Motherboard"] && currentBuild["Motherboard"].compatibility.ram_type) {
        components = components.filter(c => c.compatibility.ram_type === currentBuild["Motherboard"].compatibility.ram_type);
    }
    if (activeTab === "PSU") {
        let totalPower = 0;
        if (currentBuild["CPU"]) totalPower += (currentBuild["CPU"].compatibility.power || 0);
        if (currentBuild["GPU"]) totalPower += (currentBuild["GPU"].compatibility.power || 0);
        totalPower += 100;
        if (totalPower > 100) {
            components = components.filter(c => c.compatibility.wattage >= totalPower);
        }
    }

    // Apply Brand Filter
    if (brandFilter !== "All") {
        components = components.filter(c =>
            (c.compatibility && c.compatibility.platform === brandFilter && activeTab !== "Motherboard") ||
            c.name.toUpperCase().includes(brandFilter.toUpperCase())
        );
    }

    return components;
}

function selectComponent(component) {
    currentBuild[component.category] = component;

    // Strict Dependency Enforcement
    if (component.category === "CPU" && currentBuild["Motherboard"]) {
        if (currentBuild["Motherboard"].compatibility.socket !== component.compatibility.socket) {
            currentBuild["Motherboard"] = null;
        }
    }
    if (component.category === "Motherboard" && currentBuild["CPU"]) {
        if (currentBuild["CPU"].compatibility.socket !== component.compatibility.socket) {
            currentBuild["CPU"] = null;
        }
    }

    // Auto-advance to next tab
    const currentIndex = categories.indexOf(activeTab);
    if (currentIndex < categories.length - 1) {
        activeTab = categories[currentIndex + 1];
        brandFilter = "All"; // reset filter when advancing
    }

    renderTabs();
    renderComponentList();
    renderBuildSummary();
}

function removeComponent(category) {
    currentBuild[category] = null;
    renderTabs();
    renderComponentList();
    renderBuildSummary();
}

function renderComponentList() {
    const listContainer = document.getElementById("component-list");
    const infoBar = document.getElementById("platform-info");
    const filtersContainer = document.getElementById("brand-filters");

    if (!listContainer) return;

    // --- Render Filters ---
    let availableBrands = ["AMD", "Intel"];
    if (activeTab === "Motherboard") availableBrands = ["ASUS", "Gigabyte", "MSI"];
    if (activeTab === "RAM") availableBrands = ["Corsair", "G.Skill", "Kingston", "TeamGroup"];
    if (activeTab === "Storage") availableBrands = ["ADATA", "Crucial", "Western Digital"];
    if (activeTab === "GPU") availableBrands = ["AMD", "Colorful", "Gigabyte", "NVIDIA", "PNY", "Sapphire"];
    if (activeTab === "PSU") availableBrands = ["Cooler Master", "Corsair", "MSI", "Thermaltake"];
    if (activeTab === "Cooling") availableBrands = ["Cooler Master", "Deepcool", "MSI", "Thermaltake"];
    if (activeTab === "Case") availableBrands = ["ANTEC", "Cooler Master", "Thermaltake"];

    if (filtersContainer) {
        filtersContainer.className = "flex gap-2 flex-wrap items-center mt-2 sm:mt-0";
        let filterHtml = `<span class="hidden sm:inline text-gray-400 mr-1 text-xs">Filter by Brand:</span>`;
        filterHtml += `<button class="px-3 py-1 rounded text-xs border transition ${brandFilter === 'All' ? 'bg-primary text-white border-primary font-bold' : 'border-slate-700 bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700'}" onclick="setBrandFilter('All')">All Brands</button>`;

        availableBrands.forEach(brand => {
            filterHtml += `<button class="px-3 py-1 rounded text-xs border transition ${brandFilter === brand ? 'bg-slate-600 border-slate-500 text-white font-bold' : 'border-transparent bg-[rgba(255,255,255,0.05)] text-gray-400 hover:text-white hover:bg-slate-700'}" onclick="setBrandFilter('${brand}')">${brand}</button>`;
        });
        filtersContainer.innerHTML = filterHtml;
    }

    // --- Render Info Bar ---
    if (activeTab === "Motherboard" && currentBuild["CPU"]) {
        infoBar.innerHTML = `Selected Platform: <span class="text-[10px] uppercase border px-2 py-0.5 rounded ml-2 align-middle font-bold ${currentBuild["CPU"].compatibility.platform === 'AMD' ? 'border-red-900/50 text-red-500 bg-red-950/30' : 'border-blue-900/50 text-blue-400 bg-blue-950/30'}">${currentBuild["CPU"].compatibility.platform} Platform</span> <span class="ml-2 text-xs text-gray-500">• Only compatible motherboards shown</span>`;
    } else if (activeTab === "CPU" && currentBuild["Motherboard"]) {
        infoBar.innerHTML = `Selected Platform: <span class="text-[10px] uppercase border px-2 py-0.5 rounded ml-2 align-middle font-bold ${currentBuild["Motherboard"].compatibility.platform === 'AMD' ? 'border-red-900/50 text-red-500 bg-red-950/30' : 'border-blue-900/50 text-blue-400 bg-blue-950/30'}">${currentBuild["Motherboard"].compatibility.platform} Platform</span> <span class="ml-2 text-xs text-gray-500">• Only compatible CPUs shown</span>`;
    } else if (activeTab === "PSU" && (currentBuild["CPU"] || currentBuild["GPU"])) {
        let req = 100 + (currentBuild["CPU"]?.compatibility.power || 0) + (currentBuild["GPU"]?.compatibility.power || 0);
        infoBar.innerHTML = `Estimated Power Draw: <span class="text-white bg-slate-700 px-2 py-1 rounded text-xs ml-2">${req}W</span> <span class="ml-2 text-xs text-gray-500">• Recommended PSUs shown</span>`;
    } else {
        infoBar.innerHTML = `Category: <span class="text-white font-semibold ml-1">${activeTab}</span>`;
    }

    // --- Render Components ---
    const components = getFilteredComponents();
    listContainer.innerHTML = '';

    if (components.length === 0) {
        listContainer.innerHTML = `<div class="bg-[rgba(255,255,255,0.02)] p-8 rounded-xl text-center text-gray-400">No components found for this category or filter.</div>`;
        return;
    }

    components.forEach(comp => {
        const isSelected = currentBuild[activeTab] && currentBuild[activeTab].id === comp.id;
        const isAmd = comp.compatibility && comp.compatibility.platform === 'AMD';
        const isIntel = comp.compatibility && comp.compatibility.platform === 'Intel';

        let leftBorder = 'border-slate-700'; // default
        if (isAmd) leftBorder = 'border-l-red-600';
        else if (isIntel) leftBorder = 'border-l-blue-600';

        const card = document.createElement("div");
        card.className = `p-4 rounded-xl flex flex-col sm:flex-row sm:items-center gap-4 transition border-y border-r border-l-[3px] ${leftBorder} ${isSelected ? 'bg-slate-800 border-y-slate-600 border-r-slate-600' : 'bg-[#15171a] border-y-transparent border-r-transparent hover:bg-slate-800 cursor-pointer'}`;

        if (!isSelected) {
            card.onclick = () => selectComponent(comp);
        }

        let badgesHtml = '';
        if (comp.compatibility) {
            if (comp.compatibility.platform && activeTab === "GPU") badgesHtml += `<span class="bg-[#1f2023] text-xs px-2 py-1 rounded border border-slate-700 text-gray-300 font-semibold uppercase">${comp.compatibility.platform}</span>`;
            if (comp.compatibility.socket) badgesHtml += `<span class="bg-[#1f2023] text-xs px-2 py-1 rounded border border-slate-700 text-gray-300 font-semibold">${comp.compatibility.socket}</span>`;
            if (comp.compatibility.chipset) badgesHtml += `<span class="bg-[#1f2023] text-xs px-2 py-1 rounded border border-slate-700 text-gray-300 font-semibold">${comp.compatibility.chipset}</span>`;
            if (comp.compatibility.cores) badgesHtml += `<span class="bg-[#1f2023] text-xs px-2 py-1 rounded border border-slate-700 text-gray-300 font-semibold">${comp.compatibility.cores}</span>`;
            if (comp.compatibility.threads) badgesHtml += `<span class="bg-[#1f2023] text-xs px-2 py-1 rounded border border-slate-700 text-gray-300 font-semibold">${comp.compatibility.threads}</span>`;
            if (comp.compatibility.capacity) badgesHtml += `<span class="bg-[#1f2023] text-xs px-2 py-1 rounded border border-slate-700 text-gray-300 font-semibold">${comp.compatibility.capacity}</span>`;
            if (comp.compatibility.memory_type) badgesHtml += `<span class="bg-[#1f2023] text-xs px-2 py-1 rounded border border-slate-700 text-gray-300 font-semibold">${comp.compatibility.memory_type}</span>`;
            if (comp.compatibility.latency) badgesHtml += `<span class="bg-[#1f2023] text-xs px-2 py-1 rounded border border-slate-700 text-gray-300 font-semibold">${comp.compatibility.latency}</span>`;
            if (comp.compatibility.ram_type) badgesHtml += `<span class="bg-[#1f2023] text-xs px-2 py-1 rounded border border-slate-700 text-gray-300 font-semibold">${comp.compatibility.ram_type}</span>`;
            if (comp.compatibility.speed) badgesHtml += `<span class="bg-[#1f2023] text-xs px-2 py-1 rounded border border-slate-700 text-gray-300 font-semibold">${comp.compatibility.speed}</span>`;
            if (comp.compatibility.power) badgesHtml += `<span class="bg-[#2a1c13] text-orange-400 text-xs px-2 py-1 rounded border border-orange-900 border-opacity-50 font-semibold">TDP: ${comp.compatibility.power}W</span>`;

            if (comp.compatibility.interface) badgesHtml += `<span class="bg-[#1f2023] text-xs px-2 py-1 rounded border border-slate-700 text-gray-300 font-semibold">${comp.compatibility.interface}</span>`;
            if (comp.compatibility.speed_mbps) badgesHtml += `<span class="bg-[#1f2023] text-xs px-2 py-1 rounded border border-slate-700 text-gray-300 font-semibold">${comp.compatibility.speed_mbps}</span>`;

            if (comp.compatibility.efficiency) badgesHtml += `<span class="bg-[#1f2023] text-xs px-2 py-1 rounded border border-slate-700 text-gray-300 font-semibold">${comp.compatibility.efficiency}</span>`;
            if (comp.compatibility.modularity) badgesHtml += `<span class="bg-[#1f2023] text-xs px-2 py-1 rounded border border-slate-700 text-gray-300 font-semibold">${comp.compatibility.modularity}</span>`;
            if (comp.compatibility.power_w) badgesHtml += `<span class="bg-[#2a1c13] text-orange-400 text-xs px-2 py-1 rounded border border-orange-900 border-opacity-50 font-semibold">${comp.compatibility.power_w}</span>`;

            if (comp.compatibility.cooling_type) badgesHtml += `<span class="bg-[#1f2023] text-xs px-2 py-1 rounded border border-slate-700 text-gray-300 font-semibold">${comp.compatibility.cooling_type}</span>`;
            if (comp.compatibility.size) badgesHtml += `<span class="bg-[#1f2023] text-xs px-2 py-1 rounded border border-slate-700 text-gray-300 font-semibold">${comp.compatibility.size}</span>`;
            if (comp.compatibility.tdp_max) badgesHtml += `<span class="bg-[#1a2e4a] text-blue-400 text-xs px-2 py-1 rounded border border-blue-900 border-opacity-50 font-semibold">${comp.compatibility.tdp_max}</span>`;

            if (comp.compatibility.form_factor) badgesHtml += `<span class="bg-[#1f2023] text-xs px-2 py-1 rounded border border-slate-700 text-gray-300 font-semibold">${comp.compatibility.form_factor}</span>`;
            if (comp.compatibility.color) badgesHtml += `<span class="bg-[#1f2023] text-xs px-2 py-1 rounded border border-slate-700 text-gray-300 font-semibold">${comp.compatibility.color}</span>`;
            if (comp.compatibility.panel) badgesHtml += `<span class="bg-[#1f2023] text-xs px-2 py-1 rounded border border-slate-700 text-gray-300 font-semibold">${comp.compatibility.panel}</span>`;
        }

        let platformBadge = '';
        if (activeTab === "CPU" || activeTab === "Motherboard") {
            if (isAmd) {
                platformBadge = `<span class="ml-3 text-[10px] uppercase border border-red-900/50 text-red-500 bg-red-950/30 px-2 py-0.5 rounded align-middle font-bold tracking-wider">AMD Platform</span>`;
            } else if (isIntel) {
                platformBadge = `<span class="ml-3 text-[10px] uppercase border border-blue-900/50 text-blue-400 bg-blue-950/30 px-2 py-0.5 rounded align-middle font-bold tracking-wider">Intel Platform</span>`;
            }
        }

        // Show motherboard brand or CPU platform based on category
        let brandSubtitle = '';
        if (activeTab === "Motherboard" || activeTab === "GPU" || activeTab === "Storage" || activeTab === "PSU" || activeTab === "Cooling" || activeTab === "Case") {
            if (comp.name.toUpperCase().includes("MSI") || comp.name.toUpperCase().includes("MAG")) brandSubtitle = "MSI";
            else if (comp.name.toUpperCase().includes("ASUS")) brandSubtitle = "ASUS";
            else if (comp.name.toUpperCase().includes("AORUS")) brandSubtitle = "Gigabyte"; // Support for Aorus
            else if (comp.name.toUpperCase().includes("GIGABYTE")) brandSubtitle = "Gigabyte";
            else if (comp.name.toUpperCase().includes("COLORFUL")) brandSubtitle = "Colorful";
            else if (comp.name.toUpperCase().includes("PNY")) brandSubtitle = "PNY";
            else if (comp.name.toUpperCase().includes("SAPHIRE")) brandSubtitle = "Sapphire";
            else if (comp.name.toUpperCase().includes("ASROCK")) brandSubtitle = "ASRock";
            else if (comp.name.toUpperCase().includes("ACER PREDATOR") || comp.name.toUpperCase().includes("ADATA")) brandSubtitle = "ADATA";
            else if (comp.name.toUpperCase().includes("WD BLACK") || comp.name.toUpperCase().includes("WESTERN DIGITAL")) brandSubtitle = "Western Digital";
            else if (comp.name.toUpperCase().includes("CRUCIAL")) brandSubtitle = "Crucial";
            else if (comp.name.toUpperCase().includes("CORSAIR") || comp.name.toUpperCase().includes("RM850E")) brandSubtitle = "Corsair";
            else if (comp.name.toUpperCase().includes("COOLER MASTER") || comp.name.toUpperCase().includes("MASTERLIQUID")) brandSubtitle = "Cooler Master";
            else if (comp.name.toUpperCase().includes("THERMALTAKE") || comp.name.toUpperCase().includes("TH360")) brandSubtitle = "Thermaltake";
            else if (comp.name.toUpperCase().includes("DEEPCOOL")) brandSubtitle = "Deepcool";
            else if (comp.name.toUpperCase().includes("ANTEC")) brandSubtitle = "ANTEC";
            else if (comp.compatibility.platform) brandSubtitle = comp.compatibility.platform;
        } else {
            brandSubtitle = isAmd ? 'AMD' : (isIntel ? 'Intel' : comp.category);
        }

        card.innerHTML = `
            <div class="bg-white p-2 rounded-xl shrink-0 w-24 h-24 sm:w-[90px] sm:h-[90px] flex items-center justify-center mx-auto sm:mx-0">
                <img src="${comp.image_url}" alt="${comp.name}" class="max-w-full max-h-full object-contain">
            </div>
            <div class="flex-1 min-w-0 text-center sm:text-left mt-3 sm:mt-0">
                <h3 class="font-bold text-lg leading-tight text-white inline-block align-middle">${comp.name}</h3>
                ${platformBadge}
                <div class="text-gray-400 text-xs mt-1 mb-2">${brandSubtitle}</div>
                <div class="flex flex-wrap justify-center sm:justify-start gap-2 mb-1">
                    ${badgesHtml}
                </div>
            </div>
            <div class="text-right flex flex-col items-center sm:items-end gap-2 shrink-0 sm:ml-4 mt-3 sm:mt-0">
                <span class="text-xl font-bold text-[#3B82F6]">${formatPrice(comp.price)}</span>
                ${isSelected
                ? `<button class="text-red-400 text-sm hover:text-red-300 px-3 py-1 bg-red-900/30 rounded border border-red-800/50" onclick="event.stopPropagation(); removeComponent('${activeTab}')">Remove</button>`
                : ''
            }
            </div>
        `;
        listContainer.appendChild(card);
    });
}

function renderBuildSummary() {
    const summaryContainer = document.getElementById("build-summary");
    const buildTotalEl = document.getElementById("build-total");
    const grandTotalEl = document.getElementById("grand-total");
    const mobileGrandTotalEl = document.getElementById("mobile-grand-total");
    const alertBox = document.getElementById("compatibility-alert");
    const successBox = document.getElementById("compatibility-success");
    const requiredBox = document.getElementById("required-components-box");
    const missingBadges = document.getElementById("missing-badges");
    const missingBtn = document.getElementById("missing-btn");
    const checkoutBtn = document.getElementById("checkout-btn");
    const estimatedPowerEl = document.getElementById("estimated-power");
    const recommendedPsuEl = document.getElementById("recommended-psu");

    let total = 0;
    let missing = [];

    // Optional container validation to support both old structure and new structure (for safe backward compat)
    if (summaryContainer) {
        summaryContainer.innerHTML = '';
    }

    estimatedPower = 0; // use global var

    categories.forEach((cat, index) => {
        const item = currentBuild[cat];

        if (item) {
            total += item.price;
            if (item.compatibility && item.compatibility.power) {
                estimatedPower += item.compatibility.power;
            }
        } else {
            missing.push(cat);
        }

        if (summaryContainer) {
            const row = document.createElement("div");
            if (item) {
                row.className = `p-3 rounded-lg border transition duration-300 border-slate-700 bg-[rgba(255,255,255,0.02)]`;
                row.innerHTML = `
                    <div class="flex justify-between text-sm mb-1">
                        <span class="text-gray-400">${cat}</span>
                        <span class="text-green-400 text-xs">✓ Selected</span>
                    </div>
                    <div class="flex justify-between items-start gap-4">
                        <span class="font-medium text-sm text-white line-clamp-2">${item.name}</span>
                        <span class="text-slate-300 whitespace-nowrap text-sm">${formatPrice(item.price)}</span>
                    </div>
                `;
            } else {
                row.className = `group p-3 rounded-lg border border-dashed transition duration-300 cursor-pointer border-slate-700 bg-transparent hover:bg-slate-800 hover:border-slate-500`;
                row.onclick = () => {
                    activeTab = cat;
                    brandFilter = "All";
                    renderTabs();
                    renderComponentList();
                };
                row.innerHTML = `
                    <div class="flex justify-between items-center mb-1">
                        <span class="text-gray-500 group-hover:text-gray-300 transition-colors">${cat}</span>
                        <span class="text-[#ca8a04] text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-amber-950/20 border border-amber-900/50">Required</span>
                    </div>
                    <div class="text-xs text-slate-600 group-hover:text-slate-400 transition-colors">Please select a component</div>
                `;
            }
            summaryContainer.appendChild(row);
        }
    });

    let extraShipping = (deliveryMode === 'delivery') ? 2850 : 0;
    let grandTotal = total + extraShipping;

    const formattedTotal = formatPrice(total);
    const formattedGrand = formatPrice(grandTotal);

    if (buildTotalEl) buildTotalEl.innerText = formattedTotal;
    if (grandTotalEl) grandTotalEl.innerText = formattedGrand;
    if (mobileGrandTotalEl) mobileGrandTotalEl.innerText = formattedGrand;

    // Power estimations
    let recPsuRange = estimatedPower > 0 ? (estimatedPower + 175) : 0; // Avg 150-200, used 175
    if (estimatedPowerEl) estimatedPowerEl.innerText = `${estimatedPower}W`;
    if (recommendedPsuEl) recommendedPsuEl.innerText = `${recPsuRange}W+`;

    if (missing.length > 0) {
        // Show "Required Components Missing" box with badges
        if (requiredBox) {
            requiredBox.classList.remove("hidden");
        }
        if (missingBadges) {
            missingBadges.innerHTML = missing.map(cat =>
                `<span class="text-xs font-semibold px-3 py-1 rounded-full bg-[rgba(133,77,14,0.25)] text-yellow-500 border border-yellow-700/50">${cat}</span>`
            ).join('');
        }
        if (alertBox) {
            alertBox.classList.remove("hidden");
            alertBox.innerHTML = `Missing: ${missing.join(", ")}. Please select them.`;
        }
        if (successBox) successBox.classList.add("hidden");

        if (missingBtn) {
            missingBtn.classList.remove("hidden");
            missingBtn.innerText = `${missing.length} required components missing`;
            missingBtn.onclick = () => {
                activeTab = missing[0];
                renderTabs();
                renderComponentList();
            };
        }
        if (checkoutBtn) {
            checkoutBtn.disabled = true;
            checkoutBtn.classList.add("opacity-50", "cursor-not-allowed");
        }
    } else {
        // Hide the required components box and show success
        if (requiredBox) requiredBox.classList.add("hidden");
        if (alertBox) alertBox.classList.add("hidden");
        if (successBox) successBox.classList.remove("hidden");

        if (missingBtn) missingBtn.classList.add("hidden");

        if (checkoutBtn) {
            checkoutBtn.disabled = false;
            checkoutBtn.classList.remove("opacity-50", "cursor-not-allowed");
            checkoutBtn.innerHTML = `<svg class="w-5 h-5 flex-shrink-0 inline-block -mt-1 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg> Speak to Builder`;
            checkoutBtn.onclick = () => {
                let text = "Hi Voxen Computers, I'm interested in this custom build:\n\n";
                categories.forEach(cat => {
                    if (currentBuild[cat]) {
                        text += `${cat}: ${currentBuild[cat].name} (${formatPrice(currentBuild[cat].price)})\n`;
                    }
                });
                text += `\nDelivery Mode: ${deliveryMode === 'delivery' ? 'Home Delivery (Toll included)' : 'Store Pickup'}`;
                text += `\nBuild Value: ${formatPrice(total)}`;
                text += `\nGrand Total: ${formatPrice(grandTotal)}`;
                const url = `https://wa.me/918849993205?text=${encodeURIComponent(text)}`;
                window.open(url, '_blank');
            };
        }
    }
}
