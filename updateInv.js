function updateInventory(arr1,arr2) {
    let inventory = arr1.concat(arr2);
    console.log(inventory)
    let inventoryObje = {};
}

const arr1 = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
  ];
  
  const arr2 = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
  ];
  
  const updatedInventory = updateInventory(arr1, arr2);
  console.log(updatedInventory);