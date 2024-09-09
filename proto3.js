// example showing the concept of prototype

function Bank(actno,actname,actbal){
    this.actno=actno;
    this.actname=actname;
    this.actbal=actbal;
}
Bank.prototype.showDetails = function(){
    console.log("Account Number : "+this.actno);
    console.log("Account Holder Name : "+this.actname);
    console.log("Account Balance : "+this.actbal);    
}
Bank.prototype.withDrawal = function(wamt){
    if(this.actbal<wamt){
        console.log("Low Balance | Needs to deposite amount");
    }else{
        console.log("Balance : "+this.actbal);
        console.log("Withdrawal amount : "+wamt);
        console.log("Remaining Balance : "+(this.actbal-wamt));        
    }
}
Bank.prototype.deposite = function(damt){
    this.actbal+=damt;
    console.log("Amount Deposited..!");
}

let bank = new Bank("BK1000SBI","Andrew Anderson",890000);
bank.showDetails();
bank.deposite(100000);
bank.withDrawal(230000);