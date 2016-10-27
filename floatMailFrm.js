/*floatMailFrm.js
*
*    Copyright (c) 2016 Yuji SODE <yuji.sode@gmail.com>
*
*    This software is released under the MIT License.
*    See LICENSE or http://opensource.org/licenses/mit-license.php
*/
//this is modified from "floatMailFrm.js" by Yuji SODE (2015).
//this creates floating textarea with email output, and shows its id.
function _floatMailFrm(){
(function(s,d,gT,gI,cE,aC,iH,pN,rC){
  var R=s.Math.random().toFixed(9).replace(/0\./,''),
  dI='div'+R,csI='css'+R,csDi='div'+csI,H=d[gT]('head')[0],B=d[gT]('body')[0],E,o=[],t,dF,fm,tA,adrLb,ipAdr,ipSB,idP,cB,cT,cD,zR,z=1,r,
      //=== element generator. ===
      f=function(e,eI,tI){E=d[cE](e);E.id=eI;return d[gI](tI)[aC](E);},
      //=== this function returns results of Regular Expressions. ===
      //the returned array is composed of first captured values.
      rE=function(ex,tg){t=ex.exec(tg);while(!!t){o.push(t[1]);t=ex.exec(tg);}return o;};
  //=== this method estimates max value of an array. ===
  s.Array.prototype.mx=function(){return this.sort(function(a,b){return b-a;})[0];};
  //<set CSS>
  (function(){cD=d[cE]('div');cD.id=csDi;H[aC](cD);cT=f('style',csI,cD.id);cT.type='text/css';zR=rE(/z-index:([0-9]+)/g,d[gT]('html')[0][iH]);
    if(!!zR[0]){z=+zR.mx()+1;}cT[iH]+='#'+dI+'{position:absolute;left:0px;top:0px;background:rgba(180,180,180,0.3);z-index:'+z+';}';}());
  //</set CSS>
  //<floating form tag with email output>
  dF=d[cE]('div');dF.id=dI;B[aC](dF);
  /*floating form*/
  fm=f('form','frm@'+R,dI);fm.action='mailto:123.example@qwerty.com?subject='+d[gT]('title')[0][iH];fm.method='post';fm.enctype='text/plain';
  /*textarea*/
  tA=f('textarea','result@'+R,fm.id);tA.name='v@';tA[iH]='';
  /*email address*/
  adrLb=f('label','Address@Label'+R,fm.id);adrLb[iH]='Email address:';ipAdr=f('input','Address@'+R,adrLb.id);ipAdr.type='email';ipAdr.value='123.example@qwerty.com';
  //change event for email address
  ipAdr.addEventListener('change',function(){var F=d[gI](fm.id);F.action=['mailto:',this.value,'?subject=',d[gT]('title')[0][iH],': ',s.Date().replace(/\s/g,'_')].join('');},true);
  /*submit button*/
   ipSB=f('input','sbmtB@'+R,fm.id);ipSB.type='submit';ipSB.value='Output as email';
  /*id for input*/
  idP=f('p','id@'+R,dI)[iH]='id:'+tA.id;cB=f('button','cls@'+R,dI);cB[iH]='Close';
  //it closes floating form
  cB.addEventListener('click',function(){cT=d[gI](csI);cD=cT[pN];r=cD[rC](cT),cD[pN][rC](cD),B[rC](this[pN]);r=E=o=t=zR=null;},true);
  //</floating form tag with email output>
}(this,this.document,'getElementsByTagName','getElementById','createElement','appendChild','innerHTML','parentNode','removeChild'));}