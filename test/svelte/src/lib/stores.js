import {readable} from 'svelte/store';

let stationData = {
    west: {
        adjacent: ["nord", "sued", "zentrum"],
        stations: {
            19: {
                x: 48,
                y: 291
            },
            20: {
                x: 229,
                y: 264
            },
            21: {
                x: 283,
                y: 152
            },
            23: {
                x: 369,
                y: 278
            },
            24: {
                x: 360,
                y: 377
            },
            25: {
                x: 266,
                y: 480
            }
        }
    },
    nord: {
        adjacent: ["west", "nordost", "zentrum"],
        stations: {

            18: {
                x: 414,
                y: 197
            },
            22: {
                x: 335,
                y: 115
            }
        }
    },
    nordost: {
        adjacent: ["nord", "ost", "zentrum"],
        stations: {

            26: {
                x: 594,
                y: 152
            },
            16: {
                x: 838,
                y: 152
            },
            17: {
                x: 715,
                y: 78
            }
        }
    },
    ost: {
        adjacent: ["suedost", "nordost", "zentrum"],
        stations: {

            6: {
                x: 715,
                y: 253
            },
            7: {
                x: 813,
                y: 244
            },
            8: {
                x: 909,
                y: 273
            },
            9: {
                x: 900,
                y: 358
            }
        }
    },
    suedost: {
        adjacent: ["ost", "sued", "zentrum"],
        stations: {

            10: {
                x: 863,
                y: 434
            },
            11: {
                x: 715,
                y: 517
            },
            14: {
                x: 661,
                y: 425
            }
        }
    },
    sued: {
        adjacent: ["suedost", "west", "zentrum"],
        stations: {

            12: {
                x: 526,
                y: 460
            },
            13: {
                x: 586,
                y: 422
            },
            15: {
                x: 569,
                y: 338
            }
        }
    },
    zentraum: {
        adjacent: ["west", "nord", "nordost", "ost", "suedost", "sued"],
        stations: {

            2: {
                x: 557,
                y: 203
            },
            5: {
                x: 565,
                y: 264
            },
            3: {
                x: 652,
                y: 273
            },
            4: {
                x: 436,
                y: 244
            }
        }
    },
}

export const count = readable(stationData, null);