
// import jTPS_Transaction from '../../src/jtps/jTPS_Transaction'
// import jTPS from '../../src/jtps/jTPS'
// import Num from './Num'

// import java.io.PrintStream;
// import java.util.Scanner;


/**
 * This driver demonstrates simple usage of the jTPS API.
 * 
 * @author THE McKilla Gorilla (accept no imposters)
 * @version 2.0
 */
class jTPS_Tester {
    // HERE'S OUR TRANSACTION PROCESSING SYSTEM
    constructor(){
    this.tps = new jTPS();
    
    // HERE'S THE DATA WE'RE MANIPULATING IN THIS DEMO
    this.num = new Num();
    
    // THESE ARE TO HELP WITH I/O
    //!!!!!!!!!!!!!!!!
    // static Scanner input = new Scanner(System.in);
    // static PrintStream out = System.out;
    }

    /**
     * This runs our demo program. Note that it presents a 
     * menu, retrieves the input, and executes the selected
     * behavior.
     * 
     * @param args Not used in this demo.
     */
    main() {
        // LOOP FLAG VARIABLE
        var keepGoing = true;
        while (keepGoing) {
            // DISPLAY THE CURRENT TPS
            out.println("CURRENT jTPS:");
            out.println(tps);
            out.println();
            
            // DISPLAY NUM
            out.println("num is " + num.getNum());
            out.println();

            // GET THE USER SELECTION
            var entry = document.getElementById("userInput").value;
            console.log(entry)
            
            // ADD AND EXECUTE A TRANSACTION
            if (entry.startsWith("1")) {
                System.out.print("\nEnter an amount to add: ");
                entry = input.nextLine();
                 varamountToAdd = Integer.parseInt(entry);
                var transaction = new AddToNum_Transaction(num, amountToAdd);
                this.tps.addTransaction(transaction);
            }            
            // UNDO A TRANSACTION
            else if (entry.startsWith("2")) {
                this.tps.undoTransaction();
            }
            // REDO A TRANSACTION
            else if (entry.startsWith("3")) {
                this.tps.doTransaction();
            }
            // CLEAR ALL TRANSACTIONS
            else if (entry.startsWith("4")) {
                this.tps.clearAllTransactions();
            }
            // CLEAR ALL TRANSACTIONS AND RESET NUM TO 0
            else if (entry.startsWith("5")) {
                this.tps.clearAllTransactions();
                this.num.setNum(0);
            }
            // QUIT
            else if (entry.startsWith("Q")) {
                keepGoing = false;
            }
        }
        System.out.println("GOODBYE");
    }
}