const fs = require('fs-extra');
const sharp = require('sharp');
const path = require('path');

const data =[
    {
        "ID": 47,
        "name_es": "Tripack 3 x 80g",
        "key": "uzck6ldp9a1o5b2wiueoqcz89c9e",
        "content_type": "image/gif"
    },
    {
        "ID": 18,
        "name_es": "Barra de 500g",
        "key": "7k268qoq11saghpnq51lpkz31jqv",
        "content_type": "image/gif"
    },
    {
        "ID": 19,
        "name_es": "Barra de 1000g",
        "key": "0zletr9rk0d7l5h2ppeponerfl1c",
        "content_type": "image/gif"
    },
    {
        "ID": 14,
        "name_es": "Pan de 60g",
        "key": "yo1r2jz0gvitq70hg5bzgkahbs34",
        "content_type": "image/gif"
    },
    {
        "ID": 22,
        "name_es": "Pack de 5 x 180g",
        "key": "9f8teh6ipu2faock1p3zorqy5hpa",
        "content_type": "image/gif"
    },
    {
        "ID": 61,
        "name_es": "Botella 500ml",
        "key": "0cwccicu4fxfsf8d9dknxsk92ezg",
        "content_type": "image/gif"
    },
    {
        "ID": 32,
        "name_es": "Pack de 15 x 25g",
        "key": "egcp5e7k78oht7zvgfmyj0xs54tm",
        "content_type": "image/gif"
    },
    {
        "ID": 31,
        "name_es": "Bidón de 10L",
        "key": "6ii8zfh7bhy3by4ddvbu2qi2dbnh",
        "content_type": "image/jpeg"
    },
    {
        "ID": 35,
        "name_es": "Sachet 70ml",
        "key": "5t5dbhyvv6loh9e2ctojtz0idnrn",
        "content_type": "image/jpeg"
    },
    {
        "ID": 33,
        "name_es": "Doypack 1600ml",
        "key": "vpf6xs6srl0m04dxsepfp77g8x49",
        "content_type": "image/jpeg"
    },
    {
        "ID": 56,
        "name_es": "Doypack 900ml",
        "key": "jv0ggqsfwltxz4do6jzghmqllk4k",
        "content_type": "image/jpeg"
    },
    {
        "ID": 1,
        "name_es": "Bidón de 4L",
        "key": "uxe3u7g1z1qnvdg9mdon59zaybwk",
        "content_type": "image/jpeg"
    },
    {
        "ID": 5,
        "name_es": "Bolsa de 600g",
        "key": "0yusl8arxtv69ze9l6fcrq4wwsfa",
        "content_type": "image/jpeg"
    },
    {
        "ID": 11,
        "name_es": "Bolsa de 150g",
        "key": "yy0t37m0qslw8ih5t8q91m676xm4",
        "content_type": "image/jpeg"
    },
    {
        "ID": 12,
        "name_es": "Bolsa de 1Kg",
        "key": "py92vkpwbhet3abumtmi9aefz9ed",
        "content_type": "image/jpeg"
    },
    {
        "ID": 8,
        "name_es": "Bolsa de 3,4Kg",
        "key": "mvxnvc2do3rwcvo3hmrzxj1wnzgq",
        "content_type": "image/jpeg"
    },
    {
        "ID": 13,
        "name_es": "Bolsa de 3Kg",
        "key": "le2zx8iv9wane4g2oi4ie6weeur8",
        "content_type": "image/jpeg"
    },
    {
        "ID": 49,
        "name_es": "Rollo x 100 Unidades",
        "key": "3sg18sjlacvgueri0hrh879zhdfb",
        "content_type": "image/jpeg"
    },
    {
        "ID": 50,
        "name_es": "Rollo x 30 Unidades",
        "key": "vce2yqh4yyy8jbu0g9v0f3taxoh2",
        "content_type": "image/jpeg"
    },
    {
        "ID": 9,
        "name_es": "Bolsa de 5Kg",
        "key": "bj3v23d7yuet6lkodvimr1469w23",
        "content_type": "image/jpeg"
    },
    {
        "ID": 62,
        "name_es": "Botella 500ml.",
        "key": "4w8xm96rz6ec31qrpskit2vhzllp",
        "content_type": "image/gif"
    },
    {
        "ID": 17,
        "name_es": "Pack 10 x 40g",
        "key": "hgay1zcesna1x82pm3vtnkti9w9y",
        "content_type": "image/gif"
    },
    {
        "ID": 63,
        "name_es": "Bolsa de 400g.",
        "key": "5qb7bmf16y05nogdms15a8nkwdkg",
        "content_type": "image/gif"
    },
    {
        "ID": 44,
        "name_es": "Pack surtido 20 x 10g",
        "key": "9ynza7cbkcq4l1qi9k27wau3te3d",
        "content_type": "image/gif"
    },
    {
        "ID": 30,
        "name_es": "Pack de 20 x 180g",
        "key": "6jd3xfpxddlw0z4mc9iefsw1ygo1",
        "content_type": "image/jpeg"
    },
    {
        "ID": 48,
        "name_es": "1 Unidad",
        "key": "lkmquw8oeym13qskfkyzlz5z86u1",
        "content_type": "image/jpeg"
    },
    {
        "ID": 52,
        "name_es": "Bolsa de 150L",
        "key": "2bta248s69sjd3157iqjvz8t1r1n",
        "content_type": "image/jpeg"
    },
    {
        "ID": 53,
        "name_es": "Bolsa de 200L",
        "key": "d1p9z3xkjo27z3tql3zh09tojcqg",
        "content_type": "image/jpeg"
    },
    {
        "ID": 27,
        "name_es": "Botella 900ml",
        "key": "gkdadlxqafkof1vw1f6mg0tl67qy",
        "content_type": "image/jpeg"
    },
    {
        "ID": 51,
        "name_es": "Bolsa de 100L",
        "key": "qlypsrx6s5fvldfmh41hanpf6v8g",
        "content_type": "image/jpeg"
    },
    {
        "ID": 37,
        "name_es": "Doypack 2L",
        "key": "slch8anp0ffvzyxxb3hrjb3iuuhk",
        "content_type": "image/jpeg"
    },
    {
        "ID": 26,
        "name_es": "Bidón de 5L",
        "key": "8plxs6uessskq36o1igneh9icf90",
        "content_type": "image/jpeg"
    },
    {
        "ID": 40,
        "name_es": "Pastilla 130g",
        "key": "1bm2056n9h563v7tapgopn271pa1",
        "content_type": "image/gif"
    },
    {
        "ID": 41,
        "name_es": "Pastilla 85g",
        "key": "a2ffw6sorymn4rvafkkcr68h2bqf",
        "content_type": "image/gif"
    },
    {
        "ID": 38,
        "name_es": "Tripack 3 x 130g",
        "key": "2s2xvlleiczgv810m4e0un7ny070",
        "content_type": "image/gif"
    },
    {
        "ID": 58,
        "name_es": "Pack surtido 25 x 10g",
        "key": "xjnqlnamt674rhrjsdhixj0olug3",
        "content_type": "image/gif"
    },
    {
        "ID": 2,
        "name_es": "Bolsa de 80g",
        "key": "ak7dhedrc62ql0shba74eua6qp8m",
        "content_type": "image/gif"
    },
    {
        "ID": 3,
        "name_es": "Bolsa de 200g",
        "key": "u60af218zj1yvsexycc7n7aqv1w7",
        "content_type": "image/gif"
    },
    {
        "ID": 4,
        "name_es": "Bolsa de 400g",
        "key": "v5gkkkh2lcz7aswg7axrvffsf3iq",
        "content_type": "image/gif"
    },
    {
        "ID": 6,
        "name_es": "Bolsa de 800g",
        "key": "shau7nf1i2hxfxo8e0yl297lga1b",
        "content_type": "image/gif"
    },
    {
        "ID": 7,
        "name_es": "Bolsa de 2Kg",
        "key": "2gibo1gijjcca89i7mmrc1i115s7",
        "content_type": "image/gif"
    },
    {
        "ID": 10,
        "name_es": "Bolsa de 10Kg",
        "key": "dasrvf56520n30zklg30fomye18h",
        "content_type": "image/gif"
    },
    {
        "ID": 34,
        "name_es": "Doypack 450ml",
        "key": "o54dpsjb66p80ofoc4ypmof21do0",
        "content_type": "image/gif"
    },
    {
        "ID": 28,
        "name_es": "Botella Suav. 500ml",
        "key": "bzuc947woqfmn7ym3n8xssrbz8yw",
        "content_type": "image/gif"
    },
    {
        "ID": 36,
        "name_es": "Botella 1.5L",
        "key": "f7d8ttzurmpr52wm5b8jrdjy4zc6",
        "content_type": "image/gif"
    },
    {
        "ID": 15,
        "name_es": "Pan de 100g",
        "key": "bhmaebwttv6qoecu0npqu9wd1xhc",
        "content_type": "image/gif"
    },
    {
        "ID": 21,
        "name_es": "Pan de 130g",
        "key": "vgpgmucpymry16aogz7v9gjjq6nt",
        "content_type": "image/gif"
    },
    {
        "ID": 20,
        "name_es": "Pan de 180g",
        "key": "6n2zt5h1zatfncxddxxveiogiwye",
        "content_type": "image/gif"
    },
    {
        "ID": 16,
        "name_es": "Pan de 200g",
        "key": "gv79qjivy7mfd7fpx3xa2ab5ta3u",
        "content_type": "image/gif"
    },
    {
        "ID": 24,
        "name_es": "Pan de 230g",
        "key": "x5mwuq6dxvkqjmi4zu95ln2z26te",
        "content_type": "image/gif"
    },
    {
        "ID": 23,
        "name_es": "Pan de 250g",
        "key": "79lh0yp2k1dem8ha06d09sc1yw0q",
        "content_type": "image/gif"
    },
    {
        "ID": 54,
        "name_es": "Caja 30 x 60g",
        "key": "d19ywm113xh9nert9pb8ode25qpx",
        "content_type": "image/gif"
    },
    {
        "ID": 60,
        "name_es": "Caja de 20 x 180g",
        "key": "ha99a858pmst69w7n1t6p6zkxwya",
        "content_type": "image/gif"
    },
    {
        "ID": 59,
        "name_es": "Caja de 20 x 250g",
        "key": "gno3edxb71xodynlk4f1kx5a3zsm",
        "content_type": "image/gif"
    },
    {
        "ID": 55,
        "name_es": "Caja de 20 x 200g",
        "key": "r64thul4d7txl4yc4ps88ll4s9i3",
        "content_type": "image/gif"
    },
    {
        "ID": 29,
        "name_es": "Caja de 20 x 300g",
        "key": "jmi6ak1zei1om3glcea3n8cejaae",
        "content_type": "image/gif"
    },
    {
        "ID": 46,
        "name_es": "Caja de 300 x 20g",
        "key": "s5q0fe6th925smrs1od1r350qaat",
        "content_type": "image/gif"
    },
    {
        "ID": 57,
        "name_es": "Caja de 250 x 25g",
        "key": "gtv68ee20proj12ahhecnzpfk8bb",
        "content_type": "image/gif"
    },
    {
        "ID": 39,
        "name_es": "Caja de 500 x 10g",
        "key": "a9eyg0nkcqni0557g9nigm0ljhtb",
        "content_type": "image/gif"
    },
    {
        "ID": 42,
        "name_es": "Pastilla 25g",
        "key": "3akd8na7qo7ibq0xiilehqdhm1nf",
        "content_type": "image/gif"
    },
    {
        "ID": 43,
        "name_es": "Pastilla 100g",
        "key": "wfitwttv4pspcoioor8vr7oxuffg",
        "content_type": "image/gif"
    },
    {
        "ID": 45,
        "name_es": "Pastilla 125g",
        "key": "awcautkqhoptgsun29zqt6muiahp",
        "content_type": "image/gif"
    },
    {
        "ID": 67,
        "name_es": "Doypack 200ml",
        "key": "m73v0y1fby7rilh12dtkntngl51i",
        "content_type": "image/jpeg"
    },
    {
        "ID": 65,
        "name_es": "Estuche de 100 g",
        "key": "qguh8s1cqmg5o7659vzrqgao18g5",
        "content_type": "image/gif"
    },
    {
        "ID": 64,
        "name_es": "Estuche de 125g",
        "key": "b9das8zkjwph6wegy64yzb2bydet",
        "content_type": "image/gif"
    },
    {
        "ID": 68,
        "name_es": "Doypack 400ml",
        "key": "68ahnbx6o2zxh66r7rh02cj7wsqt",
        "content_type": "image/gif"
    },
    {
        "ID": 69,
        "name_es": "Doypack 800ml",
        "key": "mg8q3copl0v7upxl5ibiyqmp4366",
        "content_type": "image/jpeg"
    },
    {
        "ID": 70,
        "name_es": "Doypack 500ml",
        "key": "uo6u3d9otu3mzriyrrphdi9hgill",
        "content_type": "image/gif"
    },
    {
        "ID": 66,
        "name_es": "Sachet 1600ml",
        "key": "co3uzkylt8iyg8eq7ic371pmxcjp",
        "content_type": "image/jpeg"
    },
    {
        "ID": 71,
        "name_es": "KIT",
        "key": "5lzz2xteefh4a6yy1lrthscx36vd",
        "content_type": "image/jpeg"
    },
    {
        "ID": 72,
        "name_es": "Caja de 20 x 150g",
        "key": "k9y4cqk2vm4hcos2z79lm6euyi3i",
        "content_type": "image/gif"
    },
    {
        "ID": 73,
        "name_es": "Pastilla 90g",
        "key": "qu6919r63nw5d4bpfs34xwpfcwin",
        "content_type": "image/gif"
    },
    {
        "ID": 74,
        "name_es": "Pack Promocional 1400ml",
        "key": "40133r8t7fjxblvwcpsnqblqhg9j",
        "content_type": "image/jpeg"
    }
]


