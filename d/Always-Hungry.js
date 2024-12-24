function alwaysHungry(arr) {
        var foundFood = false;
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] == "food") {
            console.log("yummy");
            foundFood = true;
          }
        }
        if (!foundFood) {
          console.log("I'm hungry");
        }
      }

   
alwaysHungry([3.14, "food", "pie", true, "food"]);

alwaysHungry([4, 1, 5, 7, 2]);
