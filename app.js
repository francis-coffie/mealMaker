const menu = {
    _courses: {
      _appetizers: [],
      _mains: [],
      _desserts: []
    },
    get appetizers (){
        return this._courses._appetizers;
    },
    set appetizers (appetizer){
        this._courses._appetizers.push(appetizer);
    },
    get mains (){
        return this._courses._mains;
    },
    set mains (main){
        this._courses._mains.push(main);
    },
    get desserts (){
        return this._courses._desserts;
    },
    set desserts (dessert){
        this._courses._desserts.push(dessert);
    },
    get courses (){
        const allCourses = this._courses._appetizers.concat(this._courses._mains, this._courses._desserts);
        let arrIndex = 0;
        const allCoursesObj = {};
        for (index of allCourses){
            allCoursesObj[arrIndex] = index;
            arrIndex++;
        }
        return allCoursesObj;
    },
    addDishToCourse (courseName, dishName, dishPrice){
        const dish = {
        name: dishName,
        price: dishPrice
        };
        this[courseName] = dish;
    },
    getRandomDishFromCourse (courseName){
        let dishes = this[courseName];
        let numOfDish = Math.floor(Math.random() * dishes.length);
        return dishes[numOfDish];
    },
    generateRandomMeal (){
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `The meal includes as an appetizer: ${appetizer.name}, as a main dish: ${main.name}, and as a dessert: ${dessert.name}. The total cost is ${totalPrice}.`;
    }
};
    
menu.addDishToCourse('appetizers', 'salami', 12);


menu.addDishToCourse('appetizers', 'cheese sticks', 10);
menu.addDishToCourse('appetizers', 'french fries', 26);
menu.addDishToCourse('appetizers', 'tortilla', 20);


menu.addDishToCourse('mains', 'pasta', 90);
menu.addDishToCourse('mains', 'beef steak', 120);

menu.addDishToCourse('desserts', 'cake', 25);
menu.addDishToCourse('desserts', 'ice cream', 35);
menu.addDishToCourse('desserts', 'creppe', 40);

const meal = menu.generateRandomMeal();

console.log(meal);