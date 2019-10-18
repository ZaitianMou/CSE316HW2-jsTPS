// import jTPS_Transaction from '../../src/jtps/jTPS_Transaction'

/**
 *
 * @author McKillaGorilla
 */
class AndMask_Transaction extends jTPS_Transaction {
    constructor(num,initNum,mask){
    // THIS IS THE OBJECT IT WILL MANIPULATE
        super();
    this.num=num;
    
    this.intNum=initNum;
    
    // AMOUNT TO MASK FOR NUM
    this.mask=mask;
    }

    // /**
    //  * Constructor for this transaction, it initializes this
    //  * object with all the data needed to both do and undo
    //  * the transaction.
    //  * 
    //  * @param initNum
    //  * @param initAmountToAdd 
    //  */
    // AndMask_Transaction(initNum, initIntNum, initMask) {
    //     // KEEP THESE FOR LATER
    //     this.num.setNum(this.intNum);
    //     this.intNum = initIntNum;
    //     this.mask = initMask;
    // }

    /**
     * This transaction simply adds the value to the num.
     */
    //@Override
    doTransaction() {
        this.num.andMask(this.mask);
    }

    /**
     * As the reverse of do, this method substracts from num.
     */
    //@Override
    undoTransaction() {
        this.num.setNum(this.intNum);
    }

    /**
     * Provides a textual summary of this transaction.
     * 
     * @return A string storing a textual summary of this object.
     */
    //@Override
    toString() {
        return "And Mask " + this.mask;
    }
}