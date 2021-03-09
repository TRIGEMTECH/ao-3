
function getTooltip(id='', color='', showCreate=false){

    let tip = ''

    switch(id) 
    {
        case 'red': 
            if (color != 'red' || !showCreate){
                tip='Create red card';
                }
        break;

        case 'yellow':
            if (color != 'yellow' || !showCreate){
                tip='Create yellow card';
                }
        break;

        case 'green':
            if (color != 'green' || !showCreate){
                tip='Create green card';
                }
        break;

        case 'purple':
            if (color != 'purple' || !showCreate){
                tip='Create purple card';
                }
        break;

        case 'blue':
            if (color != 'blue' || !showCreate){
                tip='Create blue card';
                }
        break;
    }

    if (tip == '' && showCreate){
        tip='Exit create card';
        }

    return tip
}

function getTooltipColor(id='', color='', showCreate=false, stacks=0){

    let tipColor = ''

    // rgba color definitions are muted versions of existing card colors

    switch(id) 
    {
        case 'red':
            if (color != 'red' || !showCreate){
                tipColor = 'rgba(255,179,177,.5)'}
            else if (color == 'red' && showCreate && stacks == 1){
                tipColor = 'rgba(251,248,248,.5)'}            
        break;

        case 'yellow':
            if (color != 'yellow' || !showCreate){
                tipColor = 'rgba(255,255,153,.5)'}
            else if (color != 'yellow' && showCreate && stacks == 1){
                tipColor = 'rgba(251,248,248,.5)'}
        break;

        case 'green':
            if (color != 'green' || !showCreate){
                tipColor = 'rgba(179,255,179,.5)'
                if (color != 'green' && showCreate && stacks == 1){
                    tipColor = 'rgba(251,248,248,.5)'}
                }
        break;

        case 'purple':
            if (color != 'purple' || !showCreate){
                tipColor = 'rgba(179,158,247,.5)'
                if (color != 'purple' && showCreate && stacks == 1){
                    tipColor = 'rgba(251,248,248,.5)'}
                }
        break;

        case 'blue':
            if (color != 'blue' || !showCreate){
                tipColor = 'rgba(121,174,255,.5)'
                if (color != 'blue' && showCreate && stacks == 1){
                    tipColor = 'rgba(251,248,248,.5)'}
                }
        break;
    }

    return tipColor
}

module.exports = {
  getTooltip,
  getTooltipColor,
}