const fs=document.getElementById("file");
fs.addEventListener("change",function(){
    document.getElementById("upload-text").innerText="Loading..."
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
        console.timeEnd("time to display")
        document.getElementById("upload-text").innerText=`Project: ${data.uuid}`
        console.log(`# of characters: ${result.length}`)
    });
    n.readAsText(this.files[0])
});
var regex=/^-?(\d+(\.\d+)?(e\d+)?)$/,result="",customBlocks,params,ops=[{"id":4004,"type":"Math.random"},{"id":4006,"type":"Math.sqrt"},{"id":4007,"type":"sin"},{"id":4008,"type":"cos"},{"id":4009,"type":"round"},{"id":4010,"type":"abs"},{"id":4012,"type":"tan"},{"id":4013,"type":"arcsin"},{"id":4014,"type":"arccos"},{"id":4015,"type":"arctan"},{"id":4016,"type":"max"},{"id":4017,"type":"min"},{"id":4018,"type":"floor"},{"id":4019,"type":"ceil"},{"id":9000,"type":"charAtIndex"},{"id":9001,"type":"charsInRange"},{"id":9002,"type":"length"},{"id":9003,"type":"join"}],traitTypes=[{"id":8000,"type":"object"},{"id":8001,"type":"anyObject"},{"id":8002,"type":"edge"},{"id":8003,"type":"device"},{"id":8004,"type":"self"},{"id":8005,"type":"originalObject"}],events=[{"id":7000,"type":"gameStarts"},{"id":7021,"type":"gameIsPlaying"},{"id":7001,"type":"isTapped"},{"id":7003,"type":"isPressed"},{"id":7020,"type":"isNotPressed"},{"id":7022,"type":"touchEnds"},{"id":7023,"type":"iReceive"},{"id":7024,"type":"message.match"},{"id":7008,"type":"devicesHearsNoise"},{"id":7009,"type":"deviceIsShaken"},{"id":7011,"type":"isSwipedRight"},{"id":7012,"type":"isSwipedLeft"},{"id":7013,"type":"isSwipedUp"},{"id":7014,"type":"isSwipedDown"},{"id":7016,"type":"deviceIsTiltedRight"},{"id":7017,"type":"deviceIsTiltedLeft"},{"id":7018,"type":"deviceIsTiltedUp"},{"id":7019,"type":"deviceIsTiltedDown"},{"id":1010,"type":"flipped"},{"id":7015,"type":"isCloned"},{"id":7010,"type":"bumps"},{"id":7002,"type":"isTouching"},{"id":7025,"type":"isNotTouching"}],HSBlocks=[{"id":19,"type":"waitTilTimestamp"},{"id":23,"type":"moveForward"},{"id":24,"type":"turn"},{"id":41,"type":"setPosition"},{"id":50,"type":"flip"},{"id":27,"type":"changeX"},{"id":28,"type":"changeY"},{"id":34,"type":"setSpeed"},{"id":39,"type":"setAngle"},{"id":59,"type":"setOrigin"},{"id":70,"type":"setBackground"},{"id":54,"type":"setColor"},{"id":56,"type":"setImage"},{"id":40,"type":"setText"},{"id":51,"type":"setSize"},{"id":57,"type":"setWidthAndHeight"},{"id":48,"type":"grow"},{"id":49,"type":"shrink"},{"id":62,"type":"startSound"},{"id":52,"type":"startSoundMS"},{"id":47,"type":"setInvisibility"},{"id":43,"type":"bringToFront"},{"id":42,"type":"sendToBack"},{"id":33,"type":"changePose"},{"id":58,"type":"setZIndex"},{"id":66,"type":"setTempo"},{"id":67,"type":"setInstrument"},{"id":65,"type":"playNote"},{"id":72,"type":"alert"},{"id":64,"type":"setTextToInput"},{"id":32,"type":"setTrailColor"},{"id":31,"type":"setTrailWidth"},{"id":73,"type":"setTrailOpacity"},{"id":71,"type":"setTrailCap"},{"id":30,"type":"clear"},{"id":61,"type":"wait"},{"id":35,"type":"waitMS"},{"id":53,"type":"cloneObject"},{"id":55,"type":"destroy"},{"id":68,"type":"openProject"},{"id":125,"type":"changeScene"},{"id":126,"type":"broadcastMessage"},{"id":127,"type":"requestSeeds"},{"id":29,"type":"scale"},{"id":36,"type":"setOpacity"},{"id":22,"type":"comment"}],chars=[{"id":0,"type":"Monkey"},{"id":2,"type":"Octopus"},{"id":3,"type":"Gorilla"},{"id":4,"type":"Cupcake"},{"id":5,"type":"Bear"},{"id":6,"type":"Dino"},{"id":7,"type":"Frog"},{"id":8,"type":"Jody"},{"id":9,"type":"Mr. Mustache"},{"id":10,"type":"Space Pod"},{"id":11,"type":"Zombear"},{"id":12,"type":"Ghoulopus"},{"id":13,"type":"Bats"},{"id":14,"type":"Frankenrilla"},{"id":15,"type":"Witch Jody"},{"id":16,"type":"Cauldron"},{"id":17,"type":"Pumpkin"},{"id":18,"type":"Broom"},{"id":3002,"type":"Lantern"},{"id":20,"type":"Parrot"},{"id":21,"type":"Mandrill"},{"id":22,"type":"Mosquito"},{"id":23,"type":"Miss Chief"},{"id":24,"type":"Venus"},{"id":25,"type":"Jeepers"},{"id":26,"type":"Banyan"},{"id":27,"type":"Star Girl"},{"id":28,"type":"Cosmic Cody"},{"id":29,"type":"Chillanna"},{"id":30,"type":"Robo"},{"id":31,"type":"Raccoon"},{"id":32,"type":"Bird"},{"id":58,"type":"Toucan"},{"id":59,"type":"Anteater"},{"id":3001,"type":"Crocodile"},{"id":61,"type":"Sloth"},{"id":62,"type":"Iguana"},{"id":63,"type":"Hut"},{"id":64,"type":"Penguin"},{"id":65,"type":"Queen Ana"},{"id":66,"type":"Yeti"},{"id":67,"type":"Deer"},{"id":68,"type":"Elf"},{"id":69,"type":"Snow Globe"},{"id":70,"type":"Polar Bear"},{"id":71,"type":"Sleigh"},{"id":72,"type":"Mistletoe"},{"id":73,"type":"Gonzalo"},{"id":74,"type":"Snowflake"},{"id":153,"type":"Heart"},{"id":155,"type":"Arch"},{"id":156,"type":"Squiggle"},{"id":154,"type":"Star"},{"id":163,"type":"Parallelogram"},{"id":112,"type":"Donut"},{"id":160,"type":"Fan"},{"id":102,"type":"Circle"},{"id":101,"type":"Square"},{"id":150,"type":"Hexagon"},{"id":151,"type":"Triangle"},{"id":105,"type":"Right Triangle"},{"id":152,"type":"Rectangle"},{"id":157,"type":"Z"},{"id":158,"type":"T"},{"id":159,"type":"L"},{"id":116,"type":"Corner"},{"id":117,"type":"Flower"},{"id":119,"type":"Squished Box"},{"id":162,"type":"Bead"},{"id":164,"type":"Chevron"},{"id":125,"type":"X"},{"id":126,"type":"Tetris Line"},{"id":120,"type":"Rounded Right Triangle"},{"id":161,"type":"Rounded Arrow"},{"id":100,"type":"Rounded Square"},{"id":110,"type":"Tilted Rectangle"}]
function convertData(a){
    indent=""
    result+="# Custom Rules\n"
    a.customRules.forEach((e)=>{
        result+=`rule "${e.name}" (`
        result+=getCustomParams(e),result+=") {\n"
        result+=getRules(e,indent,a)
        result+="}\n"
    });
	result+="\n"
    indent=""
    result+="# Abilities\n"
    customBlocks.forEach((e)=>{
        result+=`ability "${e.name}" (`
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
            a+="=",m=f.value.match(regex)
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
    objCode=`object "${convertToString(obj1.name)}" ("image"="${obj1.filename}",${((obj1.filename=="text-object.png")?(`"text"="${obj1.text}",`):"")}"x"=${obj1.xPosition},"y"=${obj1.yPosition}`
	if(obj1.hasOwnProperty("rotation"))objCode+=`,"rotation"=${obj1.rotation}`
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
            whens+=indent+`when(${getEvent(rule,rule.parameters[0],a)}) {\n${findAbility(rule.abilityID,a,indent)+indent}}\n`
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
                    return event.type+`(${eventParams[0]})`
                }
                else {
                    return event.type+`(${getParamType(r,ruleParam.datum.params[0],data,0)})`
                }
            } else
            return event.type
        }
        else return o="",getConditionalParams(ruleParam.datum,o,data)
    } else {
        return ""
    }
}
function getEventParams(r,data){
    var b=[]
    r.params.forEach((c)=>{
    var e=data.eventParameters.find((a)=>a.id==c.variable)
    if(e.hasOwnProperty("objectID"))b.push(`object(${getTraitObject(e.objectID,data)}`)
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
            if(c.type==26)m+=indent+`drawTrail(${getParameters(c,data)}) {\n`
            else if(c.type==120)m+=indent+`repeat(${getParameters(c,data)}) {\n`
            else if(c.type==121)m+=indent+"forever {\n"
            else m+=indent+"<container>{\n"
            var s=data.abilities.find((a)=>a.abilityID==c.controlScript.abilityID)
            if(s)m+=getBlocks(s,data,indent)
            m+=indent+"}\n"
        } else if (c.block_class=="conditionalControl"){
            m+=indent+`if (${getParameters(c,data)}) {\n`
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
        else if(e.datum.type==8009)params+=`local("${convertToString(e.datum.name)}")`
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
            if(char)params+=`"${char.type}"`
            else params+="<unknown character>"
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
    } else if(a.type==5000)o+="Color.random"
    else if(a.type==5001)o+=`Color.rgb(${getColor(a)})`
    else if(a.type==5002)o+=`Color.hsb(${getColor(a)})`
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
            else if(e.datum.type==8009)o+=`local("${convertToString(e.datum.name)}")`
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
            else if(e.datum.type==8009)o+=`local("${convertToString(e.datum.name)}")`
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
            else if(e.datum.type==8009)o+=`local("${convertToString(e.datum.name)}")`
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
        return `object(${getObjectVarParamType(e,d)}).var("${convertToString(v.name)}")`
        }
    else if(v.type==8003)return `game.var("${convertToString(v.name)}")`
    else if(v.type==8007)return `user.var("${convertToString(v.name)}")`
    else return `product("${convertToString(v.name)}")`
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
const getTrait=(t,e,d)=>((t>=2000&&t<=2018)?`object(${getTraitParamType(e,d)})`:((t>=2500&&t<=2507)?"user":"game"))+"."+e.datum.description.replace(/\s/g,"").replace(/asa%$/,"%")
const getObjectVarParamType=(e,d)=>((e.datum.type==8000)?`"${getTraitObject(e.datum.object,d)}"`:getTraitType(e.datum.type))
const getTraitObject=(id,data)=>data.objects.find((a)=>a.objectID==id).name
const convertToString=(str)=>str.replace(/(\\)(?!n)/g,"\\\\").replace(/\n/g,"\\n").replace(/"/g,'\\"')
const convertNewLines=(str)=>str.replace(/\n/g,"\\n")
const getEventTraitParamType=(e,d)=>((e.blockType==8000)?`"${getTraitObject(e.objectID,d)}"`:getTraitType(e.blockType))
