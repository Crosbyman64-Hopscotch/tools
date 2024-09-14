const fs=document.getElementById("file");
fs.addEventListener("change",function(){
    document.getElementById("result").innerText="";
    document.getElementById("upload-text").innerText="Loading...";
    const n=new FileReader;
    n.addEventListener("load",()=>{
        const t=performance.now();
        a=sortVars(n.result);
        const t2=performance.now();console.log("%c variables sorted ("+(t2-t)+"ms) ","background:#102210;color:lime;font-weight:bold;")
        b=JSON.parse(a);
        countRef(a,b.variables);
        document.getElementById("upload-text").innerText="Project UUID: "+b.uuid;
    });
    n.readAsText(this.files[0]);
});
function sortVars(n){
    return n=JSON.parse(n),n.variables=n.variables.sort((n,t)=>n.name.localeCompare(t.name)),JSON.stringify(n);
}

function countRef(n,v){
    const t=performance.now()
    var u=0,s="",z={}
    n=n.match(/le":"[\dA-F\-]{36,59}"/g)
    n.forEach(function(x){z[x]=(z[x]||0)+1})
    v.forEach(function(x){
        let m=z['le":"'+x.objectIdString+'"']
        u+=(~~!m)
        s+=("name: "+x.name+", type: "+(x.type==8008?"Product":(((x.type==8e3)?"Object":(x.type==8003)?"Game":"User")+" Variable")))+", times used: "+(~~m)+"\n";
    })
    const t2=performance.now();
    console.log("%c variable references counted ("+(t2-t)+"ms) ","background:#102210;color:lime;font-weight:bold;");
    document.getElementById("info").innerText="This project has "+v.length+" variable"+((v.length!=1)?"s":"")+((u>0)?", "+u+" of which "+((u==1)?"is":"are")+" not being used.":".");
    document.getElementById("result").innerText=s;
}
