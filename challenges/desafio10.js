db.produtos.find({
    $and: [
        { "valoresNutricionais.3.percentual": { $gte: 30 } },
        { "valoresNutricionais.3.percentual": { $lte: 40 } },
    ],
}, { nome: 1, _id: 0 });