// Ruta de la carpeta storage
const storagePath = './storage';

// Ruta de la carpeta donde se guardarán las imágenes convertidas
const outputPath = './imagenes';

// Función para procesar los archivos según el array de datos
async function processFiles() {
    for (const item of data) {
        console.log(item)
        const key = item.key;
        console.log(key)
        const subdirectory1 = key.slice(0, 2);
        const subdirectory2 = key.slice(2, 4);
        const filename = `${item.name_es}.png`;

        const sourceFilePath = path.join(storagePath, subdirectory1, subdirectory2, key);
        console.log(sourceFilePath)
        const destinationFilePath = path.join(outputPath, filename);

        // Verificar si el archivo existe en la carpeta de almacenamiento
        if (await fs.pathExists(sourceFilePath)) {
            // Asegurarse de que la carpeta de destino exista
            await fs.ensureDir(path.dirname(destinationFilePath));

            // Procesar y copiar el archivo como una imagen PNG
            await sharp(sourceFilePath)
               // .resize(1000, 1000) // Cambia el tamaño según lo necesites
                .toFile(destinationFilePath);

            console.log(`Imagen ${key} procesada y guardada como ${filename}`);
        } else {
            console.log(`No se encontró el archivo para ${key}.`);
        }
    }
}

// Llamar a la función para iniciar el procesamiento
processFiles();