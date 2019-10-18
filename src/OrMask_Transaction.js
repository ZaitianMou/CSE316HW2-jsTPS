// import jTPS_Transaction from '../../src/jtps/jTPS_Transaction'

/**
 *
 * @author McKillaGorilla
 */
class OrMask_Transaction extends jTPS_Transaction {
    // THIS IS THE OBJECT IT WILL MANIPULATE
    constructor(){
        this.num;
    
        this.intNum;
    
    // AMOUNT TO MASK FOR NUM
        this.mask;
    }

    /**
     * Constructor for this transaction, it initializes this
     * object with all the data needed to both do and undo
     * the transaction.
     * 
     * @param initNum
     * @param initAmountToAdd 
     */
    OrMask_Transaction(initNum,initIntNum,initMask) {
        // KEEP THESE FOR LATER
        this.num = initNum;
        this.intNum = initIntNum;
        this.mask = initMask;
    }

    /**
     * This transaction simply adds the value to the num.
     */
    //@Override
    doTransaction() {
        this.num.orMask(this.mask);
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
        return "Or Mask " + this.mask;
    }
}