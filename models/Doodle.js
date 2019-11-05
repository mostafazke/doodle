const mongoose = require('mongoose');
const {Schema} = mongoose;

const doddleSchema = new Schema({
    year: String,
    month: String,
    share_text: {
        type: String
    },
    name: {
        type: String
    },
    title: {
        type: String
    },
    high_res_width: {
        type: Number
    },
    run_date_array: {
        type: [Number]
    },
    translations: {
        gu: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        gl: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        'en-GB': {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        tn: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        lo: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        tr: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        lv: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        lt: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        tk: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        th: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        tg: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        te: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        ta: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        de: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        da: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        'pt-BR': {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        'sr-ME': {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        'ro-MD': {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        crs: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        'es-419': {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        el: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        en: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        eu: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        zu: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        es: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        ru: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        'zh-CN': {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        ro: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        be: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        bg: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        ms: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        wo: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        bn: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        mr: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        bs: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        ja: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        'pt-PT': {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        or: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        ca: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        ps: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        pa: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        pl: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        hy: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        hr: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        ht: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        hu: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        hi: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        mg: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        uz: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        ml: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        mn: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        mk: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        ur: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        mt: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        'sr-Latn': {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        uk: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        sr: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        my: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        af: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        vi: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        is: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        am: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        it: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        iw: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        kn: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        ar: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        et: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        az: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        id: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        nl: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        nn: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        no: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        ne: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        ny: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        fr: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        fa: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        fi: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        ka: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        kk: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        sq: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        ko: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        sv: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        km: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        st: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        si: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        so: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        sn: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        sl: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        ky: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        },
        sw: {
            query: {
                type: String
            },
            hover_text: {
                type: String
            },
            share_text: {
                type: String
            }
        }
    },
    high_res_height: {
        type: Number
    },
    high_res_url: {
        type: String
    },
    url: {
        type: String
    },
    alternate_url: {
        type: String
    },
    query: {
        type: String
    }
},
    { timestamps: true })

module.exports = mongoose.model('doodle', doddleSchema);