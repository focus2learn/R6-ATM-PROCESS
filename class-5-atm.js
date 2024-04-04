#! /usr/bin/env node
// Online class - 5, March 2024, ATM Balance inquiry and Cash Wihtdraw Fast and Customized..
// Coding by Naushad Hussain, Class (Sunday 9-12) username: (focus2learn)
// import inquirer package
import inquirer from "inquirer";
// Assigned varibales and values..
const atmpincode = "123";
let cashbalance = 50000;
let condition = true;
// Get input from user during program execution..
console.clear();
const userinput = await inquirer.prompt([{
        name: "cardinsert",
        type: "input",
        message: "\n\n\t\t\t\tPlease Insert ATM Card & Press any key to proceed ......",
    },
]);
while (condition) {
    const userpininput = await inquirer.prompt([
        {
            name: "pincode",
            type: "input",
            message: "\n\n\n\t\t\t\tPlease Enter PIN Code 1 2 3 ...........",
        },
    ]);
    // Conditional statements....for verified OR not Verified
    console.clear();
    if (userpininput.pincode === atmpincode) {
        console.log(" \n\n\t\t\t\tVerification is Confirmed...........");
        //}
        // User input during execution...
        const step2 = await inquirer.prompt([
            {
                name: "actype",
                type: "list",
                message: "\n\t\t\t\tPlease Select Account...........",
                choices: ["Current Account", "Saving Account"],
            },
            {
                message: "\n\n\t\tSelect any one following Operations.... : ",
                type: "list",
                name: "operator",
                choices: ["Cash-Withdraw", "Fast-Cash", "Balance-Inquiry", "Utility-Bills"],
            }
        ]);
        // CASH WITHDRAW
        if (step2.operator === "Cash-Withdraw") {
            console.clear();
            console.log("\n\n\n\n\n\t\t\t\t\t .... CASH WITHDRAW ....\n");
            let amount = await inquirer.prompt({
                name: "wdamount",
                type: "number",
                message: "\n\n\t\tEnter Amount ......RS.  ",
            });
            // CASH WITHDRAW , CALCULATIONS AND DISPLAY REMAINING BALANCE
            if (cashbalance > amount.wdamount) {
                console.clear();
                cashbalance -= amount.wdamount;
                console.log("\n\n\n\n\n\t\t\t\t\t .... CASH WITHDRAW ....\n");
                console.log("\n\n\t\t\t\t\tYour Remaing Balance is Rs.. " + cashbalance);
                console.log("\n\n\\n\nt\t\t\t\t                  (focus2learn)");
            }
            else {
                console.log("\n\n\t\t\ Sorry Insufficient Balance.....");
            }
        }
        ;
        // FAST CASH      
        if (step2.operator === "Fast-Cash") {
            console.clear();
            console.log("\n\n\n\n\n\t\t\t\t\t .... FAST CASH  ....\n");
            const fastcash = await inquirer.prompt({
                message: "\n\n\t\tSelect Fast Cash Amount.... : ",
                type: "list",
                name: "fastoperate",
                choices: ["1000", "2000", "3000", "5000", "10000", "15000", "20000"],
            });
            // FAST CASH , CALCULATIONS AND DISPLAY REMAINING BALANCE        
            if (fastcash.fastoperate === "1000") {
                console.clear();
                if (cashbalance > 1000) {
                    cashbalance -= 1000;
                    console.log("\n\n\n\n\n\t\t\t\t\t .... FAST CASH  ....\n");
                    console.log("\n\n\t\tYour remaining balance is Rs." + cashbalance);
                    console.log("\n\n\\n\nt\t\t\t\t                  (focus2learn)");
                }
                else {
                    console.log("\n\n\t\t\ Sorry Insufficient Balance.....");
                }
            }
            if (fastcash.fastoperate === "2000") {
                if (cashbalance > 2000) {
                    console.clear();
                    cashbalance -= 2000;
                    console.log("\n\n\n\n\n\t\t\t\t\t .... FAST CASH  ....\n");
                    console.log("\n\n\t\tYour remaining balance is Rs." + cashbalance);
                    console.log("\n\n\\n\nt\t\t\t\t                  (focus2learn)");
                }
                else {
                    console.log("\n\n\t\t\ Sorry Insufficient Balance.....");
                }
            }
            if (fastcash.fastoperate === "3000") {
                console.clear();
                if (cashbalance > 3000) {
                    cashbalance -= 3000;
                    console.log("\n\n\n\n\n\t\t\t\t\t .... FAST CASH  ....\n");
                    console.log("\n\n\t\tYour remaining balance is Rs." + cashbalance);
                    console.log("\n\n\\n\nt\t\t\t\t                  (focus2learn)");
                }
                else {
                    console.log("\n\n\t\t\ Sorry Insufficient Balance.....");
                }
            }
            if (fastcash.fastoperate === "5000") {
                console.clear();
                if (cashbalance > 5000) {
                    cashbalance -= 5000;
                    console.log("\n\n\n\n\n\t\t\t\t\t .... FAST CASH  ....\n");
                    console.log("\n\n\t\tYour remaining balance is Rs." + cashbalance);
                    console.log("\n\n\\n\nt\t\t\t\t                  (focus2learn)");
                }
                else {
                    console.log("\n\n\t\t\ Sorry Insufficient Balance.....");
                }
            }
            if (fastcash.fastoperate === "10000") {
                console.clear();
                if (cashbalance > 10000) {
                    cashbalance -= 10000;
                    console.log("\n\n\n\n\n\t\t\t\t\t .... FAST CASH  ....\n");
                    console.log("\n\n\t\tYour remaining balance is Rs." + cashbalance);
                    console.log("\n\n\\n\nt\t\t\t\t                  (focus2learn)");
                }
                else {
                    console.log("\n\n\t\t\ Sorry Insufficient Balance.....");
                }
            }
            if (fastcash.fastoperate === "15000") {
                console.clear();
                if (cashbalance > 15000) {
                    cashbalance -= 15000;
                    console.log("\n\n\n\n\n\t\t\t\t\t .... FAST CASH  ....\n");
                    console.log("\n\n\t\tYour remaining balance is Rs." + cashbalance);
                    console.log("\n\n\\n\nt\t\t\t\t                  (focus2learn)");
                }
                else {
                    console.log("\n\n\t\t\ Sorry Insufficient Balance.....");
                }
            }
            if (fastcash.fastoperate === "20000") {
                if (cashbalance > 20000) {
                    cashbalance -= 20000;
                    console.log("\n\n\n\n\n\t\t\t\t\t .... FAST CASH  ....\n");
                    console.log("\n\n\t\tYour remaining balance is Rs." + cashbalance);
                    console.log("\n\n\\n\nt\t\t\t\t                  (focus2learn)");
                }
                else {
                    console.log("\n\n\t\t\ Sorry Insufficient Balance.....");
                }
            }
        }
        ;
        // BALANCE INQUIRY      
        if (step2.operator === "Balance-Inquiry") {
            console.clear();
            console.log("\n\n\n\n\n\t\t\t\t\t .... BALANCE INQUIRY  ....\n");
            console.log("\n\n\t\tYour remaining balance is Rs." + cashbalance);
            console.log("\n\n\\n\nt\t\t\t\t                  (focus2learn)");
        }
        ;
        // UTILITY BILLS , Getting Input from Choices        
        if (step2.operator === "Utility-Bills") {
            console.clear();
            console.log("\n\n\n\n\n\t\t\t\t\t .... UTILITY BILLS  ....\n");
            const utibills = await inquirer.prompt({
                message: "\n\n\t\tSelect Utility Bills Options.... : ",
                type: "list",
                name: "utilitybills",
                choices: ["KE-(K-Electric)", "SSGC (Sui Southern Gas)"],
            });
            // UTILITY BILLS , GENERATE & DISPLAY RANDOM BILL AMOUNT               
            if (utibills.utilitybills === "KE-(K-Electric)" || "SSGC (Sui Southern Gas)") {
                console.clear();
                let randnumber = Math.floor(Math.random() * 3000 + 300);
                console.log("\n\n\n\n\n\t\t\t\t\t .... UTILITY BILL  ....\n");
                console.log("\n\n\t\tYour Current balance is Rs..." + cashbalance);
                console.log("\n\t\tYour Current Bill is RS......" + randnumber);
                console.log(`\n\t\tYour Current Balance is  RS .....${cashbalance -= randnumber}`);
                console.log("\n\n\\n\nt\t\t\t\t                  (focus2learn)");
            }
        }
        ;
    }
    else {
        //   PIN CODE / PIN NUMBR VERIFICATION
        let wrongpin1 = await inquirer.prompt([
            {
                name: "wrongpin2",
                type: "confirm",
                message: "\n\n\t\tSorry ! Your PIN Code Not Correct Try again........",
                default: false,
            }
        ]);
        condition = wrongpin1.wrongpin2;
    }
    //  GETTING INPUT , TO CONTINUE ATM PROCESS YES / NO.
    let atmagain1 = await inquirer.prompt([
        {
            name: "atmagain2",
            type: "confirm",
            message: "\n\n\t\tDo You want More Transactions........",
            //default : false,            
        }
    ]);
    console.clear();
    if (atmagain1.atmagain2 !== true) {
        console.log("\n\n\n\n\n\t\t\t\t\t .... Thank you Using ATM services  ....\n");
        console.log("\n\n\\n\nt\t\t\t\t                  (focus2learn)");
        break;
    }
    condition = atmagain1.atmagain2;
} //  END OF CODING.
