const fs=document.getElementById("file");
fs.addEventListener("change",function(){
    document.getElementById("upload-text").innerText="Loading..."
	document.getElementById("script").innerText=""
    const n=new FileReader;
    n.addEventListener("load",()=>{
        customBlocks=[]
        var data=JSON.parse(n.result);
        data.abilities.forEach((e)=>{
            if (e.hasOwnProperty("name"))customBlocks.push(e)
        })
        console.time("time to convert")
	    convertData(data);
        console.timeEnd("time to convert")
        console.time("time to display")
        document.getElementById("script").innerText=result
		document.querySelector(".scriptArea").style.display="inline"
        console.timeEnd("time to display")
		document.getElementById("upload-text").innerText="Upload Hopscotch Project"
        document.getElementById("legend").innerText=`Project UUID: ${data.uuid}, Player: ${data.playerVersion}, Requires Advanced Mode: ${data.requires_beta_editor}`
        console.log(`# of characters: ${result.length}`)
    });
    n.readAsText(this.files[0])
});
var regex=/^-?([0-9]*\.)?([0-9]+e[+-]?)?[0-9]+$/,result,customBlocks,params,ops=[{"id":4004,"type":"math.random"},{"id":4006,"type":"math.sqrt"},{"id":4007,"type":"sin"},{"id":4008,"type":"cos"},{"id":4009,"type":"round"},{"id":4010,"type":"abs"},{"id":4012,"type":"tan"},{"id":4013,"type":"arcsin"},{"id":4014,"type":"arccos"},{"id":4015,"type":"arctan"},{"id":4016,"type":"max"},{"id":4017,"type":"min"},{"id":4018,"type":"floor"},{"id":4019,"type":"ceil"},{"id":9000,"type":"char_at_index"},{"id":9001,"type":"chars_in_range"},{"id":9002,"type":"length"},{"id":9003,"type":"join"}],traitTypes=[{"id":8000,"type":"object"},{"id":8001,"type":"any_object"},{"id":8002,"type":"edge"},{"id":8003,"type":"device"},{"id":8004,"type":"self"},{"id":8005,"type":"original_object"}],events=[{"id":7000,"type":"game_starts"},{"id":7021,"type":"game_is_playing"},{"id":7001,"type":"is_tapped"},{"id":7003,"type":"is_pressed"},{"id":7020,"type":"is_not_pressed"},{"id":7022,"type":"touch_ends"},{"id":7023,"type":"i_get_a_message"},{"id":7024,"type":"message.match"},{"id":7008,"type":"device.hears_noise"},{"id":7009,"type":"device.is_shaken"},{"id":7011,"type":"is_swiped_right"},{"id":7012,"type":"is_swiped_left"},{"id":7013,"type":"is_swiped_up"},{"id":7014,"type":"is_swiped_down"},{"id":7016,"type":"device.is_tilted_right"},{"id":7017,"type":"device.is_tilted_left"},{"id":7018,"type":"device.is_tilted_up"},{"id":7019,"type":"device.is_tilted_down"},{"id":1010,"type":"flipped"},{"id":7015,"type":"cloned"},{"id":7010,"type":"bumps"},{"id":7002,"type":"is_touching"},{"id":7025,"type":"is_not_touching"}],HSBlocks=[{"id":19,"type":"wait_til_timestamp"},{"id":23,"type":"move_forward"},{"id":24,"type":"turn"},{"id":41,"type":"set_position"},{"id":50,"type":"flip"},{"id":27,"type":"change_x"},{"id":28,"type":"change_y"},{"id":34,"type":"set_speed"},{"id":39,"type":"set_angle"},{"id":59,"type":"set_origin"},{"id":70,"type":"set_background"},{"id":54,"type":"set_color"},{"id":56,"type":"set_image"},{"id":40,"type":"set_text"},{"id":51,"type":"set_size"},{"id":57,"type":"set_width_and_height"},{"id":48,"type":"grow"},{"id":49,"type":"shrink"},{"id":62,"type":"start_sound"},{"id":52,"type":"start_sound_ms"},{"id":47,"type":"set_invisibility"},{"id":43,"type":"bring_to_front"},{"id":42,"type":"send_to_back"},{"id":33,"type":"change_pose"},{"id":58,"type":"set_z_index"},{"id":66,"type":"set_tempo"},{"id":67,"type":"set_instrument"},{"id":65,"type":"play_note"},{"id":72,"type":"alert"},{"id":64,"type":"set_text_to_input"},{"id":32,"type":"set_trail_color"},{"id":31,"type":"set_trail_width"},{"id":73,"type":"set_trail_opacity"},{"id":71,"type":"set_trail_cap"},{"id":30,"type":"clear"},{"id":61,"type":"wait"},{"id":35,"type":"wait_ms"},{"id":53,"type":"clone_object"},{"id":55,"type":"destroy"},{"id":68,"type":"open_project"},{"id":125,"type":"change_scene"},{"id":126,"type":"broadcast_message"},{"id":127,"type":"request_seeds"},{"id":29,"type":"scale"},{"id":36,"type":"set_opacity"},{"id":22,"type":"comment"},{"id":37,"type":"pen_up"},{"id":38,"type":"pen_down"}],chars=[{"id":0,"type":"monkey"},{"id":1,"type":"text"},{"id":2,"type":"octopus"},{"id":3,"type":"gorilla"},{"id":4,"type":"cupcake"},{"id":5,"type":"bear"},{"id":6,"type":"dino"},{"id":7,"type":"frog"},{"id":8,"type":"jody"},{"id":9,"type":"mr_mustache"},{"id":10,"type":"space_pod"},{"id":11,"type":"zombear"},{"id":12,"type":"ghoulopus"},{"id":13,"type":"bats"},{"id":14,"type":"frankenrilla"},{"id":15,"type":"witch_jody"},{"id":16,"type":"cauldron"},{"id":17,"type":"pumpkin"},{"id":18,"type":"broom"},{"id":3002,"type":"lantern"},{"id":20,"type":"parrot"},{"id":21,"type":"mandrill"},{"id":22,"type":"mosquito"},{"id":23,"type":"miss_chief"},{"id":24,"type":"venus"},{"id":25,"type":"jeepers"},{"id":26,"type":"banyan"},{"id":27,"type":"star_girl"},{"id":28,"type":"cosmic_cody"},{"id":29,"type":"chillanna"},{"id":30,"type":"robo"},{"id":31,"type":"raccoon"},{"id":32,"type":"bird"},{"id":58,"type":"toucan"},{"id":59,"type":"anteater"},{"id":3001,"type":"crocodile"},{"id":61,"type":"sloth"},{"id":62,"type":"iguana"},{"id":63,"type":"hut"},{"id":64,"type":"penguin"},{"id":65,"type":"queen_ana"},{"id":66,"type":"yeti"},{"id":67,"type":"deer"},{"id":68,"type":"elf"},{"id":69,"type":"snow_globe"},{"id":70,"type":"polar_bear"},{"id":71,"type":"sleigh"},{"id":72,"type":"mistletoe"},{"id":73,"type":"gonzalo"},{"id":74,"type":"snowflake"},{"id":75,"type":"tiger"},{"id":76,"type":"bunny_girl"},{"id":77,"type":"baby_alien"},{"id":78,"type":"elephant"},{"id":79,"type":"airship"},{"id":80,"type":"car"},{"id":81,"type":"fountain"},{"id":82,"type":"oak_tree"},{"id":83,"type":"monster_cat"},{"id":84,"type":"grandpa"},{"id":85,"type":"potato"},{"id":86,"type":"poncho"},{"id":87,"type":"cat"},{"id":153,"type":"heart"},{"id":155,"type":"arch"},{"id":156,"type":"squiggle"},{"id":154,"type":"star"},{"id":163,"type":"parallelogram"},{"id":112,"type":"donut"},{"id":160,"type":"fan"},{"id":102,"type":"circle"},{"id":101,"type":"square"},{"id":150,"type":"hexagon"},{"id":151,"type":"triangle"},{"id":105,"type":"right_triangle"},{"id":152,"type":"rectangle"},{"id":157,"type":"z_block"},{"id":158,"type":"t_block"},{"id":159,"type":"l_block"},{"id":116,"type":"corner"},{"id":117,"type":"flower"},{"id":119,"type":"squished_box"},{"id":162,"type":"bead"},{"id":164,"type":"chevron"},{"id":125,"type":"x"},{"id":126,"type":"tetris_line"},{"id":120,"type":"rounded_right_triangle"},{"id":161,"type":"rounded_arrow"},{"id":100,"type":"rounded_square"},{"id":110,"type":"tilted_rectangle"}]
function convertData(a){
	result=""
    indent=""
    result+="# Custom Rules\n"
    a.customRules.forEach((e)=>{
        result+=`rule "${e.name}"=(`
        result+=getCustomParams(e),result+=") {\n"
        result+=getRules(e,indent,a)
        result+="}\n"
    });
	result+="\n"
    indent=""
    result+="# Abilities\n"
    customBlocks.forEach((e)=>{
        result+=`ability "${e.name}"=(`
        if(e.hasOwnProperty("parameters"))result+=getCustomParams(e)
        result+=") {\n"
        if(e.hasOwnProperty("blocks"))result+=getBlocks(e,a,indent)
        result+="}\n"
    });
    indent=""
    result+="------------------------------------------------------------------------\n"
    a.scenes.forEach((e)=>{
        result+=`scene "${convertToString(e.name)}" {\n`
        indent="\t",getObjectsFrom(e.objects,a,indent)
        result+="}\n"
    });
    return result
}
function getCustomParams(e){
    var a=""
    e.parameters.forEach((f,i)=>{
        a+=`"${convertToString(f.key)}"`
        if(f.value){
            a+=":",m=f.value.match(regex)
            if(m)a+=f.value
            else a+=`"${convertToString(f.value)}"`
        }
        a+=(i==(e.parameters.length-1))?"":","
    });
    return a
}
function getObjectsFrom(obj,data,indent){
    obj.forEach((f)=>{
        getObject(f,data,indent)
        result+=indent+objCode
        result+=indent+"}\n"
    })
}
function getObject(id,data,indent){
    var obj1=data.objects.find((g)=>g.objectID==id)
	console.log(obj1.type)
    objCode=`object "${convertToString(obj1.name)}"=(type:${chars.find((type)=>type.id==obj1.type).type},${((obj1.type==2000)?(`image:"${obj1.filename}",`):"")}${((obj1.type==1)?(`text:"${obj1.text}",`):"")}x:${obj1.xPosition},y:${obj1.yPosition}`
	if(obj1.hasOwnProperty("rotation"))objCode+=`,angle:${obj1.rotation}`
	objCode+=") {\n"
    var b=data.abilities.find((a)=>a.abilityID==obj1.abilityID)
    if(b)objCode+=getBlocks(b,data,indent)
	objCode+=getRules(obj1,indent,data)
    return objCode
}
function getRules(e,indent,a){
    indent+="\t"
    var whens=""
    e.rules.forEach((h)=>{
        var CRI=a.customRuleInstances.find((custom)=>custom.id==h)
        if(CRI) {
            var customRule=a.customRules.find((custom1)=>custom1.id==CRI.customRuleID)
            whens+=indent+`rule "${convertToString(customRule.name)}" (${getParameters(CRI,a)})\n`
        } else {
            var rule=a.rules.find((r)=>r.id==h)
            whens+=indent+`when ${getEvent(rule,rule.parameters[0],a)} {\n${findAbility(rule.abilityID,a,indent)+indent}}\n`
        }
    });
    return whens
}
function getEvent(r,ruleParam,data){
    if(ruleParam.hasOwnProperty("datum")){
        var event=events.find((a)=>a.id==ruleParam.datum.type)
        if(event){
            if(ruleParam.datum.hasOwnProperty("params")){
                var eventParams
                if(event.id==7002||event.id==7010||event.id==7025){
                    eventParams=getEventParams(ruleParam.datum,data)
                    return eventParams[0]+" "+event.type+" "+eventParams[1]
                }
                else if(event.id!=7023&&event.id!=7024){
                    eventParams=getEventParams(ruleParam.datum,data)
                    return `${eventParams[0]}.${event.type}`
                }
                else {
                    return event.type+`(${getParamType(r,ruleParam.datum.params[0],data,0)})`
                }
            } else
            return event.type
        }
        else return o="",`(${getConditionalParams(ruleParam.datum,o,data)})`
    } else {
        return ""
    }
}
function getEventParams(r,data){
    var b=[]
    r.params.forEach((c)=>{
    var e=data.eventParameters.find((a)=>a.id==c.variable)
    if(e.hasOwnProperty("objectID"))b.push(`object("${getTraitObject(e.objectID,data)}")`)
    else b.push(getTraitType(e.blockType))
    });
    return b
}
function getBlocks(b,data,indent){
    var m=""
    indent+="\t"
    b.blocks.forEach((c)=>{
        if(c.type==69)m+=indent+`# ${convertNewLines(c.parameters[0].value)}\n`
        else if(c.type==123)m+=indent+`ability "${convertToString(c.description)}" (${((c.hasOwnProperty("parameters"))?getParameters(c,data):"")})\n`
        else if (c.block_class=="control"){
            if(c.type==26)m+=indent+`draw_trail(${getParameters(c,data)}) {\n`
            else if(c.type==120)m+=indent+`repeat(${getParameters(c,data)}) {\n`
            else if(c.type==121)m+=indent+"forever {\n"
            else m+=indent+"<container>{\n"
            var s=data.abilities.find((a)=>a.abilityID==c.controlScript.abilityID)
            if(s)m+=getBlocks(s,data,indent)
            m+=indent+"}\n"
        } else if (c.block_class=="conditionalControl"){
            m+=indent+`if ${getParameters(c,data)} {\n`
            var s=data.abilities.find((a)=>a.abilityID==c.controlScript.abilityID)
            if(s)m+=getBlocks(s,data,indent)
            m+=indent+"}"
            if(c.type==124){
                m+=" else {\n",s=data.abilities.find((a)=>a.abilityID==c.controlFalseScript.abilityID)
                if(s)m+=getBlocks(s,data,indent)
                m+=indent+"}"
            }
            m+=indent+"\n"
        } else {
            block=HSBlocks.find((h)=>h.id==c.type)
            m+=indent+(block?block.type+"("+(c.hasOwnProperty("parameters")?getParameters(c,data):"")+")\n":defineVarBlock(c,data))
            }
        });
    return m
}
function findAbility(id,data,indent){
    var m="",b=data.abilities.find((a)=>a.abilityID==id)
    if(b)m=getBlocks(b,data,indent) 
    return m
}
function defineVarBlock(c,data){
    var a=""
    a+=getParamType(c,c.parameters[0],data,0)+(c.type==44?" += ":" = ")
    if (c.type==63){
        a+="prompt("+getParamType(c,c.parameters[1],data,1)
        if (c.parameters.length==3)a+=getParamType(c,c.parameters[2],data,2)
        a+=")"  
    } else a+=getParamType(c,c.parameters[1],data,1)
    a+="\n"
    return a   
}
function getParameters(a,data,o=""){
    params=""
    a.parameters.forEach((e,i)=>{
        params+=getParamType(a,e,data,i,o)
    })
    return params
}
function getParamType(a,e,data,i,o=""){
    var params=""
	if(e.hasOwnProperty("datum")){
        if(e.datum.hasOwnProperty("block_class"))params=getOperators(e.datum,o,data)
        else if(e.datum.type==8009)params+=`local."${convertToString(e.datum.name)}"`
        else if(e.datum.hasOwnProperty("variable")){
            var v=data.variables.find((v)=>v.objectIdString==e.datum.variable)
            params+=getVar(v,e,data)
        } else if(e.datum.hasOwnProperty("HSTraitTypeKey")){
            var t=e.datum.HSTraitTypeKey
            params+=getTrait(t,e,data)
        } else if(e.datum.blockType==10000)params+=`scene("${convertToString(data.scenes.find((s)=>s.id==e.datum.scene).name)}")`
        else if(e.datum.blockType==10001)params+="previous"
        else if(e.datum.blockType==10002)params+="next"
        else if(e.datum.type==1)params+=`text("${convertToString(e.datum.text)}")`
        else if(e.datum.type==2000)params+=`image("${data.customObjects.find((c)=>c.id==e.datum.customObject).fileName}")`
        else {
            var char=chars.find((c)=>c.id==e.datum.type)
            if(char)params+=`${char.type}`
            else params+=`<unknown character, id:${e.datum.type}>`
        }
    } else {
        m=e.value.match(regex)
        if(m||e.type==44)params+=e.value
        else
            if(a.block_class!="conditionalControl")params+=`"${convertToString(e.value)}"`
    }
    if(a.type==44||a.type==45||(a.type==63&&i==0))params+=""
    else params+=(i==(a.parameters.length-1))?"":"," 
    return params
}
function getOperators(a,o,data){
    var op=ops.find((b)=>b.id==a.type)
    if(op){
        o+=op.type+"("
        o=getOPParams(a,o,data)
    } else if(a.type==5000)o+="color.random"
    else if(a.type==5001)o+=`color.rgb(${getColor(a)})`
    else if(a.type==5002)o+=`color.hsb(${getColor(a)})`
    else {
        o+="("
        o=(a.block_class=="conditionalOperator")?getConditionalParams(a,o,data):getMathParams(a,o,data)
    }
    o+=")"
    return o
}
function getOPParams(a,o,data){
    a.params.forEach((e,i)=>{
        if(e.hasOwnProperty("datum")){
        if(e.datum.hasOwnProperty("block_class"))o=getOperators(e.datum,o,data)
        else if(e.datum.type==8009)o+=`local."${convertToString(e.datum.name)}"`
        else if(e.datum.hasOwnProperty("type")){
            var v=data.variables.find((v)=>v.objectIdString==e.datum.variable)
            o+=getVar(v,e,data)
        } else {
            var t=e.datum.HSTraitTypeKey
            o+=getTrait(t,e,data)
        }
    } else {
        m=e.value.match(regex)
        if(m)o+=e.value
        else o+=`"${convertToString(e.value)}"`
    }
        o+=(i==(a.params.length-1))?"":","
    })
    return o
}
function getMathParams(a,o,data){
    a.params.forEach((e)=>{
	    o+=e.key.replace("×","*").replace("÷","/").replace("data",", data ")
        if(e.hasOwnProperty("datum")){
        if(e.datum.hasOwnProperty("block_class"))o=getOperators(e.datum,o,data)
        else if(e.datum.type==8009)o+=`local."${convertToString(e.datum.name)}"`
        else if(e.datum.hasOwnProperty("type")){
            var v=data.variables.find((v)=>v.objectIdString==e.datum.variable)
            o+=getVar(v,e,data)
        } else {
            var t=e.datum.HSTraitTypeKey
            o+=getTrait(t,e,data)
        }
    } else {
        m=e.value.match(regex)
        if(m)o+=e.value
        else o+=`"${convertToString(e.value)}"`
    }
    });
    return o
}
function getConditionalParams(a,o,data){
    if(a.description=="flipped") return o+"flipped"
    a.params.forEach((e)=>{
        o+=e.key.replace("=","==").replace("≠","!=").replace("matches"," matches ").replace("and"," and ").replace("or"," or ")
		if(e.hasOwnProperty("datum")){
        if(e.datum.hasOwnProperty("block_class"))o=getOperators(e.datum,o,data)
        else if(e.datum.type==8009)o+=`local."${convertToString(e.datum.name)}"`
        else if(e.datum.hasOwnProperty("type")){
            var v=data.variables.find((v)=>v.objectIdString==e.datum.variable)
            o+=getVar(v,e,data)
        } else {
            var t=e.datum.HSTraitTypeKey
            o+=getTrait(t,e,data)
        }
    } else {
        m=e.value.match(regex)
        if(m)o+=e.value
        else o+=`"${convertToString(e.value)}"`
    }
    });
    return o
}
function getVar(v,e,d){
    if(v.type==8000||v.type==8004||v.type==8005){
		var obj_type=getObjectVarParamType(e,d)
        return `${(obj_type=="self"||obj_type=="original_object")?(obj_type):(`object(${obj_type})`)}.var."${convertToString(v.name)}"`
        }
    else if(v.type==8003)return `game.var."${convertToString(v.name)}"`
    else if(v.type==8007)return `user.var."${convertToString(v.name)}"`
    else return `product."${convertToString(v.name)}"`
}
function getTraitParamType(e,d){
    if(e.datum.HSTraitObjectParameterTypeKey==8000&&e.datum.hasOwnProperty("HSTraitObjectIDKey"))return `"${getTraitObject(e.datum.HSTraitObjectIDKey,d)}"`
    else return getTraitType(e.datum.HSTraitObjectParameterTypeKey)    
}
function getTraitType(type){
    var i=traitTypes.find((a)=>a.id==type),t=i.type
    return t
}
function getColor(a){
    var z=""
    a.params.forEach((c,i)=>{
        z+=c.value+((i<2)?",":"")
    })
    return z
}

