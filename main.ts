import{mkdirSync as M,readdirSync as D,readFileSync as F,writeFileSync as G}from'node:fs';
const{MAKEFUN_INPUT_DIR:I='/input',MAKEFUN_OUTPUT_DIR:O='/output'}=process.env;
function R(p,g){
let D=new Int32Array(256),s=0,C=new Int32Array(64),c=0,M=new Int32Array(256),U=new Uint8Array(65536),L=0,j=0,pc=0,t=0,a,y,E=x=>[U.subarray(0,L),x];
for(;;){
if(t++==1e6)return E(10);
if(pc>>>0>=p.length)return E(9);
let o=p[pc],B=o>15&&o<35,b=B&&o-23&&o-27&&o-31,m=o==2?4:o>47&&o<52?2:o==1?1:0;
if(pc+m>=p.length)return E(9);
let q=o==7?3:b||o>4&&o<7||o==65?2:o>2&&o<5||o==23||o==27||o>48&&o<51||o==64||o>79&&o<84&&o-82?1:0,w=o==4?2:o==6?3:o>0&&o<3||o==64||o==82||B?1:0;
if(s<q)return E(2);
if(s-q+w>256)return E(3);
pc+=1+m;
let n=m==2?p.readInt16LE(pc-2):0;
if(b){
y=D[--s],a=D[s-1];
if(o>18&&o<23&&!y)return E(4);
D[s-1]=o==16?a+y:o==17?a-y:o==18?Math.imul(a,y):o==19?a/y:o==20?a%y:o==21?(a>>>0)/(y>>>0):o==22?(a>>>0)%(y>>>0):o==24?a&y:o==25?a|y:o==26?a^y:o==28?a<<y:o==29?a>>y:o==30?a>>>y:o==32?+(a==y):o==33?+(a<y):(a>>>0)<(y>>>0)|0;
continue}
switch(o){
case 0:return E(0);
case 1:D[s++]=p.readInt8(pc-1);break;
case 2:D[s++]=p.readInt32LE(pc-4);break;
case 3:s--;break;
case 4:D[s]=D[s-1],s++;break;
case 5:[D[s-1],D[s-2]]=[D[s-2],D[s-1]];break;
case 6:D[s]=D[s-2],s++;break;
case 7:[D[s-3],D[s-2],D[s-1]]=[D[s-2],D[s-1],D[s-3]];break;
case 23:D[s-1]=-D[s-1];break;
case 27:D[s-1]=~D[s-1];break;
case 48:pc+=n;break;
case 49:case 50:a=D[--s];if((o==49)==!a)pc+=n;break;
case 51:if(c==64)return E(7);C[c++]=pc;pc=p.readUInt16LE(pc-2);break;
case 52:if(!c)return E(8);pc=C[--c];break;
case 64:a=D[s-1];if(a<0||a>255)return E(6);D[s-1]=M[a];break;
case 65:a=D[s-1];if(a<0||a>255)return E(6);M[a]=D[s-2];s-=2;break;
case 80:a=''+D[--s];if(L+a.length>65536)return E(11);U.set(Buffer.from(a),L),L+=a.length;break;
case 81:if(L>65535)return E(11);U[L++]=D[--s]&255;break;
case 82:D[s++]=j<g.length?g[j++]:-1;break;
case 83:return E(D[--s]&255);
default:return E(5);
}}}
for(const d of D(I)){
let r=R(F(I+'/'+d+'/program.bin'),F(I+'/'+d+'/input.bin'));
M(O+'/'+d,{recursive:true});
G(O+'/'+d+'/stdout.bin',r[0]);
G(O+'/'+d+'/exit.txt',r[1]+'\n');
}
