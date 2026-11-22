import{mkdirSync,readdirSync,readFileSync,writeFileSync}from'node:fs';
import{join}from'node:path';
const I=process.env.MAKEFUN_INPUT_DIR??'/input',O=process.env.MAKEFUN_OUTPUT_DIR??'/output';
function R(p,g){
let D=new Int32Array(256),s=0,C=new Int32Array(64),c=0,M=new Int32Array(256),U=new Uint8Array(65536),L=0,j=0,pc=0,t=0;
for(;;){
if(t==1e6)return[U.subarray(0,L),10];
if(pc<0||pc>=p.length)return[U.subarray(0,L),9];
let o=p[pc];
if(!(o<8||o>15&&o<35||o>47&&o<53||o>63&&o<66||o>79&&o<84))return[U.subarray(0,L),5];
let m=o==1?1:o==2?4:o>47&&o<52?2:0;
if(pc+m>=p.length)return[U.subarray(0,L),9];
t++;
let q=o==7?3:o==5||o==6||o==65||o>15&&o<35&&o!=23&&o!=27?2:o==3||o==4||o==23||o==27||o>48&&o<51||o==64||o==80||o==81||o==83?1:0;
let w=o==4?2:o==6?3:o==1||o==2||o==64||o==82||o>15&&o<35?1:0;
if(s<q)return[U.subarray(0,L),2];
if(s-q+w>256)return[U.subarray(0,L),3];
pc+=1+m;
if(o>15&&o<35&&o!=23&&o!=27){
let b=D[--s],a=D[s-1],r;
if(o<19)r=o==16?a+b:o==17?a-b:Math.imul(a,b);
else if(o<23){if(!b)return[U.subarray(0,L),4];r=o==19?a/b:o==20?a%b:o==21?Math.floor((a>>>0)/(b>>>0)):(a>>>0)%(b>>>0)}
else if(o<27)r=o==24?a&b:o==25?a|b:a^b;
else if(o<31)r=o==28?a<<b:o==29?a>>b:a>>>b;
else r=o==32?a==b?1:0:o==33?a<b?1:0:(a>>>0)<(b>>>0)?1:0;
D[s-1]=r;continue}
switch(o){
case 0:return[U.subarray(0,L),0];
case 1:D[s++]=(p[pc-1]<<24)>>24;break;
case 2:D[s++]=p[pc-4]|p[pc-3]<<8|p[pc-2]<<16|p[pc-1]<<24;break;
case 3:s--;break;
case 4:D[s]=D[s-1];s++;break;
case 5:{let a=D[s-1];D[s-1]=D[s-2];D[s-2]=a;break}
case 6:D[s]=D[s-2];s++;break;
case 7:{let a=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=a;break}
case 23:D[s-1]=-D[s-1];break;
case 27:D[s-1]=~D[s-1];break;
case 48:pc+=((p[pc-2]|p[pc-1]<<8)<<16)>>16;break;
case 49:case 50:{let v=D[--s];if((o==49)==(v==0))pc+=((p[pc-2]|p[pc-1]<<8)<<16)>>16;break}
case 51:if(c==64)return[U.subarray(0,L),7];C[c++]=pc;pc=p[pc-2]|p[pc-1]<<8;break;
case 52:if(!c)return[U.subarray(0,L),8];pc=C[--c];break;
case 64:{let a=D[s-1];if(a<0||a>255)return[U.subarray(0,L),6];D[s-1]=M[a];break}
case 65:{let a=D[s-1];if(a<0||a>255)return[U.subarray(0,L),6];M[a]=D[s-2];s-=2;break}
case 80:{let y=String(D[--s]);if(L+y.length>65536)return[U.subarray(0,L),11];for(let k=0;k<y.length;k++)U[L++]=y.charCodeAt(k);break}
case 81:if(L>65535)return[U.subarray(0,L),11];U[L++]=D[--s]&255;break;
case 82:D[s++]=j<g.length?g[j++]:-1;break;
case 83:return[U.subarray(0,L),D[--s]&255];
}}}
for(const d of readdirSync(I).sort()){
let r=R(readFileSync(join(I,d,'program.bin')),readFileSync(join(I,d,'input.bin')));
mkdirSync(join(O,d),{recursive:true});
writeFileSync(join(O,d,'stdout.bin'),r[0]);
writeFileSync(join(O,d,'exit.txt'),r[1]+'\n');
}
