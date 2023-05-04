const arr = [
  {
    "id": 1,
    "name": "Бонсай лиственный",
    "link": "https://floristcenter.ru/image/cache/catalog/vgorshkah/Bonsajlistvennij20-800x800.jpg",
    "price": 2800
  },
  {
    "id": 2,
    "name": "Спатифиллум",
    "link": "https://www.ikea.com/ru/ru/images/products/spathiphyllum-spatifillum-rastenie-v-gorshke-spatifillum__0653998_pe708227_s5.jpg",
    "price": 300
  },
  {
    "id": 3,
    "name": "Хамедорея",
    "link": "https://cdn.lentochka.lenta.com/resample/500x500q90/photo/608257/3bcd9960-4b16-42a2-87a5-c1ebf3ded007.png",
    "price": 380
  },
  {
    "id": 4,
    "name": "Белая oрхидея",
    "link": "https://loft-concept.ru/upload/iblock/060/Loft_Concept_2.jpg",
    "price": 8800
  },
  {
    "id": 5,
    "name": "Фуксия",
    "link": "https://cdn-img.perekrestok.ru/i/1600x1600-fit/xdelivery/files/0e/e6/81139b95df047ff13fde4f862873.jpg",
    "price": 520
  },
  {
    "id": 6,
    "name": "Маранта",
    "link": "https://cdn.lentochka.lenta.com/resample/500x500q90/photo/240269/354a28ce-a7b5-4d55-ae6f-5f521b2c2a95.png",
    "price": 1400
  },
  {
    "id": 7,
    "name": "Антуриум Андрианум Чемпион",
    "link": "https://www.flowerbunker.ru/media/catalog/item/1000/97/Anturiumandrianumchempionbelyj1200.jpg",
    "price": 2199
  },
  {
    "id": 8,
    "name": "Пахира",
    "link": "https://sazhaemvsadu.ru/wp-content/uploads/2016/09/pahira-v-gorshke.jpg",
    "price": 2520
  },
  {
    "id": 9,
    "name": "Драцена Фрагранс Еллоу Коаст",
    "link": "https://mandarin-shop.ru/images/cms/data/draceni/dracena_elou/555.jpg",
    "price": 1962
  },
  {
    "id": 10,
    "name": "Юкка",
    "link": "https://cdn.leroymerlin.ru/lmru/image/upload/v1545755556/lmcode/CENo7I-v3UOz7M7hvmbypw/13534319.jpg",
    "price": 1700
  },
  {
    "id": 11,
    "name": "Роза Кордана Белая",
    "link": "https://miltoniya.ru/upload/resize_cache/webp/iblock/6ba/450_600_16902435c76152cdd4c59c10714d28712/6bac277a01ba0e63cac1d241ab9de4fe.webp",
    "price": 380
  },
  {
    "id": 12,
    "name": "Хлорофитум Бонни",
    "link": "https://luckygreen.ru/wa-data/public/shop/products/11/41/4111/images/10071/10071.650@2x.jpg",
    "price": 3800
  },
  {
    "id": 13,
    "name": "Суккулент",
    "link": "https://garda-opt.ru/upload/iblock/5fa/puabccw37v7q120lx5b3p8dop30i8a6b/TT-00001380_1.jpg",
    "price": 460
  },
  {
    "id": 14,
    "name": "Примула",
    "link": "https://cdn-img.perekrestok.ru/i/1600x1600-fit/xdelivery/files/9c/50/7afb35396b9cfaa0831b3358547f.jpg",
    "price": 1400
  },
  {
    "id": 15,
    "name": "Фикус Бенжамина Кинки в джуте",
    "link": "https://kashpo.store/image/cache/catalog/7c640cfd3c3311e98127005056be01ad_4e2558b0553c11e98128005056be01ad-auto_width_800.jpg",
    "price": 1450
  },
  {
    "id": 16,
    "name": "Фикус Гинсенг",
    "link": "https://avatars.mds.yandex.net/get-mpic/7396071/img_id8870772163520583144.jpeg/orig",
    "price": 3400
  }
]


