Memory  = "0";
Current = "0";
Operation = 0;
MAXLENGTH = 30;

function AddDigit(dig)
 { if (Current.indexOf("!") == -1)  //if not already an error
    { if (    (eval(Current) == 0)
              && (Current.indexOf(".") == -1)
         ) { Current = dig;
           } else
           { Current = Current + dig;
           };
      Current = Current.toLowerCase(); //for to lower case
    } else
    { Current = "Hint! Press 'AC'";  //help
    };
   if (Current.indexOf("e0") != -1)
     { var epos = Current.indexOf("e");
       Current = Current.substring(0,epos+1) + Current.substring(epos+2);
     };
  if (Current.length > MAXLENGTH)
     { Current = "Aargh! Too long"; //error message
     };
   document.Calculator.Display.value = Current;
 }

function Dot()                  //PUT IN "."
 {
  if ( Current.length == 0)     //if you press dot with zero change t 0.
    { Current = "0.";
    } else
    {  if (   ( Current.indexOf(".") == -1)
            &&( Current.indexOf("e") == -1)
          )
         { Current = Current + ".";
    };   };
  document.Calculator.Display.value = Current;
 }

function DoExponent()
 {
  if ( Current.indexOf("e") == -1 )
       { Current = Current + "e0";
         document.Calculator.Display.value = Current;
       };
 }

function ToggleSign()
 {
  if  (Current.indexOf("e") != -1)
    { var epos = Current.indexOf("e-");
      if (epos != -1)
         { Current = Current.substring(0,1+epos) + Current.substring(2+epos); //remove -ve exponent 
         } else
         { epos = Current.indexOf("e");
           Current = Current.substring(0,1+epos) + "-" + Current.substring(1+epos); //add -ve exponent
         };
    } else
    {  if ( Current.indexOf("-") == 0 )
         { Current = Current.substring(1);
         } else
         { Current = "-" + Current;
         };
       if (    (eval(Current) == 0)
            && (Current.indexOf(".") == -1 )
          ) { Current = "0"; };
    };
  document.Calculator.Display.value = Current;
 }

function Clear()                //CLEAR ENTRY
 { Current = "0";
   document.Calculator.Display.value = Current;
 }

function AllClear()             //Clear ALL entries!
 { Current = "0";
   Operation = 0;                //clear operation
   Memory = "0";                  //clear memory
   document.Calculator.Display.value = Current;
 }

function Operate(op)            //STORE OPERATION e.g. + * / etc.
 {
 if (Operation != 0) { Calculate(); };

  if (op.indexOf("*") > -1) { Operation = 1; };			//for multiplication
  if (op.indexOf("/") > -1) { Operation = 2; };			//for divide
  if (op.indexOf("+") > -1) { Operation = 3; };			//for sum
  if (op.indexOf("-") > -1) { Operation = 4; };			//for difference
  if (op.indexOf("%") > -1) { Operation = 5; };			//for modulus

  Memory = Current;                 //store value
  Current = "";
  document.Calculator.Display.value = Current;
 }

function Calculate()            //PERFORM CALCULATION (= button)
 { 
  if (Operation == 1) { Current = eval(Memory) * eval(Current); };
  if (Operation == 2)
    { if (eval(Current) != 0)
      { Current = eval(Memory) / eval(Current)
      } else
      { Current = "Error: can't divide by zero!";
      }
    };
  if (Operation == 3) { Current = eval(Memory) + eval(Current); };
  if (Operation == 4) { Current = eval(Memory) - eval(Current); };
  if (Operation == 5) { Current = eval(Memory) % eval(Current); };
  Operation = 0;                //clear operation
  Memory = "0";                  //clear memory
  Current = Current + "";       //FORCE A STRING!
  if (Current.indexOf("Infinity") != -1)
    { Current = "Error: maximum value exceeded!";
    };
  if (Current.indexOf("NaN") != -1)        //eg "1e320" / "1e320"
    { Current = "Error: You've entered a non-numeric!";
    };
  document.Calculator.Display.value = Current;
 }

function FixCurrent()
 {
  Current = document.Calculator.Display.value;
  Current = "" + parseFloat(Current);
  if (Current.indexOf("NaN") != -1)
    { Current = "Enter a number please";
    };
  document.Calculator.Display.value = Current;
 }
 
 function del(){
				Current = document.Calculator.Display.value;
				epp = Current.length;
				a = epp - 1;
				Current = Current.substring(0, a);
				document.Calculator.Display.value = Current;
			}

function mul(){
	
}			
