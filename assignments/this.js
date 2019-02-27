/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The default binding of the "this" keyword is global, which means the window in most cases.
* 2. The implicit binding of "this" is determined when a function is invoked, and it points to the object invoking the function 
* 3. New binding is when a new object is created, and "this" points to the new object
* 4. In explicit binding, the call, apply, or bind methods are used to specify a particuar object for "this" to point to
*
* write out a code example of each explanation above
*/

// Principle 1

function pointToWindow(){
    return this;
}

console.log(pointToWindow());

// Principle 2

const implicitObject = {
    name: "implicit binding",
    whatsThis: function(){
        return this.name;
    }
}

console.log(implicitObject.whatsThis());

// Principle 3

function NewBinding(attributes){
    this.name = attributes.name;
    this.newThis = function(){
        return `This is ${this.name}`;
    }
}

const principleThree = new NewBinding({name: "new binding"});
console.log(principleThree.newThis());


// Principle 4

function principleFour(){
    return `This is an example of ${this.type} binding`;
}

const pFour = {
    type: "Explicit"
}

console.log(principleFour.call(pFour));