const arr1 =
  [
    {
      "flowerId": 1,
      "name": "Бонсай лиственный",
      "link": "https://floristcenter.ru/image/cache/catalog/vgorshkah/Bonsajlistvennij20-800x800.jpg",
      "price": 2800
    },
    {
      "flowerId": 2,
      "name": "Спатифиллум",
      "link": "https://www.ikea.com/ru/ru/images/products/spathiphyllum-spatifillum-rastenie-v-gorshke-spatifillum__0653998_pe708227_s5.jpg",
      "price": 300
    },
    {
      "flowerId": 3,
      "name": "Хамедорея",
      "link": "https://cdn.lentochka.lenta.com/resample/500x500q90/photo/608257/3bcd9960-4b16-42a2-87a5-c1ebf3ded007.png",
      "price": 380
    },
    {
      "flowerId": 4,
      "name": "Белая oрхидея",
      "link": "https://loft-concept.ru/upload/iblock/060/Loft_Concept_2.jpg",
      "price": 8800
    },
    {
      "flowerId": 5,
      "name": "Фуксия",
      "link": "https://cdn-img.perekrestok.ru/i/1600x1600-fit/xdelivery/files/0e/e6/81139b95df047ff13fde4f862873.jpg",
      "price": 520
    },
    {
      "flowerId": 6,
      "name": "Маранта",
      "link": "https://cdn.lentochka.lenta.com/resample/500x500q90/photo/240269/354a28ce-a7b5-4d55-ae6f-5f521b2c2a95.png",
      "price": 1400
    },
    {
      "flowerId": 7,
      "name": "Антуриум Андрианум Чемпион",
      "link": "https://www.flowerbunker.ru/media/catalog/item/1000/97/Anturiumandrianumchempionbelyj1200.jpg",
      "price": 2199
    },
    {
      "flowerId": 8,
      "name": "Пахира",
      "link": "https://sazhaemvsadu.ru/wp-content/uploads/2016/09/pahira-v-gorshke.jpg",
      "price": 2520
    },
    {
      "flowerId": 9,
      "name": "Драцена Фрагранс Еллоу Коаст",
      "link": "https://mandarin-shop.ru/images/cms/data/draceni/dracena_elou/555.jpg",
      "price": 1962
    },
    {
      "flowerId": 10,
      "name": "Юкка",
      "link": "https://cdn.leroymerlin.ru/lmru/image/upload/v1545755556/lmcode/CENo7I-v3UOz7M7hvmbypw/13534319.jpg",
      "price": 1700
    },
    {
      "flowerId": 11,
      "name": "Роза Кордана Белая",
      "link": "https://miltoniya.ru/upload/resize_cache/webp/iblock/6ba/450_600_16902435c76152cdd4c59c10714d28712/6bac277a01ba0e63cac1d241ab9de4fe.webp",
      "price": 380
    },
    {
      "flowerId": 12,
      "name": "Хлорофитум Бонни",
      "link": "https://luckygreen.ru/wa-data/public/shop/products/11/41/4111/images/10071/10071.650@2x.jpg",
      "price": 3800
    },
    {
      "flowerId": 13,
      "name": "Суккулент",
      "link": "https://garda-opt.ru/upload/iblock/5fa/puabccw37v7q120lx5b3p8dop30i8a6b/TT-00001380_1.jpg",
      "price": 460
    },
    {
      "flowerId": 14,
      "name": "Примула",
      "link": "https://cdn-img.perekrestok.ru/i/1600x1600-fit/xdelivery/files/9c/50/7afb35396b9cfaa0831b3358547f.jpg",
      "price": 1400
    },
    {
      "flowerId": 15,
      "name": "Фикус Бенжамина Кинки в джуте",
      "link": "https://kashpo.store/image/cache/catalog/7c640cfd3c3311e98127005056be01ad_4e2558b0553c11e98128005056be01ad-auto_width_800.jpg",
      "price": 1450
    },
    {
      "flowerId": 16,
      "name": "Фикус Гинсенг",
      "link": "https://avatars.mds.yandex.net/get-mpic/7396071/img_id8870772163520583144.jpeg/orig",
      "price": 3400
    }
  ]

