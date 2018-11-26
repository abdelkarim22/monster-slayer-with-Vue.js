new Vue({
  el:"#app",
  data:{
    mStartPower:100,
    pStartPower:100,
    damageTakenByM:0,
    damageTakenByP:0,
    isShown:false,
    mTotal:0,
    pTotal:0,
    logList:[],
    healAmount:0
  },
  computed:{
    styleAfterDamageForM:function(){
      return {
        width: this.mTotalPoints+ "%"

      }
   },
   styleAfterDamageForP:function(){
     return {
       width: this.pTotalPoints+"%"
     }
  },
  mTotalPoints:function(){
    //this.mTotal=this.mStartPower;
    return this.mStartPower-=this.damageTakenByM;
  },
  pTotalPoints:function(){
    //this.pTotal=this.pStartPower;
    this.pStartPower+=this.healAmount;
    return this.pStartPower-=this.damageTakenByP;
  }
},
  methods:{
    init:function(){
      this.isShown=true;

    },
    start:function(){
      this.init();
      this.mTotal-=this.mTotalPoints;
      this.pTotal-=this.pTotalPoints;
    },
    attack:function(){
      //round 1 player damaging MONSTER
      //setting damage
      var mDamage = Math.floor(Math.random() * 10) + 1;
      var pDamage= Math.floor(Math.random() * 10) + 1;
      // //logs pushing
      // console.log("damage= "+mDamage);
      this.damageTakenByM=mDamage;
      console.log("result= "+ this.mTotalPoints);
      //round 2 MONSTER damaging Player
      // console.log("damage= "+ pDamage);
      this.damageTakenByP=pDamage;
      // console.log("result= "+ this.pTotalPoints);
      //pushing damages into Our created logList
      this.logList.push({mHit: pDamage, pHit: mDamage});
      // //Controlling the lifePoints of every player
      // console.log("logList[0]= "+ this.logList);
      // console.log("logList[1]= "+ this.logList);
      //checking for win
      this.checkWin();

    },
    checkWin:function(){
      if (this.mTotalPoints < 0 ) {
        alert("Well done you won");
        document.location.reload();
      }
     if (this.pTotalPoints < 0 ) {
        alert("Try Another time");
        document.location.reload();
      }
      if (this.pTotalPoints < 0 && this.mTotalPoints <0) {
        alert("draw");
        document.location.reload();
      }

    },
    heal:function(){
      //player heals himself
      this.healAmount = Math.floor(Math.random() * 10) + 1;
      //console.log("healAmount= "+this.healAmount);
      //  monster damaging player
      var pDamage= Math.floor(Math.random() * 10) + 1;
      //console.log("damage= "+ pDamage);
      this.damageTakenByP=pDamage;
      //console.log("result= "+ this.pTotalPoints);
      //pushing damages into Our created logList
      //pushing heals to logList
      this.logList.push({mHit: pDamage, pHeal: this.healAmount});
      //check for a win
      this.checkWin();
      //setting heal to a zero
      //this.healAmount=0;
    },
    giveUp:function(){
      document.location.reload();

    },
    specialAttack:function(){
      //round 1 player damaging MONSTER
      //setting damage
      var mDamage = Math.floor(Math.random() * 30) + 1;
      var pDamage= Math.floor(Math.random() * 10) + 1;
      // //logs pushing
      // console.log("damage= "+mDamage);
      this.damageTakenByM=mDamage;
      console.log("result= "+ this.mTotalPoints);
      //round 2 MONSTER damaging Player
      // console.log("damage= "+ pDamage);
      this.damageTakenByP=pDamage;
      // console.log("result= "+ this.pTotalPoints);
      //pushing damages into Our created logList
      this.logList.push({mHit: pDamage, pHit: mDamage});
      // //Controlling the lifePoints of every player
      // console.log("logList[0]= "+ this.logList);
      // console.log("logList[1]= "+ this.logList);
      //checking for win
      this.checkWin();

    },
    generateRandomNumber:function(min,max){
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
}
});
