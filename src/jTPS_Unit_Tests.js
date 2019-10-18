// import AddToNum_Transaction from '../demo/AddToNum_Transaction'
// import AndMask_Transaction from '../demo/AndMask_Transaction'
// import Num from '../demo/Num'
//import jTPS from './jTPS'
// import org.junit.Assert;
// import org.junit.Test;

/**
 * jTPS_Unit_Tests.java
 * 
 * This file provides a test bed for the jTPS framework.
 * 
 * @author McKilla Gorilla
 * @version 2.0
 */
class jTPS_Unit_Tests {
    /**
     * This JUnit test is for testing the adding of transactions.
     */
    //@Test

    assertEquals(a, b) {
        if (a == b) return "True";
        else return "False";
    }
    assertTrue(a) {
        if (a) return "True";
        else return "False";
    }
    assertFalse(a){
        if (a) return "False";
        else return "True";
    }
    testAdd() {

        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        var tps = new jTPS();
        var num = new Num();
        var result = "Test Add: ";
        result += this.assertEquals(0, num.getNum());

        // ADD 5 TRANSACTION
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        result += this.assertEquals(5, num.getNum());
        result += this.assertEquals(1, tps.getSize());
        result += this.assertEquals(0, tps.getRedoSize());
        result += this.assertEquals(1, tps.getUndoSize());

        // ADD 10 TRANSACTION
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        result += this.assertEquals(15, num.getNum());
        result += this.assertEquals(2, tps.getSize());
        result += this.assertEquals(0, tps.getRedoSize());
        result += this.assertEquals(2, tps.getUndoSize());

        // ADD 15 TRANSACTION
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        result += this.assertEquals(35, num.getNum());
        result += this.assertEquals(3, tps.getSize());
        result += this.assertEquals(0, tps.getRedoSize());
        result += this.assertEquals(3, tps.getUndoSize());


        document.getElementById("testResult").innerHTML = result;

    }

    /**
     * 
     */
    //@Test
    testAndMask() {
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        var tps = new jTPS();
        var num = new Num();
        var result = "Test andMask: ";

        result += this.assertEquals(0, num.getNum());

        // ADD 5 TRANSACTION
        
        tps.addTransaction(new AddToNum_Transaction(num, 12));
        tps.addTransaction(new AndMask_Transaction(num, num.getNum(), 4));
        console.log(num.getNum())
        result += this.assertEquals(4, num.getNum());
        result += this.assertEquals(2, tps.getSize());

        tps.undoTransaction();
        result += this.assertEquals(12, num.getNum());
        result += this.assertEquals(2, tps.getSize());
        result += this.assertEquals(1, tps.getRedoSize());
        result += this.assertEquals(1, tps.getUndoSize());

        document.getElementById("testResult").innerHTML +='\r\n';
        document.getElementById("testResult").innerHTML +=result;
      
    }

    testOrMask() {
    }

    /**
     * This JUnit test is for testing the undoing of transactions.
     */
    //@Test
    testUndo() {
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        var tps = new jTPS();
        var num = new Num();
        var result = "Test undo: ";
        
        result += this.assertEquals(num.getNum(), 0);
        result += this.assertFalse(tps.hasTransactionToUndo());
        result += this.assertFalse(tps.hasTransactionToRedo());

        // ADD 3 TRANSACTIONS (5, 10, and 15)
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        result += this.assertTrue(tps.hasTransactionToUndo());
        result += this.assertFalse(tps.hasTransactionToRedo());
        result += this.assertEquals(35, num.getNum());
        result += this.assertTrue(tps.hasTransactionToUndo());
        result += this.assertEquals(3, tps.getSize());
        result += this.assertEquals(0, tps.getRedoSize());
        result += this.assertEquals(3, tps.getUndoSize());

        // UNDO A TRANSACTION
        tps.undoTransaction();
        result += this.assertTrue(tps.hasTransactionToUndo());
        result += this.assertTrue(tps.hasTransactionToRedo());
        result += this.assertEquals(15, num.getNum());
        result += this.assertEquals(3, tps.getSize());
        result += this.assertEquals(1, tps.getRedoSize());
        result += this.assertEquals(2, tps.getUndoSize());

        // UNDO ANOTHER
        tps.undoTransaction();
        result += this.assertTrue(tps.hasTransactionToUndo());
        result += this.assertTrue(tps.hasTransactionToRedo());
        result += this.assertEquals(5, num.getNum());
        result += this.assertEquals(3, tps.getSize());
        result += this.assertEquals(2, tps.getRedoSize());
        result += this.assertEquals(1, tps.getUndoSize());

        // AND ANOTHER
        tps.undoTransaction();
        result += this.assertFalse(tps.hasTransactionToUndo());
        result += this.assertTrue(tps.hasTransactionToRedo());
        result += this.assertEquals(0, num.getNum());
        result += this.assertEquals(3, tps.getSize());
        result += this.assertEquals(3, tps.getRedoSize());
        result += this.assertEquals(0, tps.getUndoSize());

        // WE HAVE NO MORE TO UNDO SO THIS SHOULD DO NOTHING
        tps.undoTransaction();
        result += this.assertFalse(tps.hasTransactionToUndo());
        result += this.assertTrue(tps.hasTransactionToRedo());
        result += this.assertEquals(0, num.getNum());
        result += this.assertEquals(3, tps.getSize());
        result += this.assertEquals(3, tps.getRedoSize());
        result += this.assertEquals(0, tps.getUndoSize());

        document.getElementById("testResult").innerHTML +='\r\n';
        document.getElementById("testResult").innerHTML +=result;
    }