const arr2 =
  [
    {
      "flowerId": "1",
      "name": "Бонсай лиственный",
      "link": "https://floristcenter.ru/image/cache/catalog/vgorshkah/Bonsajlistvennij20-800x800.jpg",
      "price": 2800
    },
    {
      "flowerId": "2",
      "name": "Спатифиллум",
      "link": "https://www.ikea.com/ru/ru/images/products/spathiphyllum-spatifillum-rastenie-v-gorshke-spatifillum__0653998_pe708227_s5.jpg",
      "price": 300
    },
    {
      "flowerId": "3",
      "name": "Хамедорея",
      "link": "https://cdn.lentochka.lenta.com/resample/500x500q90/photo/608257/3bcd9960-4b16-42a2-87a5-c1ebf3ded007.png",
      "price": 380
    },
    {
      "flowerId": "4",
      "name": "Белая oрхидея",
      "link": "https://loft-concept.ru/upload/iblock/060/Loft_Concept_2.jpg",
      "price": 8800
    },
    {
      "flowerId": "5",
      "name": "Фуксия",
      "link": "https://cdn-img.perekrestok.ru/i/1600x1600-fit/xdelivery/files/0e/e6/81139b95df047ff13fde4f862873.jpg",
      "price": 520
    },
    {
      "flowerId": "6",
      "name": "Маранта",
      "link": "https://cdn.lentochka.lenta.com/resample/500x500q90/photo/240269/354a28ce-a7b5-4d55-ae6f-5f521b2c2a95.png",
      "price": 1400
    },
    {
      "flowerId": "7",
      "name": "Антуриум Андрианум Чемпион",
      "link": "https://www.flowerbunker.ru/media/catalog/item/1000/97/Anturiumandrianumchempionbelyj1200.jpg",
      "price": 2199
    },
    {
      "flowerId": "8",
      "name": "Пахира",
      "link": "https://sazhaemvsadu.ru/wp-content/uploads/2016/09/pahira-v-gorshke.jpg",
      "price": 2520
    },
    {
      "flowerId": "9",
      "name": "Драцена Фрагранс Еллоу Коаст",
      "link": "https://mandarin-shop.ru/images/cms/data/draceni/dracena_elou/555.jpg",
      "price": 1962
    },
    {
      "flowerId": "10",
      "name": "Юкка",
      "link": "https://cdn.leroymerlin.ru/lmru/image/upload/v1545755556/lmcode/CENo7I-v3UOz7M7hvmbypw/13534319.jpg",
      "price": 1700
    },
    {
      "flowerId": "11",
      "name": "Роза Кордана Белая",
      "link": "https://miltoniya.ru/upload/resize_cache/webp/iblock/6ba/450_600_16902435c76152cdd4c59c10714d28712/6bac277a01ba0e63cac1d241ab9de4fe.webp",
      "price": 380
    },
    {
      "flowerId": "12",
      "name": "Хлорофитум Бонни",
      "link": "https://luckygreen.ru/wa-data/public/shop/products/11/41/4111/images/10071/10071.650@2x.jpg",
      "price": 3800
    },
    {
      "flowerId": "13",
      "name": "Суккулент",
      "link": "https://garda-opt.ru/upload/iblock/5fa/puabccw37v7q120lx5b3p8dop30i8a6b/TT-00001380_1.jpg",
      "price": 460
    },
    {
      "flowerId": "14",
      "name": "Примула",
      "link": "https://cdn-img.perekrestok.ru/i/1600x1600-fit/xdelivery/files/9c/50/7afb35396b9cfaa0831b3358547f.jpg",
      "price": 1400
    },
    {
      "flowerId": "15",
      "name": "Фикус Бенжамина Кинки в джуте",
      "link": "https://kashpo.store/image/cache/catalog/7c640cfd3c3311e98127005056be01ad_4e2558b0553c11e98128005056be01ad-auto_width_800.jpg",
      "price": 1450
    },
    {
      "flowerId": "16",
      "name": "Фикус Гинсенг",
      "link": "https://avatars.mds.yandex.net/get-mpic/7396071/img_id8870772163520583144.jpeg/orig",
      "price": 3400
    }
  ]
