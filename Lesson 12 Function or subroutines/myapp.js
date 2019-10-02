function makeCoffee( sugar, milk )
{
    var instructions = "Boil water,";
    
    instructions += " pour into cup,";
    
    instructions += " add coffee granules,";
    
    instructions += " add " + sugar + " spoons of sugar,";
    
    instructions += " add " + milk + "% milk.";
    
    return instructions;
}

var car1 = {
    color : "Black",
    make : "Honda",
    drive : function(){return "drive"; }
}


var shoppinglist = [
    "Apple",
    "Orange",
    "Pear"
];

var car2 = {
    make : "Honda",
    engine : {
        name: "L15A1",
        vtec: true,
        size: 1.5,
        make : "Honda",
        fuel: "petrol",
        pistons: [{ manufacturer: "skunk2"}, {manufacturer: "skunk2"}, {manufacturer: "skunk2"}, {manufacturer: "skunk2"}]
    },
    drive: function() {return "drive"; }
}

var array = [
    "string", 
    100, 
    ["embed", 200],
    {car: "Honda"},
    function() {return "drive"; }
];