    /**
     * This JUnit test is for testing the redoing of transactions.
     */
    //@Test
    testRedo() {
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        var tps = new jTPS();
        var num = new Num();
        var result = "Test Redo: ";

        result += this.assertEquals(num.getNum(), 0);

        // ADD 3 TRANSACTIONS (5, 10, and 15)
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        result += this.assertTrue(tps.hasTransactionToUndo());
        result += this.assertFalse(tps.hasTransactionToRedo());
        result += this.assertEquals(35, num.getNum());
        result += this.assertEquals(3, tps.getSize());
        result += this.assertEquals(0, tps.getRedoSize());
        result += this.assertEquals(3, tps.getUndoSize());

        // UNDO A TRANSACTION AND THEN REDO IT
        tps.undoTransaction();
        tps.doTransaction();
        result += this.assertTrue(tps.hasTransactionToUndo());
        result += this.assertFalse(tps.hasTransactionToRedo());
        result += this.assertEquals(35, num.getNum());
        result += this.assertEquals(3, tps.getSize());
        result += this.assertEquals(0, tps.getRedoSize());
        result += this.assertEquals(3, tps.getUndoSize());

        // UNDO TWO TRANSACTIONS AND THEN REDO THEM
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        result += this.assertTrue(tps.hasTransactionToUndo());
        result += this.assertFalse(tps.hasTransactionToRedo());
        result += this.assertEquals(35, num.getNum());
        result += this.assertEquals(3, tps.getSize());
        result += this.assertEquals(0, tps.getRedoSize());
        result += this.assertEquals(3, tps.getUndoSize());

        // UNDO ALL THREE TRANSACTIONS AND REDO THEM
        tps.undoTransaction();
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        tps.doTransaction();
        result += this.assertTrue(tps.hasTransactionToUndo());
        result += this.assertFalse(tps.hasTransactionToRedo());
        result += this.assertEquals(35, num.getNum());
        result += this.assertEquals(3, tps.getSize());
        result += this.assertEquals(0, tps.getRedoSize());
        result += this.assertEquals(3, tps.getUndoSize());

        // UNDO THREE TRANSACTIONS AND REDO TWO
        tps.undoTransaction();
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        result += this.assertTrue(tps.hasTransactionToUndo());
        result += this.assertTrue(tps.hasTransactionToRedo());
        result += this.assertEquals(15, num.getNum());
        result += this.assertEquals(3, tps.getSize());
        result += this.assertEquals(1, tps.getRedoSize());
        result += this.assertEquals(2, tps.getUndoSize());

        // UNDO ALL THREE TRANSACTIONS AND REDO FOUR, WHICH
        // SHOULD NOT PRODUCE AN ERROR BUT THE LAST
        // REDO SHOULD DO NOTHING
        tps.undoTransaction();
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        tps.doTransaction();
        tps.doTransaction();
        result += this.assertTrue(tps.hasTransactionToUndo());
        result += this.assertFalse(tps.hasTransactionToRedo());
        result += this.assertEquals(35, num.getNum());
        result += this.assertEquals(3, tps.getSize());
        result += this.assertEquals(0, tps.getRedoSize());
        result += this.assertEquals(3, tps.getUndoSize());

        document.getElementById("testResult").innerHTML +='\r\n';
        document.getElementById("testResult").innerHTML +=result;
    }

    /**
     * This JUnit test is for testing clearing of transactions.
     */
    //@Test
    testClear() {
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        var tps = new jTPS();
        var num = new Num();
        var result = "Test Clear: ";
        result +=this.assertEquals(num.getNum(), 0);

        // ADD 3 TRANSACTIONS (5, 10, and 15)
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        result +=this.assertEquals(35, num.getNum());
        result +=this.assertEquals(3, tps.getSize());
        result +=this.assertEquals(0, tps.getRedoSize());
        result +=this.assertEquals(3, tps.getUndoSize());

        // CLEAR ALL THE TRANSACTIONS
        tps.clearAllTransactions();
        result +=this.assertEquals(35, num.getNum());
        result +=this.assertEquals(0, tps.getSize());
        result +=this.assertEquals(0, tps.getRedoSize());
        result +=this.assertEquals(0, tps.getUndoSize());

        // ADD 3 TRANSACTIONS (5, 10, and 15)
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        result +=this.assertEquals(70, num.getNum());
        result +=this.assertEquals(3, tps.getSize());
        result +=this.assertEquals(0, tps.getRedoSize());
        result +=this.assertEquals(3, tps.getUndoSize());

        // CLEAR THEM ALL OUT AGAIN
        tps.clearAllTransactions();
        result +=this.assertEquals(70, num.getNum());
        result +=this.assertEquals(0, tps.getSize());
        result +=this.assertEquals(0, tps.getRedoSize());
        result +=this.assertEquals(0, tps.getUndoSize());

        // ADD 3 TRANSACTIONS (5, 10, and 15)
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        result +=this.assertEquals(105, num.getNum());
        result +=this.assertEquals(3, tps.getSize());
        result +=this.assertEquals(0, tps.getRedoSize());
        result +=this.assertEquals(3, tps.getUndoSize());

        document.getElementById("testResult").innerHTML +='\r\n';
        document.getElementById("testResult").innerHTML +=result;
    }
}



let x = new jTPS_Unit_Tests();
x.testAdd();
x.testAndMask();
x.testUndo();
x.testRedo();
x.testClear();