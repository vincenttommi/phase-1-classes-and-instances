


class Transaction{

//declare private fields

#amount;
#date;
#memo;


constructor(amount,date,  memo){
 // assiginning values to private properties
 // cannot be accessed or changed from outside  of  the class
   this.#amount = amount;
   this.#date = date;
   this.#memo = memo;

const Transaction = new Transaction(100.24, "03/04/2018", "Grocery Shopping");
Transaction.amount;
// => undefined
Transaction.#amount;
// => SyntaxError
}
}