const getTrait=(t,e,d)=>((t>=2000&&t<=2018)?(`${(getTraitParamType(e,d)=="self"||getTraitParamType(e,d)=="original_object")?(getTraitParamType(e,d)):(`object(${getTraitParamType(e,d)})`)}`):((t>=2500&&t<=2507)?"user":"game"))+"."+e.datum.description.replace(/\s(as\sa\s)?%$/,"").replace(/([A-Za-z]+)\s([A-Za-z])/g,(match,group1,group2)=>`${group1.toLowerCase()}_${group2.toLowerCase()}`).replace(/^([A-Z])/,(match,group1)=>group1.toLowerCase())
const getObjectVarParamType=(e,d)=>((e.datum.type==8000)?`"${getTraitObject(e.datum.object,d)}"`:getTraitType(e.datum.type))
const getTraitObject=(id,data)=>data.objects.find((a)=>a.objectID==id).name
const convertToString=(str)=>str.replace(/(\\)(?!n)/g,"\\\\").replace(/\n/g,"\\n").replace(/"/g,'\\"')
const convertNewLines=(str)=>str.replace(/\n/g,"\\n")
const getEventTraitParamType=(e,d)=>((e.blockType==8000)?`"${getTraitObject(e.objectID,d)}"`:getTraitType(e.blockType))
