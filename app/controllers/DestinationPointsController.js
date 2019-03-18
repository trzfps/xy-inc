const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GenericHelper = require('../Helpers/GenericHelper')
const modelDestination = mongoose.model('Destination');
class DestinationController {
    addPOI(req, res) {
        let {NomePoi, cordX, cordY } = req.body;
        modelDestination.findOne({'nomePoi' : NomePoi})
            .then(poi => {
                if(poi){
                    res.send('POI ja registrado');
                    return;
                }
                let newPoi = new modelDestination({
                    nomePoi: NomePoi,
                    cordX: cordX,
                    cordY: cordY
                });
                newPoi.save()
                    .then(() => res.send('POI adicionada com sucesso'))
                    .catch((err) => res.send(err))
            })

    }
    getPOI(req, res){
       modelDestination.find()
       .then(result => {
           res.send(result)
       })
       .catch(err => {
           res.send(err)
       })
    }
    POIsPorProximidade(req,res){
        let {cordX, cordY } = req.body;
        modelDestination.find()
        .then(result => {
            var PoisMaisProximas = [];
            var distanciaMaxima = 10
            result.map((item) =>{
                var dist = GenericHelper.distanceCalculate(cordX, cordY, item.cordX, item.cordY)
                if(dist < distanciaMaxima){
                    PoisMaisProximas.push(item)
                }
            })
            res.send(PoisMaisProximas);
        })
        
    }
}
module.exports = new DestinationController();