import data0 from '../files/[1997]Transpiração_Contínua_Prolongada/data.js';
import data1 from "../files/[2004]Tamo_ai_na_Atividade/data.js"

var dataIndex = new Array(data0, data1)

import {lerPlaylist} from './programa.js'

if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', pronto)
}else{pronto()}
  
function pronto(){
    for(var i = 0; i < dataIndex.length; i++) {
        var indiceDataIndex = dataIndex[i]
        lerPlaylist(indiceDataIndex)
    }; 
}
