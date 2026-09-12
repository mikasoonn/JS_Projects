const range = {
 from: 0,
 to: 10,
 step: 2,
 [Symbol.iterator](){
    return {
        current: this.from,
        last: this.to,
        myStep: this.step,
        next(){
            if(this.current <= this.last){
                const value = this.current;
                this.current += this.myStep;
                return {
                    value:value,
                    done:false
                }
            }
            return{
                value:undefined,
                done:true
            }
        }
 }
}
};
for (const value of range) {
 console.log(value);
}
